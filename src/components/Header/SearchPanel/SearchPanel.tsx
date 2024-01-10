import { useAppSelector, useAppDispatch } from "../../../store/store"

import { StyledContainerSearch, StyledSearchInput, StyledSearchInputWrap, StyledSearchPanelWrap, StyledSearchSuggestions, StyledSuggestion, StyledSuggestionContainer, StyledSuggestionsTitle } from "./StyledSearchPanel"

import { Cross, Search } from "../../../assets/icons/SearchPanelIcons"
import { setSearchValue } from "../../../store/search"
import { setClickedTab } from "../../../store/navigation"

export const SearchPanel = () => {
    const activeTab = useAppSelector((state) => state.nav.clickedTab)
    const searchValue = useAppSelector((state) => state.search.searchValue)

    const dispatch = useAppDispatch()

    return (<StyledSearchPanelWrap $activeTab={activeTab}>
        <StyledContainerSearch>
            <StyledSearchInputWrap>
                <button onClick={() => searchValue !== '' && dispatch(setClickedTab(''))}><Search /></button>
                <StyledSearchInput name="search" placeholder="Search..." type="search" value={searchValue}
                    onChange={(e) => dispatch(setSearchValue(e.target.value))}></StyledSearchInput>
                <Cross />
            </StyledSearchInputWrap>
            {searchValue !== '' && <StyledSearchSuggestions>
                <StyledSuggestionsTitle>Suggestions Searches</StyledSuggestionsTitle>
                <StyledSuggestionContainer>
                    <Search />
                    <StyledSuggestion>Web Design</StyledSuggestion>
                </StyledSuggestionContainer>
                <StyledSuggestionContainer>
                    <Search />
                    <StyledSuggestion>Web Design</StyledSuggestion>
                </StyledSuggestionContainer>
                <StyledSuggestionContainer>
                    <Search />
                    <StyledSuggestion>Web Design</StyledSuggestion>
                </StyledSuggestionContainer>
            </StyledSearchSuggestions>}
        </StyledContainerSearch>
    </StyledSearchPanelWrap>)
}