import { useState, useEffect, useContext } from "react"
import { InputElement, SearchBox, VideosContainer, Button, AllVideosMainContainer, FailureContainer, FailureImage, FailureHeading, FailureText, FailureButton, LoaderContainer } from "./styledComponents"
import Cookies from "js-cookie"
import VideoItem from "../VideoItem"
import { IoSearch } from "react-icons/io5";
import Loader from "react-loader-spinner";
import ModeContext from "../../contexts/ModeContext";

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
};

const AllVideos = () => {
    const [videosList, updateVideosList] = useState([])
    const [searchInput, updateSearchInput] = useState('')
    const [apiStatus, updateApiStatus] = useState(apiStatusConstants.initial)
    const { activeMode } = useContext(ModeContext)

    const makeApiCall = async () => {
        const jwtToken = Cookies.get('jwtToken')
        console.log(jwtToken)
        const url = `https://nxt-watch-backend.onrender.com/videos/all?search=${searchInput}`
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
            method: "GET",
        }
        updateApiStatus(apiStatusConstants.inProgress)
        const response = await fetch(url, options)
        if (response.ok === true) {
            const data = await response.json()
            console.log(data)
            const formattedData = data.map(eachItem => ({
                id: eachItem.id,
                publishedAt: eachItem.published_at,
                thumbnailUrl: eachItem.thumbnail_url,
                title: eachItem.title,
                viewCount: eachItem.view_count,
                name: eachItem.channel_name,
                profileImageUrl: eachItem.channel_profile_image_url,
            }))
            updateVideosList(formattedData)
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

    const changeSearchInput = event => updateSearchInput(event.target.value)
    const onClickSearch = async () => {
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
            {videosList.map(eachItem => {
                return <VideoItem videoItemDetails={eachItem} />
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
        <AllVideosMainContainer mode={activeMode}>
            <SearchBox mode={activeMode}>
                <InputElement mode={activeMode} placeholder="Search" onChange={changeSearchInput} />
                <Button mode={activeMode} onClick={onClickSearch}><IoSearch /></Button>
            </SearchBox>
            <VideosContainer mode={activeMode}>
                {renderMainContent()}
            </VideosContainer>
        </AllVideosMainContainer>
    )
}

export default AllVideos