import {styled} from 'styled-components'

export const TrendingRouteMainContainer = styled.div``
export const TrendingContainer = styled.div`
    display: flex;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const TrendingVideosContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 50px 70px;
    gap: 40px;
    margin: 0px;
    background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#F7F7F7')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (max-width: 576px){
        padding: 20px 0;
        align-items: center;
    }
    @media (min-width: 576px) and (max-width : 1000px){
        padding: 30px 20px;
    }
`
export const TrendingHeadingContainer = styled.div`
    margin: 0px;
    padding: 30px 70px;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: ${props => (props.mode === 'dark' ? '#181818' : '#F1F1F1')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
    @media (max-width: 576px){
        padding: 20px;
    }
    @media (min-width: 576px) and (max-width : 1000px){
        padding: 30px;
    }
`
export const IconContainer = styled.div`
    color: red;
    width: 80px;
    height: 80px;
    font-size: 30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : '#E1E9F0')};
`
export const TrendingHeader = styled.h1`
    margin: 0px;
`
export const TrendingSectionContainer = styled.div`
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