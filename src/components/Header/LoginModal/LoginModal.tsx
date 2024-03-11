import { Link } from "react-router-dom"
import { StyledAuthLink, StyledLogLink, StyledSignText, StyledUserModalWrap } from "./StyledLoginModal"
import { useAppSelector } from "../../../store/store"

type LogInProps = {
    isAuthorized?: boolean
}

export const LoginModal = ({ isAuthorized }: LogInProps) => {
    const activeTab = useAppSelector((state) => state.nav.clickedTab)

    return (<StyledUserModalWrap $isOpened={activeTab === 'UserPanel'}>
        {!isAuthorized && <>
            <StyledSignText>Do you have an account?</StyledSignText>
            <StyledLogLink to={'/'}>Log In</StyledLogLink>
            <StyledSignText>Don’t have an account?<Link to='/'>Sign Up</Link></StyledSignText>
        </>}
        {isAuthorized && <>
            <StyledAuthLink to='/'>My profile</StyledAuthLink>
            <StyledAuthLink to='/'>My courses</StyledAuthLink>
            <StyledAuthLink to='/'>Log out</StyledAuthLink>
        </>}
    </StyledUserModalWrap>)
}