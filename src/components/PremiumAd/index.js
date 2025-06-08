import { AdText, LogoContainer, PremiumAdMainContainer, Button, PremiumAdSubContainer, IconContainer } from "./styledComponents"
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const PremiumAd = () => {
    const [adVisibility, updateAdVisibility] = useState('true')
    const onClickAdVisibility = () => updateAdVisibility(prevState => (!prevState))
    return (
    <PremiumAdMainContainer advisibility={adVisibility}>
        <PremiumAdSubContainer>
            <LogoContainer src="https://i.imghippo.com/files/Ckx1493z.png" />
            <AdText>Buy WATCH IT Premium prepaid plans with UPI</AdText>
            <Button>GET IT NOW</Button>
        </PremiumAdSubContainer>
        <PremiumAdSubContainer>
            <IconContainer onClick={onClickAdVisibility}><IoClose /></IconContainer>
        </PremiumAdSubContainer>
    </PremiumAdMainContainer>
)
}

export default PremiumAd