import { AdText, LogoContainer, PremiumAdMainContainer, Button, PremiumAdSubContainer, IconContainer } from "./styledComponents"
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const PremiumAd = () => {
    const [adVisibility, updateAdVisibility] = useState('true')
    const onClickAdVisibility = () => updateAdVisibility(prevState => (!prevState))
    return (
    <PremiumAdMainContainer advisibility={adVisibility}>
        <PremiumAdSubContainer>
            <LogoContainer src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
            <AdText>Buy Nxt Watch Premium prepaid plans with UPI</AdText>
            <Button>GET IT NOW</Button>
        </PremiumAdSubContainer>
        <PremiumAdSubContainer>
            <IconContainer onClick={onClickAdVisibility}><IoClose /></IconContainer>
        </PremiumAdSubContainer>
    </PremiumAdMainContainer>
)
}

export default PremiumAd