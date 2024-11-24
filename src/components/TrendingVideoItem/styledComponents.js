import { styled } from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const ImageContainer = styled.img`
    height: 220px;
    @media (max-width: 576px){
        height: 190px;
        width: 350px;
    }
    @media (min-width: 1200px){
        height: 250px;
        width: 450px;
    }
    @media (min-width: 576px) and (max-width: 1000px){
        height: 165px;
        width: 250px;
    }
    @media (min-width: 1000px) and (max-width: 1200px){
        height: 220px;
        width: 340px;
    }
`
export const VideoItemContainer = styled.li`
    list-style: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 90%;
    background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#f7f7f7')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (min-width: 576px){
        display: flex;
        flex-direction: row;
        align-items: start;
    }
    @media (min-width: 576px) and (max-width : 1000px){
        width: 100%;
    }
    @media (min-width: 1000px) and (max-width: 1200px){
        width: 100%;
    }
    @media (min-width: 1200px){
        
    }
`
export const VideoTitle = styled.p`
    font-size: 25px;
    font-weight: 600;
    margin: 10px 0;
    @media (min-width: 576px) and (max-width : 1000px){
        font-size: 18px;
    }
    @media (min-width: 1000px) and (max-width: 1200px){
        font-size: 20px;
    }
`
export const VideoDetails = styled.p`
    color: #5B6A7A;
    margin: 0px;
    font-size: 18px;
`
export const DescriptionContainer = styled.div`
@media (max-width: 576px){
    width: 330px;
}

`
export const ViewsContainer = styled.div`
    display: flex;
    align-items: center;
`
export const IconContainer = styled.div`
    font-size: 25px;
    color: #5B6A7A;
    align-self: center;
    margin-top: 5px;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`