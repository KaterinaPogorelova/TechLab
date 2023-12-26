import { useAppSelector } from "../../../store/store"

import { StyledSignUpLink, StyledMobMenuWrap, StyledLogInLink, StyledLinkText, StyledHelp } from "./StyledMenu"
import { ReactComponent as UserIcon } from '../../../assets/icons/UserIcon.svg'
import { LinkContainerTablet } from "./LinkContainerTablet"

export const MenuTablet = () => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const isRunlineClosed = useAppSelector((state) => state.runline.isClosed)

    return (<StyledMobMenuWrap $isClicked={clickedTab === 'MenuPanel'} $isRunlineClosed={isRunlineClosed}>
        <LinkContainerTablet hasLinks={true} title={'Catalogue'}></LinkContainerTablet>
        <LinkContainerTablet hasLinks={true} title={'Free courses'}></LinkContainerTablet>
        <LinkContainerTablet path="/" hasLinks={false} title={'About us'}></LinkContainerTablet>
        <StyledSignUpLink to='/'>Sign Up</StyledSignUpLink>
        <StyledLogInLink to='/'>
            <StyledLinkText>Log In</StyledLinkText>
            <UserIcon />
        </StyledLogInLink>
        <StyledHelp to='/#feedback'>Help Center</StyledHelp>
    </StyledMobMenuWrap>)
}