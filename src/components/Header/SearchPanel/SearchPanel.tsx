import { useAppSelector, useAppDispatch } from "../../../store/store"

import { StyledContainer, StyledSearchInput, StyledSearchInputWrap, StyledSearchPanelWrap } from "./StyledSearchPanel"

import { Cross, Search } from "../../../assets/img/SearchPanelIcons"
import { setSearchValue } from "../../../store/search"

export const SearchPanel = () => {
    const activeTab = useAppSelector((state) => state.nav.clickedTab)
    const searchValue = useAppSelector((state) => state.search.searchValue)

    const dispatch = useAppDispatch()

    return (<StyledSearchPanelWrap $activeTab={activeTab}>
        <StyledContainer>
            <StyledSearchInputWrap>
                <Search />
                <StyledSearchInput placeholder="Search..." type="search" value={searchValue}
                    onChange={(e) => dispatch(setSearchValue(e.target.value))}></StyledSearchInput>
                <Cross />
            </StyledSearchInputWrap>
        </StyledContainer>
    </StyledSearchPanelWrap>)
}