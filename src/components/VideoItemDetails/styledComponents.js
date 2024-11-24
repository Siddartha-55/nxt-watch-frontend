import {styled} from 'styled-components'

export const VideoItemDetailsMainContainer = styled.div`

`
export const VideoDetailsContainer = styled.div`
    display: flex;
    background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#F7F7F7')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const VideoDetails = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: column;
    padding: 30px;
    @media (min-width: 1200px){
        width: 78vw;
    }
    @media (max-width: 700px){
        width: 100vw;
    }
    @media (max-width: 576px){
        padding: 10px;
    }
`
export const VideoContainer = styled.div`
    height: 500px;
    margin: 10px 0;
    @media (max-width: 576px){
        height: 270px;
    }
    @media (min-width: 576px) and (max-width: 800px){
        height: 300px;
    }
`
export const TextElement = styled.p`
    font-size: 22px;
    margin: 0;
`
export const SubTextElement = styled.p`
    color: #606A89;
    font-size: 18px;
    margin: 0;
`
export const TextContainer = styled.div`
    display: flex;
    align-items: center;
`
export const IconContainer = styled.div`
    color: #606A89;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 0 8px;
    gap: 5px;
    color: ${props => (props.isLiked) || (props.isDisliked) || (props.isSaved) ? '#3b82f6' : null};
    @media (max-width: 576px){
        margin: 0 25px 0 0;
    }
    &:hover{
        cursor: pointer;
    }
`
export const LikesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
    @media (max-width: 576px){
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
export const ChannelContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin: 40px 0;
`
export const ImageElement = styled.img`
    height: 50px;
`
export const DescriptionContainer = styled.div`
    
`
export const Description = styled.p`
    font-size: 17px;
    margin: 35px 0;
`
export const Line = styled.p`
    background-color: #606A89;
    height: 1.5px;
    margin: 0;
`
export const Dot = styled.div`
    color: #606A89;
    font-size: 30px;
    margin: 0px;
    display: flex;
    align-items: center;
`