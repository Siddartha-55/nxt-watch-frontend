import { GameImage, GameTitle, GameViews, GamingItemContainer, StyledLink } from './styledComponents'
import ModeContext from '../../contexts/ModeContext'

const GamingItem = props => {
    const { gameItemDetails } = props
    const { id, title, thumbnailUrl, viewCount } = gameItemDetails
    return (
        <ModeContext.Consumer>
            {value => {
                const { activeMode } = value
                return (
                    <StyledLink to={`/videos/${id}`}>
                        <GamingItemContainer mode={activeMode}>
                            <GameImage src={thumbnailUrl} />
                            <GameTitle>{title}</GameTitle>
                            <GameViews>{viewCount} Watching Worldwide</GameViews>
                        </GamingItemContainer>
                    </StyledLink>
                )
            }}
        </ModeContext.Consumer>
    )
}

export default GamingItem