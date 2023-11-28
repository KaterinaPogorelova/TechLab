import { Link } from "react-router-dom"
import { StyledLogLink, StyledSignText, StyledUserModalWrap } from "./StyledLoginModal"
import { useAppSelector } from "../../../store/store"

export const LoginModal = () => {
    const activeTab = useAppSelector((state) => state.nav.clickedTab)

    return (<StyledUserModalWrap $isOpened={activeTab === 'UserPanel'}>
        <StyledLogLink to={'/'}>Log In</StyledLogLink>
        <StyledSignText>Don’t have an account?<Link to='/'>Sign Up</Link></StyledSignText>
    </StyledUserModalWrap>)
}