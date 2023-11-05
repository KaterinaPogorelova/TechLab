import { useAppSelector, useAppDispatch } from "../../../store/store"
import { Container, SearchInput, SearchInputWrap, SearchPanelWrap } from "./StyledSearchPanel"

import { Cross, Search } from "../../../assets/img/SearchPanelIcons"
import { setSearchValue } from "../../../store/search"

export const SearchPanel = () => {
    const activeTab = useAppSelector((state) => state.nav.clickedTab)
    const searchValue = useAppSelector((state) => state.search.searchValue)

    const dispatch = useAppDispatch()

    return (<SearchPanelWrap style={activeTab === 'SearchPanel' ? { visibility: 'visible', transform: 'translateY(92px)', opacity: '1' } :
        { visibility: 'hidden', transform: 'translateY(0px)', opacity: '0' }}>
        <Container>
            <SearchInputWrap>
                <Search></Search>
                <SearchInput placeholder="Search..." type="search" value={searchValue} onChange={(e) => dispatch(setSearchValue(e.target.value))}></SearchInput>
                <Cross></Cross>
            </SearchInputWrap>
        </Container>
    </SearchPanelWrap>)
}