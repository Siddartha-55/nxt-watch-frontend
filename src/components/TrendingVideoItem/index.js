import { ImageContainer, Image, VideoItemContainer, VideoTitle, VideoDetails, DescriptionContainer, ViewsContainer, IconContainer, StyledLink } from "./styledComponents";
import { BsDot } from "react-icons/bs";
import ModeContext from "../../contexts/ModeContext";

const TrendingVideoItem = props => {
    const { videoItemDetails } = props
    const { id, publishedAt, thumbnailUrl, title, viewCount, name } = videoItemDetails

     const formatViews = (views) => {
        const num = parseInt(views, 10);
        if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B views`;
        if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M views`;
        if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K views`;
        return `${num} views`;
    }

    const formatPublishedDate = (isoDate) => {
        const publishedDate = new Date(isoDate);
        const now = new Date();
        const seconds = Math.floor((now - publishedDate) / 1000);

        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'week', seconds: 604800 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 },
        ];

        for (const { label, seconds: intervalSeconds } of intervals) {
            const count = Math.floor(seconds / intervalSeconds);
            if (count >= 1) {
                return `${count} ${label}${count !== 1 ? 's' : ''} ago`;
            }
        }

        return 'Just now';
    }

    return (
        <ModeContext.Consumer>
            {value => {
                const { activeMode } = value
                return (
                    <StyledLink to={`/videos/${id}`}>
                        <VideoItemContainer mode={activeMode}>
                            <ImageContainer>
                                <Image src={thumbnailUrl} />
                            </ImageContainer>
                            <DescriptionContainer>
                                <VideoTitle>{title}</VideoTitle>
                                <VideoDetails>{name}</VideoDetails>
                                <ViewsContainer>
                                    <VideoDetails>{formatViews(viewCount)}</VideoDetails>
                                    <IconContainer><BsDot /></IconContainer>
                                    <VideoDetails>{formatPublishedDate(publishedAt)}</VideoDetails>
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