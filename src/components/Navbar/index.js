import { LogoContainer, NavbarMainContainer, NavbarLaptopContainer, NavbarSubContainer, Button, IconContainer, NavbarMobileContainer, HiddenMenu, OptionContainer, OptionText, PopupContent, ConfirmationText, ConfirmButton, ButtonsContainer, LogoContainer1 } from "./styledComponents"
import { MdDarkMode } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie";
import ModeContext from "../../contexts/ModeContext";
import OptionContext from "../../contexts/OptionContext";
import { MdOutlineLightMode } from "react-icons/md";
import Popup from "reactjs-popup";
import { CiSaveDown2 } from "react-icons/ci";
import 'reactjs-popup/dist/index.css'

const Navbar = () => {
    const history = useHistory()
    const { activeMode, updateActiveMode } = useContext(ModeContext)
    const { activeOption, updateActiveOption } = useContext(OptionContext)
    const [menuVisibility, updateMenuVisibility] = useState('false')
    const updateMenu = () => {
        updateMenuVisibility(prevState => (!prevState))
    }
    const onClickLogout = () => {
        Cookies.remove('jwtToken')
        history.replace('/login')
        updateActiveOption('')
    }
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
    const onClickMode = event => updateActiveMode(event.currentTarget.id)

    return (
        <>
            <NavbarMainContainer mode={activeMode}>
                <NavbarSubContainer mode={activeMode}>
                    <LogoContainer src='https://i.imghippo.com/files/Ckx1493z.png' />
                </NavbarSubContainer>
                <NavbarMobileContainer mode={activeMode}>
                    {activeMode === 'light' ? (
                        <IconContainer onClick={onClickMode} id="dark"><MdDarkMode /></IconContainer>
                    ) : (
                        <IconContainer mode={activeMode} onClick={onClickMode} id="light"><MdOutlineLightMode /></IconContainer>
                    )}
                    <IconContainer mode={activeMode} onClick={updateMenu}><IoReorderThree /></IconContainer>
                    <Popup
                        modal
                        contentStyle={{ width: '400px', height: '180px', borderRadius: '10px', backgroundColor: (activeMode === 'dark' ? '#212121' : null), border: 'none' }}
                        trigger={  
                            <IconContainer mode={activeMode}><MdLogout /></IconContainer>
                        }
                    >
                        {
                            close => (
                                <PopupContent>
                                    <ConfirmationText>
                                        Are you sure you want to logout?
                                    </ConfirmationText>
                                    <ButtonsContainer>
                                        <ConfirmButton mode={activeMode} onClick={() => close()} outline>Cancel</ConfirmButton>
                                        <ConfirmButton onClick={onClickLogout}>Confirm</ConfirmButton>
                                    </ButtonsContainer>
                                </PopupContent>
                            )
                        }
                    </Popup>
                </NavbarMobileContainer>
                <NavbarLaptopContainer mode={activeMode}>
                    {activeMode === 'light' ? (
                        <IconContainer onClick={onClickMode} id="dark"><MdDarkMode /></IconContainer>
                    ) : (
                        <IconContainer mode={activeMode} onClick={onClickMode} id="light"><MdOutlineLightMode /></IconContainer>
                    )}
                    <LogoContainer1 src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                    <Popup
                        modal
                        contentStyle={{ width: '400px', height: '180px', borderRadius: '10px', backgroundColor: (activeMode === 'dark' ? '#212121' : null), border: 'none' }}
                        trigger={
                            <Button mode={activeMode}>Logout</Button>
                        }
                    >
                        {
                            close => (
                                <PopupContent>
                                    <ConfirmationText>
                                        Are you sure you want to logout?
                                    </ConfirmationText>
                                    <ButtonsContainer>
                                        <ConfirmButton mode={activeMode} onClick={() => close()} outline>Cancel</ConfirmButton>
                                        <ConfirmButton onClick={onClickLogout}>Confirm</ConfirmButton>
                                    </ButtonsContainer>
                                </PopupContent>
                            )
                        }
                    </Popup>
                </NavbarLaptopContainer>
            </NavbarMainContainer>
            <HiddenMenu menuvisibility={menuVisibility} onClick={updateMenu} mode={activeMode}>
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
            </HiddenMenu>
        </>
    )
}

export default Navbar