import { DetailsContainer, ImageContainer, Thumbnail, VideoItemContainer, VideoTitle, VideoDetails, DescriptionContainer, ViewsContainer, IconContainer, StyledLink } from "./styledComponents";
import { BsDot } from "react-icons/bs";
import ModeContext from "../../contexts/ModeContext";

const VideoItem = props => {
    const { videoItemDetails } = props
    const { id, publishedAt, thumbnailUrl, title, viewCount, profileImageUrl, name } = videoItemDetails

    return (
        <ModeContext.Consumer>
            {value => {
                const { activeMode } = value
                return (
                    <StyledLink to={`/videos/${id}`}>
                        <VideoItemContainer mode={activeMode}>
                            <ImageContainer src={thumbnailUrl} />
                            <DetailsContainer mode={activeMode}>
                                <Thumbnail src={profileImageUrl} />
                                <DescriptionContainer mode={activeMode}>
                                    <VideoTitle>{title}</VideoTitle>
                                    <VideoDetails>{name}</VideoDetails>
                                    <ViewsContainer mode={activeMode}>
                                        <VideoDetails>{viewCount} Views</VideoDetails>
                                        <IconContainer mode={activeMode}><BsDot /></IconContainer>
                                        <VideoDetails>{publishedAt}</VideoDetails>
                                    </ViewsContainer>
                                </DescriptionContainer>
                            </DetailsContainer>
                        </VideoItemContainer>
                    </StyledLink>
                )
            }}
        </ModeContext.Consumer>
    )
}

export default VideoItem