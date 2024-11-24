import { GamingContainer, GamingRouteMainContainer, GamingVideosContainer, GamingHeadingContainer, GamingHeader, GamingSectionContainer, IconContainer } from "./styledComponents"
import { FailureButton, FailureContainer, FailureHeading, FailureImage, FailureText, LoaderContainer } from "../AllVideos/styledComponents"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import GamingItem from "../GamingItem"
import { useState, useEffect, useContext } from "react"
import Cookies from "js-cookie"
import Loader from "react-loader-spinner"
import { SiYoutubegaming } from "react-icons/si";
import ModeContext from "../../contexts/ModeContext"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
};

const GamingRoute = () => {
    const [gamesList, updateGamesList] = useState()
    const [apiStatus, updateApiStatus] = useState(apiStatusConstants.initial)
    const { activeMode } = useContext(ModeContext)

    const makeApiCall = async () => {
        const jwtToken = Cookies.get('jwtToken')
        const url = 'https://nxt-watch-backend.onrender.com/videos/gaming/'
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
            method: 'GET'
        }
        updateApiStatus(apiStatusConstants.inProgress)
        const response = await fetch(url, options)
        if (response.ok) {
            const data = await response.json()
            const formattedData = data.map(eachItem => ({
                id: eachItem.id,
                thumbnailUrl: eachItem.thumbnail_url,
                title: eachItem.title,
                viewCount: eachItem.view_count,
            }))
            updateGamesList(formattedData)
            updateApiStatus(apiStatusConstants.success)
        }
        else {
            updateApiStatus(apiStatusConstants.failure)
        }
    }

    useEffect(() => {
        makeApiCall()
    }, [])

    const onClickRetry = () => {
        makeApiCall()
    }

    const renderInprogressView = () => (
        <LoaderContainer>
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </LoaderContainer>
    )

    const renderFailureView = () => (
        <FailureContainer mode={activeMode}>
            <FailureImage src={activeMode === 'dark' ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'} />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureText>We are having some trouble to complete your request.</FailureText>
            <FailureText>Please try again</FailureText>
            <FailureButton onClick={onClickRetry}>Retry</FailureButton>
        </FailureContainer>
    )

    const renderSuccessview = () => (
        <>
            {gamesList.map(eachItem => {
                return <GamingItem gameItemDetails={eachItem} />
            })}
        </>
    )

    const renderMainContent = () => {
        switch (apiStatus) {
            case apiStatusConstants.inProgress:
                return renderInprogressView();
            case apiStatusConstants.failure:
                return renderFailureView();
            case apiStatusConstants.success:
                return renderSuccessview();
            default:
                return null;
        }
    }

    return (
        <GamingRouteMainContainer>
            <Navbar />
            <GamingContainer mode={activeMode}>
                <Sidebar />
                <GamingSectionContainer>
                    <GamingHeadingContainer mode={activeMode}>
                        <IconContainer mode={activeMode}><SiYoutubegaming /></IconContainer>
                        <GamingHeader>Gaming</GamingHeader>
                    </GamingHeadingContainer>
                    <GamingVideosContainer mode={activeMode}>
                        {renderMainContent()}
                    </GamingVideosContainer>
                </GamingSectionContainer>
            </GamingContainer>
        </GamingRouteMainContainer>
    )
}

export default GamingRoute