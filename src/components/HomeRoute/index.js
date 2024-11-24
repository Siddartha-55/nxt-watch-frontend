import AllVideos from "../AllVideos"
import Navbar from "../Navbar"
import PremiumAd from "../PremiumAd"
import Sidebar from "../Sidebar"
import { HomeContainer, HomeRouteMainContainer, VideosContainer } from "./styledComponents"
import ModeContext from "../../contexts/ModeContext"

const HomeRoute = () => (
    <ModeContext.Consumer>
        {value => {
            const { activeMode } = value
            return (
                <HomeRouteMainContainer>
                    <Navbar />
                    <HomeContainer  mode={activeMode}>
                        <Sidebar />
                        <VideosContainer>
                            <PremiumAd />
                            <AllVideos />
                        </VideosContainer>
                    </HomeContainer>
                </HomeRouteMainContainer>
            )
        }}
    </ModeContext.Consumer>
)

export default HomeRoute