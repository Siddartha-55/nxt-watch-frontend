import { styled} from 'styled-components'

export const VideosContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    gap: 15px;
    padding: 10px;
    justify-content: center;
    background-color: ${props => (props.mode === 'dark' ? '#181818' : '#F9F9F9')};
`
export const SearchBox = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    background-color: ${props => (props.mode === 'dark' ? '#181818' : '#F9F9F9')};
`
export const InputElement = styled.input`
    padding: 10px;
    width: 300px;
    border: 1px solid #5B6A7A;
    background-color: ${props => (props.mode === 'dark' ? '#181818' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const Button = styled.button`
    padding: 5px;
    width: 60px;
    font-size: 20px;
    border: 1px solid #5B6A7A;
    background-color: ${props => (props.mode === 'dark' ? '#181818' : 'white')};
    color: ${props => (props.mode === 'dark' ? 'white' : null)};
`
export const AllVideosMainContainer = styled.div`
    background-color: ${props => (props.mode === 'dark' ? '#181818' : '#F9F9F9')};
`
export const FailureContainer = styled.div`
    background-color: ${props => (props.mode === 'dark' ? '#0F0F0F' : '#F9F9F9')};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FailureImage = styled.img`
    height: 350px;
    @media (max-width: 576px){
        height: 280px;
    }
`
export const FailureHeading = styled.h1`
    margin: 10px;
    text-align: center;
    @media (max-width: 576px){
        font-size: 22px;
    }
`
export const FailureText = styled.p`
    margin: 5px;
    text-align: center;
    @media (max-width: 576px){
        font-size: 15px;
    }
`
export const FailureButton = styled.button`
    background-color: #4946DD;
    color: white;
    padding: 10px 25px;
    border: none;
    margin: 10px;
    border-radius: 5px;
`
export const LoaderContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`