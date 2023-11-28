import { Wrapper } from "./StyledIconsWrap"
import { Search, User, Cart } from "../../../assets/icons/HeaderIcons"
import { LoginModal } from "../LoginModal/LoginModal"
import { useState } from "react"


export const IconsWrap = () => {
    const [logInOpened, setLogInOpened] = useState(false)
    return (<Wrapper>
        <Search />
        <Cart />
        <div onClick={() => setLogInOpened(!logInOpened)}><User /></div>
        <LoginModal isOpened={logInOpened}></LoginModal>
    </Wrapper>)
}