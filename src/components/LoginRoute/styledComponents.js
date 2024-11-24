import {styled} from 'styled-components'

export const LoginRouteMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${props => (props.mode === 'dark' ? '#212121' : '#f9f9f9')};
`
export const LoginContainer = styled.div`
    background-color: ${props => (props.mode === 'dark' ? '#0F0F0F' : '#f8fafc')};
    box-shadow: 1px 1px 5px ${props => (props.mode === 'dark' ? '#0F0F0F' : 'lightgrey')};
    padding: 50px;
    width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    @media (max-width: 500px) {
        width: 60%;
        padding: 30px;
    }
`
export const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const LabelElement = styled.label`
    margin: 10px 0px;
    color: ${props => (props.mode === 'light' ? '#0f0f0f' : 'grey')};
    font-size: 15px;
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 10px;
    }
`
export const InputElement = styled.input`
    padding: 10px;
    border: 1.5px solid ${props => (props.mode === 'dark' ? '#262D35' : 'grey')};
    margin-bottom: 15px;
    color: ${props => (props.mode === 'dark' ? 'white' : null )};
    background-color: ${props => (props.mode === 'dark' ? '#0f0f0f' : null)};
`
export const LogoImage = styled.img`
    height: 50px;
    padding-bottom: 30px;
    align-self: center;
    @media (max-width: 500px) {
        height: 30px;
        padding-bottom: 10px;
    }
`
export const LoginButton = styled.button`
    background-color: #2082F2;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px;
    margin: 20px 0 0 0;
    font-size: 15px;
    @media (max-width: 500px) {
        margin: 5px 0;
    }
`
export const ShowPasswordContainer = styled.div``
export const ErrorMessage = styled.p`
    color: red;
    margin: 0;
`
export const RedirectText = styled.p`
    color: #2082F2;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`
export const RedirectContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
`