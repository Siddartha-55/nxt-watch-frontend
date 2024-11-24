import {styled} from 'styled-components'

export const SidebarMainContainer = styled.div`
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (max-width: 768px){
        
    }
    @media (min-width: 1200px){
        width: 17vw;
    }
    @media (max-width: 700px){
        display: none;
    }
`
export const OptionContainer = styled.div`
    display: flex;
    padding: 0 20px;
    align-items: center;
    gap: 25px;
    color: #656565;
    &:hover{
        cursor: pointer;
    }
    background-color: ${props => (props.mode === 'dark' ? (props.option ? '#383838' : '#212121') : (props.option ? '#F1F5F9' : 'white'))};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const IconContainer = styled.div`
    font-size: 25px;
    color: ${props => (props.option ? '#FF031C' : null)};
`
export const OptionText = styled.p`
    font-weight: ${props => (props.option ? '700' : null)}
`
export const OptionsContainer = styled.div`
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const ContactUsSection = styled.div`
    padding: 0 20px;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const Header = styled.h1`
    color: ${props => (props.mode === 'dark' ? 'white' : '#656565')};
    font-size: 25px;
`
export const Image = styled.img`
    height: 35px;
    margin: 5px;
`
export const Text = styled.h3`
    color: ${props => (props.mode === 'dark' ? 'white' : '#656565')};
`