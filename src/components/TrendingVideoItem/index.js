import { ImageContainer, VideoItemContainer, VideoTitle, VideoDetails, DescriptionContainer, ViewsContainer, IconContainer, StyledLink } from "./styledComponents";
import { BsDot } from "react-icons/bs";
import ModeContext from "../../contexts/ModeContext";

const TrendingVideoItem = props => {
    const { videoItemDetails } = props
    const { id, publishedAt, thumbnailUrl, title, viewCount, name } = videoItemDetails

    return (
        <ModeContext.Consumer>
            {value => {
                const { activeMode } = value
                return (
                    <StyledLink to={`/videos/${id}`}>
                        <VideoItemContainer mode={activeMode}>
                            <ImageContainer src={thumbnailUrl} />
                            <DescriptionContainer>
                                <VideoTitle>{title}</VideoTitle>
                                <VideoDetails>{name}</VideoDetails>
                                <ViewsContainer>
                                    <VideoDetails>{viewCount} Views</VideoDetails>
                                    <IconContainer><BsDot /></IconContainer>
                                    <VideoDetails>{publishedAt}</VideoDetails>
                                </ViewsContainer>
                            </DescriptionContainer>
                        </VideoItemContainer>
                    </StyledLink>
                )
            }}
        </ModeContext.Consumer>
    )
}

export default TrendingVideoItem