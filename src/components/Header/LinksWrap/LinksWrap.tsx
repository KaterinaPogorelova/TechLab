import { useAppDispatch, useAppSelector } from "../../../store/store"

import {
  StyledLinksWrapContainer,
  StyledWrapper,
  StyledLinkSection,
  StyledSectionTitle,
  StyledLink,
  StyledDirLinksWrap,
  StyledDirWrapper,
  StyledSecLink
} from "./StyledLinkesWrap"
import { ReactComponent as Arrow } from '../../../assets/icons/RightLinkArrow.svg'
import { setClickedTab } from "../../../store/navigation";

type LinksWrapType = {
  isClicked?: boolean,
}

export const LinksWrap = ({isClicked}: LinksWrapType) => {
  const dispatch = useAppDispatch();
  const clickedTab = useAppSelector((state) => state.nav.clickedTab)
  const tab = useAppSelector((state) => state.nav.tabs.find((tab) => tab.title === clickedTab))

  const closeLinksWrap = () => {
    dispatch(setClickedTab(''));
  }

  return (
    <StyledWrapper $isClicked={isClicked}>
      <StyledLinksWrapContainer>
        {tab && tab.linkSections && tab.linkSections.map((section, index) => section.path &&
          <div key={'tab' + index}>
            <StyledLinkSection to={section.path} onClick={closeLinksWrap}>{section.title}</StyledLinkSection>
            <div style={{
              position: 'relative',
              paddingLeft: '36px'
            }}>{section.linkSections && section.linkSections.map((link, i) => link.path &&
              <StyledDirWrapper key={'section' + i}>
                <StyledLink to={link.path} onClick={closeLinksWrap}>
                  <StyledSectionTitle>{link.title}</StyledSectionTitle>
                  {/*<Arrow />*/}
                </StyledLink>
                <StyledDirLinksWrap id="linkWrap">
                  {link.linkSections && link.linkSections.map((secLink, j) => secLink.path &&
                    <StyledSecLink key={'sec' + j} to={secLink.path}
                                   onClick={closeLinksWrap}>{secLink.title}</StyledSecLink>)}
                </StyledDirLinksWrap>
              </StyledDirWrapper>)}
            </div>
          </div>)
        }
      </StyledLinksWrapContainer>
    </StyledWrapper>
  )
}