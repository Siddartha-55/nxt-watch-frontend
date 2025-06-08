import { styled } from 'styled-components'

export const NavbarMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const NavbarSubContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const LogoContainer = styled.img`
    height: 50px;
    margin: 0 20px;
    @media (max-width: 600px){
        height: 25px;
        margin: 0 10px;
    }
`
export const LogoContainer1 = styled.img`
    height: 35px;
    margin: 0 20px;
    @media (max-width: 600px){
        height: 25px;
        margin: 0 10px;
    }
`
export const Button = styled.button`
    padding: 5px 15px;
    color: ${props => (props.mode === 'dark' ? 'white' : '#2082F2')};
    border: ${props => (props.mode === 'dark' ? '1.5px solid white' : '1.5px solid #2082F2')};
    font-size: 15px;
    font-weight: bold;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const IconContainer = styled.div`
    font-size: 40px;
    display: flex;
    align-items: center;
    color: ${props => (props.option ? '#FF031C' : null)};
    @media (max-width: 600px){
        font-size: 30px;
    }
`
export const NavbarMobileContainer = styled.div`
    display: none;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (max-width: 600px){
        display: flex;
        gap: 10px;
    }
`
export const NavbarLaptopContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (max-width: 600px){
        display: none;
    }
`
export const HiddenMenu = styled.div`
    display: ${props => (props.menuvisibility ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: end;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (min-width: 600px){
       display: none;
    }
`
export const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    color: #656565;
    padding: 0 20px;
    background-color: ${props => (props.mode === 'dark' ? (props.option ? '#383838' : '#212121') : (props.option ? '#F1F5F9' : 'white'))};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const OptionText = styled.p`
    font-weight: ${props => (props.option ? '700' : null)};
`
export const ConfirmButton = styled.button`
    padding: 12px 20px;
    background-color: ${props => (props.outline ? (props.mode === 'dark' ? '#212121' : 'white' ) : '#2082F2')};
    border: ${props => (props.outline ? '1.5px solid #CDD5DE' : 'none')};
    border-radius: 3px;
    color: ${props => (props.outline ? "#7d8187" : "white")};
    font-size: 15px;
    font-weight: bold;
`
export const PopupContent = styled.div`
    border-radius: 10px;
    padding: 30px;
`
export const ConfirmationText = styled.h1`
    color: #2F5C8B;
    font-size: 18px;
    text-align: center;
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 30px;
`