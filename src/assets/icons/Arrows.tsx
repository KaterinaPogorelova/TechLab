import { StyledSvgWrap } from "../../components/Header/Menu/StyledMenu";

type ArrowProps = {
    isClicked?: boolean;
}

export const DownArrow = ({ isClicked }: ArrowProps) => {
    return (<StyledSvgWrap $isClicked={isClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 13.8668L5.21295 6.2737C4.88489 5.90666 4.35434 5.9091 4.02889 6.27909L3.24267 7.1729C2.91726 7.54293 2.91938 8.14129 3.24744 8.50833L11.4015 17.6398C11.4539 17.6993 11.6759 18.0002 11.9976 18C12.2931 17.9998 12.4947 17.7669 12.6025 17.6443L20.7525 8.50833C21.0806 8.14129 21.0828 7.54293 20.7573 7.1729L19.9711 6.27909C19.6456 5.9091 19.1151 5.90666 18.787 6.2737L12 13.8668Z" />
        </svg>
    </StyledSvgWrap>)
}