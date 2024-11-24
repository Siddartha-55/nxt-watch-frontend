import {styled} from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const GamingItemContainer = styled.li`
    list-style: none;
    background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#F7F7F7')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (max-width: 576px){
        width: 165px;
    }
    @media (min-width: 576px) and (max-width: 700px){
        width: 190px;
    }
    @media (min-width: 700px) and (max-width: 1050px){
        width: 200px;
    }
`
export const GameImage = styled.img`
    height: 380px;
    @media (max-width: 576px){
        height: 200px;
    }
    @media (min-width: 576px) and (max-width: 700px){
        height: 230px;
    }
    @media (min-width: 700px) and (max-width: 1050px){
        height: 250px;
    }
    
`
export const GameTitle = styled.p`
    font-weight: 600;
    margin: 20px 0 5px 0;
`
export const GameViews = styled.p`
    color: #8C8B91;
    margin: 0;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`