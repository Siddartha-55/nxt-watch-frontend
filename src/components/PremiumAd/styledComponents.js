import {styled} from 'styled-components'

export const PremiumAdMainContainer = styled.div`
    display: ${props => (props.advisibility ? 'flex' : 'none')};
    justify-content: space-between;
    align-items: flex-start;
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    height: 200px;
    padding: 20px;
`
export const PremiumAdSubContainer = styled.div`
    color: black;
`
export const AdText = styled.p`
    font-size: 20px;
    color: black;
    background-color: white;
`
export const LogoContainer = styled.img`
    height: 50px;
    background-color: transparent;
    color: black;
`
export const Button = styled.button`
    padding: 10px 15px;
    color: #3D2C47;
    border: 1.5px solid #3D2C47;
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0px;
    background-color: white;
    color: black;
`
export const IconContainer = styled.div`
    font-size: 25px;
    background-color: white;
    color: black;
`