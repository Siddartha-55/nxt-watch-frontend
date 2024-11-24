import { TrendingContainer, TrendingRouteMainContainer, TrendingVideosContainer, TrendingHeadingContainer, TrendingHeader, TrendingSectionContainer, IconContainer } from "./styledComponents"
import { FailureButton, FailureContainer, FailureHeading, FailureImage, FailureText, LoaderContainer } from "../AllVideos/styledComponents"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import TrendingVideoItem from "../TrendingVideoItem"
import { useState, useEffect, useContext } from "react"
import Cookies from "js-cookie"
import Loader from "react-loader-spinner"
import { HiFire } from "react-icons/hi";
import ModeContext from "../../contexts/ModeContext"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
};

const TrendingRoute = () => {
    const [trendingVideosList, updateTrendingVideosList] = useState()
    const [apiStatus, updateApiStatus] = useState(apiStatusConstants.initial)
    const { activeMode } = useContext(ModeContext)

    const makeApiCall = async () => {
        const jwtToken = Cookies.get('jwtToken')
        const url = 'https://nxt-watch-backend.onrender.com/videos/trending'
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
                publishedAt: eachItem.published_at,
                title: eachItem.title,
                viewCount: eachItem.view_count,
                name: eachItem.channel_name,
                profileImageUrl: eachItem.channel_profile_image_url,
            }))
            updateTrendingVideosList(formattedData)
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
            {trendingVideosList.map(eachItem => {
                return <TrendingVideoItem videoItemDetails={eachItem} />
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
        <TrendingRouteMainContainer>
            <Navbar />
            <TrendingContainer mode={activeMode}>
                <Sidebar />
                <TrendingSectionContainer>
                    <TrendingHeadingContainer mode={activeMode}>
                        <IconContainer mode={activeMode}><HiFire /></IconContainer>
                        <TrendingHeader>Trending</TrendingHeader>
                    </TrendingHeadingContainer>
                    <TrendingVideosContainer mode={activeMode}>
                        {renderMainContent()}
                    </TrendingVideosContainer>
                </TrendingSectionContainer>
            </TrendingContainer>
        </TrendingRouteMainContainer>
    )
}

export default TrendingRoute