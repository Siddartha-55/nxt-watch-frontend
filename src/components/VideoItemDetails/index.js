import { VideoDetails, VideoItemDetailsMainContainer, VideoDetailsContainer, VideoContainer, TextElement, TextContainer, SubTextElement, IconContainer, LikesContainer, ChannelContainer, ImageElement, DescriptionContainer, Description, Line, Dot } from "./styledComponents";
import { FailureButton, FailureContainer, FailureHeading, FailureImage, FailureText, LoaderContainer } from "../AllVideos/styledComponents"
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState, useEffect, useContext } from 'react'
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import { BsDot } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import ReactPlayer from "react-player";
import ModeContext from "../../contexts/ModeContext";
import SavedVideosContext from "../../contexts/SavedVideosContext";
import OptionContext from "../../contexts/OptionContext";

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
};

const VideoItemDetails = props => {
    const [videoDetails, updateVideoDetails] = useState()
    const [apiStatus, updateApiStatus] = useState(apiStatusConstants.initial)
    const { id } = props.match.params
    const { activeMode } = useContext(ModeContext)
    const { savedVideosList, updateSavedVideosList } = useContext(SavedVideosContext)
    const {updateActiveOption} = useContext(OptionContext)
    const currentVideo = savedVideosList.filter(eachItem => eachItem.id === id)
    const [isLiked, updateIsLiked] = useState((currentVideo.length === 0) ? false :  currentVideo[0].isLiked)
    const [isDisliked, updateIsDisliked] = useState((currentVideo.length === 0) ? false : currentVideo[0].isDisliked)
    const [isSaved, updateIsSaved] = useState((currentVideo.length === 0) ? false : currentVideo[0].isSaved)

    updateActiveOption('')
    useEffect(() => {
        const makeApiCall = async () => {
            const jwtToken = Cookies.get('jwtToken')
            const url = `https://nxt-watch-backend.onrender.com/videos/${id}`
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
                const details = data[0]
                const formattedData = {
                    id: details.id,
                    videoUrl: details.video_url,
                    thumbnailUrl: details.thumbnail_url,
                    title: details.title,
                    description: details.description,
                    publishedAt: details.published_at,
                    viewCount: details.view_count,
                    isLiked: isLiked,
                    isDisliked: isDisliked,
                    isSaved: isSaved,
                    name: details.channel_name,
                    profileImageUrl: details.channel_profile_image_url,
                    subscriberCount: details.channel_subscriber_count
                }
                console.log(formattedData)
                updateVideoDetails(formattedData)
                updateApiStatus(apiStatusConstants.success)
            }
            else {
                updateApiStatus(apiStatusConstants.failure)
            }
        }
        makeApiCall()
    }, [])

    const onClickLike = () => {
        updateIsLiked(prevState => !prevState)
        if (isLiked === false && isDisliked === true) {
            updateIsDisliked(prevState => !prevState)
        }
    }
    const onClickDislike = () => {
        updateIsDisliked(prevState => !prevState)
        if (isLiked === true && isDisliked === false) {
            updateIsLiked(prevState => !prevState)
        }
    }
    const onClickSave = () => {
        if (isSaved) {
            updateSavedVideosList(savedVideosList.filter(eachItem => eachItem.id !== videoDetails.id))
            updateIsSaved(false)
        } else {
            const formattedData = {
                id: videoDetails.id,
                videoUrl: videoDetails.videoUrl,
                thumbnailUrl: videoDetails.thumbnailUrl,
                title: videoDetails.title,
                description: videoDetails.description,
                publishedAt: videoDetails.publishedAt,
                viewCount: videoDetails.viewCount,
                isLiked: isLiked,
                isDisliked: isDisliked,
                isSaved: !isSaved,
                name: videoDetails.name,
                profileImageUrl: videoDetails.profileImageUrl,
                subscriberCount: videoDetails.subscriberCount
            }
            updateSavedVideosList([...savedVideosList, formattedData])
            updateIsSaved(true)
        }
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
            <FailureButton>Retry</FailureButton>
        </FailureContainer>
    )

    const renderSuccessview = () => (
        <>
            <VideoContainer><ReactPlayer url={videoDetails.videoUrl} width={'100%'} height={'100%'} /></VideoContainer>
            <TextElement>{videoDetails.title}</TextElement>
            <LikesContainer>
                <TextContainer>
                    <SubTextElement>{videoDetails.viewCount} views</SubTextElement>
                    <Dot><BsDot /></Dot>
                    <SubTextElement>{videoDetails.publishedAt}</SubTextElement>
                </TextContainer>
                <TextContainer>
                    <IconContainer onClick={onClickLike} isLiked={isLiked}><AiOutlineLike /> Like</IconContainer>
                    <IconContainer onClick={onClickDislike} isDisliked={isDisliked}><AiOutlineDislike /> Dislike</IconContainer>
                    <IconContainer onClick={onClickSave} isSaved={isSaved}><CiSaveDown2 /> {isSaved ? 'saved': 'save'}</IconContainer>
                </TextContainer>
            </LikesContainer>
            <Line></Line>
            <ChannelContainer>
                <ImageElement src={videoDetails.profileImageUrl} />
                <DescriptionContainer>
                    <TextElement>{videoDetails.name}</TextElement>
                    <SubTextElement>{videoDetails.subscriberCount} subscribers</SubTextElement>
                    <Description>{videoDetails.description}</Description>
                </DescriptionContainer>
            </ChannelContainer>
        </>
    )

    const renderMainContent = () => {
        console.log(videoDetails)
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
        <VideoItemDetailsMainContainer>
            <Navbar />
            <VideoDetailsContainer mode={activeMode}>
                <Sidebar />
                <VideoDetails>
                    {renderMainContent()}
                </VideoDetails>
            </VideoDetailsContainer>
        </VideoItemDetailsMainContainer>
    )
}

export default VideoItemDetails