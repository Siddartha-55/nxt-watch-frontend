import { ContactUsSection, IconContainer, Text, Image, OptionContainer, OptionsContainer, OptionText, SidebarMainContainer, Header } from "./styledComponents"
import { IoMdHome } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ModeContext from "../../contexts/ModeContext";
import OptionContext from "../../contexts/OptionContext";
import { useContext } from "react";
import { CiSaveDown2 } from "react-icons/ci";

const Sidebar = () => {
    const history = useHistory()
    const { activeMode } = useContext(ModeContext)
    const { activeOption, updateActiveOption } = useContext(OptionContext)
    const onClickTrending = () => {
        history.push('/trending')
        updateActiveOption('trending')
    }
    const onClickHome = () => {
        history.push('/')
        updateActiveOption('home')
    }
    const onClickGaming = () => {
        history.push('/gaming')
        updateActiveOption('gaming')
    }
    const onClickSavedVideos = () => {
        history.push('/savedvideos')
        updateActiveOption('savedvideos')
    }

    return (
        <SidebarMainContainer mode={activeMode}>
            <OptionsContainer mode={activeMode}>
                <OptionContainer mode={activeMode} option={activeOption === 'home'} onClick={onClickHome}>
                    <IconContainer option={activeOption === 'home'}><IoMdHome /></IconContainer>
                    <OptionText option={activeOption === 'home'}>Home</OptionText>
                </OptionContainer>
                <OptionContainer mode={activeMode} option={activeOption === 'trending'} onClick={onClickTrending}>
                    <IconContainer option={activeOption === 'trending'}><HiFire /></IconContainer>
                    <OptionText option={activeOption === 'trending'}>Trending</OptionText>
                </OptionContainer>
                <OptionContainer mode={activeMode} option={activeOption === 'gaming'} onClick={onClickGaming}>
                    <IconContainer option={activeOption === 'gaming'}><SiYoutubegaming /></IconContainer>
                    <OptionText option={activeOption === 'gaming'}>Gaming</OptionText>
                </OptionContainer>
                <OptionContainer mode={activeMode} option={activeOption === 'savedvideos'} onClick={onClickSavedVideos}>
                    <IconContainer option={activeOption === 'savedvideos'}><CiSaveDown2 /></IconContainer>
                    <OptionText option={activeOption === 'savedvideos'}>Saved Videos</OptionText>
                </OptionContainer>
            </OptionsContainer>
            <ContactUsSection mode={activeMode}>
                <Header mode={activeMode}>Contact Us</Header>
                <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
                <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
                <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
                <Text mode={activeMode}>Enjoy! Now to see your channels and recommendations!</Text>
            </ContactUsSection>
        </SidebarMainContainer>
    )
}

export default Sidebar