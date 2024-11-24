import { TrendingContainer, TrendingRouteMainContainer, TrendingVideosContainer, TrendingHeadingContainer, TrendingHeader, TrendingSectionContainer, IconContainer } from "../TrendingRoute/styledComponents"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import TrendingVideoItem from "../TrendingVideoItem"
import { useContext } from "react"
import { HiFire } from "react-icons/hi";
import ModeContext from "../../contexts/ModeContext"
import SavedVideosContext from '../../contexts/SavedVideosContext'
import { CiSaveDown2 } from "react-icons/ci";
import { FailureContainer, FailureHeading, FailureImage, FailureText } from "../AllVideos/styledComponents"

const SavedVideosRoute = () => {
    const { activeMode } = useContext(ModeContext)
    const { savedVideosList } = useContext(SavedVideosContext)
    const renderFailureView = () => (
        <FailureContainer mode={activeMode}>
            <FailureImage src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png' />
            <FailureHeading>No saved videos found</FailureHeading>
            <FailureText>You can save videos while watching them</FailureText>
        </FailureContainer>
    )
    const renderSuccessview = () => (
        <>
            {savedVideosList.map(eachItem => {
                return <TrendingVideoItem videoItemDetails={eachItem} />
            })}
        </>
    )

    return (
        <TrendingRouteMainContainer>
            <Navbar />
            <TrendingContainer mode={activeMode}>
                <Sidebar />
                <TrendingSectionContainer>
                    <TrendingHeadingContainer mode={activeMode}>
                        <IconContainer mode={activeMode}><CiSaveDown2 /></IconContainer>
                        <TrendingHeader>Savedvideos</TrendingHeader>
                    </TrendingHeadingContainer>
                    <TrendingVideosContainer mode={activeMode}>
                        {(savedVideosList.length === 0) ? (
                            renderFailureView()
                        ) : (
                            renderSuccessview()
                        )}
                    </TrendingVideosContainer>
                </TrendingSectionContainer>
            </TrendingContainer>
        </TrendingRouteMainContainer>
    )
}

export default SavedVideosRoute