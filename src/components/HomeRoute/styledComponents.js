import {styled} from "styled-components"

export const HomeRouteMainContainer = styled.div`
    
`
export const HomeContainer = styled.div`
    display: flex;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const VideosContainer = styled.div`
    width: 75vw;
    
    @media (max-width: 768px){
        
    }
    @media (min-width: 1200px){
        width: 82vw;
    }
    @media (max-width: 700px){
        width: 100vw;
    }
`