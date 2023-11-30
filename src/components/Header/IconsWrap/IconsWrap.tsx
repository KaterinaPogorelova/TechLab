import { Wrapper } from "./StyledIconsWrap"
import { Search, User, Cart } from "../../../assets/icons/HeaderIcons"
import { LoginModal } from "../LoginModal/LoginModal"


export const IconsWrap = () => {
    return (<Wrapper>
        <Search />
        <Cart />
        <User />
        <LoginModal></LoginModal>
    </Wrapper>)
}