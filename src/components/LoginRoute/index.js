import { LoginRouteMainContainer, LoginContainer, LoginFormContainer, LogoImage, LabelElement, InputElement, LoginButton, ShowPasswordContainer, ErrorMessage, RedirectText, RedirectContainer } from "./styledComponents"
import { useState, useContext } from "react"
import Cookies from "js-cookie"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ModeContext from "../../contexts/ModeContext"
import OptionContext from "../../contexts/OptionContext"

const LoginRoute = () => {
    const [isPasswordVisible, updateIsPasswordVisible] = useState(false)
    const [isNewUser, updateIsNewUser] = useState(false)
    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")
    const [confirmPassword, updateConfirmPassword] = useState("")
    const [errorMessage, updateErrorMessage] = useState("")
    const history = useHistory()
    const { activeMode } = useContext(ModeContext)
    const { updateActiveOption } = useContext(OptionContext)

    const updatePasswordVisibility = () => (updateIsPasswordVisible(prevState => !prevState))
    const changeUsername = event => {
        updateUsername(event.target.value)
        updateErrorMessage("")
    }
    const changePassword = event => {
        updatePassword(event.target.value)
        updateErrorMessage("")
    }
    const changeConfirmPassword = event => {
        updateConfirmPassword(event.target.value)
        updateErrorMessage('')
    }
    const ChangeNewUser = () => {
        updateIsNewUser(prevState => !prevState)
        updateUsername('')
        updatePassword('')
        updateConfirmPassword('')
        updateErrorMessage('')
        updateIsPasswordVisible(false)
    }
    const onClickLogin = async (event) => {
        event.preventDefault()
        const url = "https://nxt-watch-backend.onrender.com/login/"
        const options = {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "content-type": "application/json"
            }
        }
        const response = await fetch(url, options)
        updateUsername('')
        updatePassword('')
        if (response.ok === true) {
            const { jwtToken } = await response.json()
            onLoginSuccess(jwtToken)
        }
        else {
            const { error } = await response.json()
            updateErrorMessage(`*${error}`)
        }
    }
    const onClickRegister = async event => {
        event.preventDefault()
        if (password === confirmPassword) {
            const url = "https://nxt-watch-backend.onrender.com/register/"
            const options = {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                    "content-type": "application/json"
                }
            }
            const response = await fetch(url, options)
            updateUsername('')
            updatePassword('')
            updateConfirmPassword('')
            if (response.ok === true) {
                alert('registered successfully')
                updateIsNewUser(prevState => !prevState)
            } else {
                const { error } = await response.json()
                updateErrorMessage(`*${error}`)
            }
        } else {
            updateErrorMessage("*passwords didn't match")
        }
    }
    const onLoginSuccess = jwtToken => {
        Cookies.set('jwtToken', jwtToken, { expires: 10 })
        console.log(history)
        history.replace('/')
        updateActiveOption('home')
    }
    const onBlurPassword = () => {
        if (password === confirmPassword) {
            updateErrorMessage('')
        } else {
            updateErrorMessage("*passwords didn't match")
        }
    }

    return (
        isNewUser ? (
            <LoginRouteMainContainer mode={activeMode}>
                <LoginContainer mode={activeMode}>
                    <LogoImage src={activeMode === 'dark' ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'} />
                    <LoginFormContainer onSubmit={onClickRegister}>
                        <LabelElement>USERNAME</LabelElement>
                        <InputElement mode={activeMode} placeholder="Username" type="text" value={username} onChange={changeUsername} />
                        <LabelElement>PASSWORD</LabelElement>
                        <InputElement mode={activeMode} placeholder="Password" type={isPasswordVisible ? null : "password"} value={password} onChange={changePassword} />
                        <LabelElement>CONFIRM PASSWORD</LabelElement>
                        <InputElement onBlur={onBlurPassword} mode={activeMode} placeholder="Password" type={isPasswordVisible ? null : "password"} value={confirmPassword} onChange={changeConfirmPassword} />
                        <ShowPasswordContainer>
                            <InputElement type="checkbox" onChange={updatePasswordVisibility} />
                            <LabelElement mode={activeMode}>Show password</LabelElement>
                        </ShowPasswordContainer>
                        <LoginButton type="submit">Register</LoginButton>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                        <RedirectContainer>
                            <LabelElement mode={activeMode}>Already have an account?</LabelElement>
                            <RedirectText onClick={ChangeNewUser}>Login</RedirectText>
                        </RedirectContainer>
                    </LoginFormContainer>
                </LoginContainer>
            </LoginRouteMainContainer>
        ) : (
            <LoginRouteMainContainer mode={activeMode}>
                <LoginContainer mode={activeMode}>
                    <LogoImage src={activeMode === 'dark' ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'} />
                    <LoginFormContainer onSubmit={onClickLogin}>
                        <LabelElement>USERNAME</LabelElement>
                        <InputElement mode={activeMode} placeholder="Username" type="text" value={username} onChange={changeUsername} />
                        <LabelElement>PASSWORD</LabelElement>
                        <InputElement mode={activeMode} placeholder="Password" type={isPasswordVisible ? null : "password"} value={password} onChange={changePassword} />
                        <ShowPasswordContainer>
                            <InputElement type="checkbox" onChange={updatePasswordVisibility} />
                            <LabelElement mode={activeMode}>Show password</LabelElement>
                        </ShowPasswordContainer>
                        <LoginButton type="submit">Login</LoginButton>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                        <RedirectContainer>
                            <LabelElement mode={activeMode}>Don't have an account ?</LabelElement>
                            <RedirectText onClick={ChangeNewUser}>Signup</RedirectText>
                        </RedirectContainer>
                    </LoginFormContainer>
                </LoginContainer>
            </LoginRouteMainContainer>
        )
    )
}

export default LoginRoute