import { Link } from "react-router-dom"
import { StyledLogLink, StyledSignText, StyledUserModalWrap } from "./StyledLoginModal"

type LogInProps = {
    isOpened: boolean;
}

export const LoginModal = ({ isOpened }: LogInProps) => {
    return (<StyledUserModalWrap $isOpened={isOpened}>
        <StyledLogLink to={'/'}>Log In</StyledLogLink>
        <StyledSignText>Don’t have an account?<Link to='/'>Sign Up</Link></StyledSignText>
    </StyledUserModalWrap>)
}