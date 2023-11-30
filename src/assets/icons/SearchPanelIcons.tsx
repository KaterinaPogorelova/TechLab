import { useAppDispatch } from "../../store/store"
import { setSearchValue } from "../../store/search"

import { StyledCleanBtn } from "../../components/Header/SearchPanel/StyledSearchPanel"
import { IconWrap } from "../../components/Header/IconsWrap/StyledIconsWrap"

import { colors } from "../../styledConstantsColors"


export const Cross = () => {
    const dispatch = useAppDispatch()

    return (<StyledCleanBtn onClick={() => dispatch(setSearchValue(''))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.30006 9.29989C9.65161 8.94877 10.1282 8.75154 10.6251 8.75154C11.1219 8.75154 11.5985 8.94877 11.9501 9.29989L20.0001 17.3499L28.0501 9.29989C28.2218 9.11567 28.4288 8.96792 28.6588 8.86544C28.8888 8.76297 29.1371 8.70787 29.3888 8.70342C29.6406 8.69897 29.8906 8.74529 30.1241 8.83959C30.3576 8.93389 30.5696 9.07424 30.7476 9.25229C30.9258 9.43034 31.0661 9.64244 31.1603 9.87589C31.2546 10.1094 31.3011 10.3594 31.2966 10.6112C31.2921 10.863 31.2371 11.1112 31.1346 11.3412C31.0321 11.5712 30.8843 11.7782 30.7001 11.9499L22.6501 19.9999L30.7001 28.0499C30.8843 28.2216 31.0321 28.4286 31.1346 28.6586C31.2371 28.8886 31.2921 29.1369 31.2966 29.3886C31.3011 29.6404 31.2546 29.8904 31.1603 30.1239C31.0661 30.3574 30.9258 30.5694 30.7476 30.7474C30.5696 30.9256 30.3576 31.0659 30.1241 31.1601C29.8906 31.2544 29.6406 31.3009 29.3888 31.2964C29.1371 31.2919 28.8888 31.2369 28.6588 31.1344C28.4288 31.0319 28.2218 30.8841 28.0501 30.6999L20.0001 22.6499L11.9501 30.6999C11.5946 31.0311 11.1245 31.2114 10.6387 31.2029C10.153 31.1941 9.68953 30.9974 9.34598 30.6539C9.00246 30.3104 8.80568 29.8469 8.79711 29.3611C8.78853 28.8754 8.96886 28.4054 9.30006 28.0499L17.3501 19.9999L9.30006 11.9499C8.94893 11.5983 8.75171 11.1218 8.75171 10.6249C8.75171 10.128 8.94893 9.65147 9.30006 9.29989Z" fill={colors.neutral.darkGray} />
    </svg></StyledCleanBtn>)
}

export const Search = () => {
    return (<IconWrap><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.2408 6.01616C14.8604 5.34529 16.5963 5 18.3494 5C20.1024 5 21.8383 5.34529 23.458 6.01616C25.0776 6.68703 26.5492 7.67034 27.7888 8.90994C29.0284 10.1495 30.0117 11.6212 30.6826 13.2408C31.3535 14.8604 31.6987 16.5963 31.6987 18.3494C31.6987 20.1024 31.3535 21.8383 30.6826 23.458C30.2254 24.5617 29.6231 25.5967 28.8935 26.5364L34.1309 31.7739C34.7818 32.4247 34.7818 33.48 34.1309 34.1309C33.48 34.7818 32.4247 34.7818 31.7739 34.1309L26.5365 28.8935C24.2072 30.7021 21.3297 31.6987 18.3494 31.6987C14.8089 31.6987 11.4134 30.2923 8.90994 27.7888C6.40645 25.2853 5 21.8898 5 18.3494C5 14.8089 6.40645 11.4134 8.90994 8.90994C10.1495 7.67034 11.6212 6.68703 13.2408 6.01616ZM18.3494 8.33333C17.034 8.33333 15.7316 8.59241 14.5164 9.09576C13.3012 9.59911 12.197 10.3369 11.267 11.267C9.38859 13.1453 8.33333 15.693 8.33333 18.3494C8.33333 21.0058 9.38859 23.5534 11.267 25.4318C13.1453 27.3102 15.693 28.3654 18.3494 28.3654C21.0058 28.3654 23.5534 27.3102 25.4318 25.4318C26.3619 24.5017 27.0996 23.3975 27.603 22.1823C28.1063 20.9671 28.3654 19.6647 28.3654 18.3494C28.3654 17.034 28.1063 15.7316 27.603 14.5164C27.0996 13.3012 26.3619 12.197 25.4318 11.267C24.5017 10.3369 23.3975 9.59911 22.1823 9.09576C20.9671 8.59241 19.6647 8.33333 18.3494 8.33333Z" />
    </svg></IconWrap>)
}