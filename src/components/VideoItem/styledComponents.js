import { styled } from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const ImageContainer = styled.img`
    height: 200px;
    width: 100%;
    border-radius: 15px;
    @media (min-width: 1200px){
        height: 194px;
    }
    @media (min-width: 576px) && (max-width : 800px){
        height: 170px;
    }
`
export const DetailsContainer = styled.div`
    display: flex;
    align-items: start;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const Thumbnail = styled.img`
    height: 50px;
    margin: 10px;
    border-radius: 30px;
`
export const VideoItemContainer = styled.li`
    list-style: none;
    width: 320px;
    text-decoration: none;
    border-radius: 15px;
    padding-bottom: 10px;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : 'black')};
    @media (min-width: 576px) && (max-width : 800px){
        width: 300px;
    }
    @media (min-width: 1200px){
        width: 350px;
    }
`
export const VideoTitle = styled.p`
    font-size: 17px;
    margin: 10px 5px;
    display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const VideoDetails = styled.p`
    color: #5B6A7A;
    font-size: 15px;
    padding: 0px;
    margin: 0px;
`
export const DescriptionContainer = styled.div`
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const ViewsContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
`
export const IconContainer = styled.div`
    font-size: 25px;
    color: #5B6A7A;
    align-self: center;
    margin-top: 5px;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`