import { StyledSvgWrap } from "../../components/Header/Menu/StyledMenu";

interface ArrowProps {
  isClicked?: boolean;
}

export const DownArrow = ({isClicked}: ArrowProps) => {
  return (<StyledSvgWrap $isClicked={isClicked}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M12 13.8668L5.21295 6.2737C4.88489 5.90666 4.35434 5.9091 4.02889 6.27909L3.24267 7.1729C2.91726 7.54293 2.91938 8.14129 3.24744 8.50833L11.4015 17.6398C11.4539 17.6993 11.6759 18.0002 11.9976 18C12.2931 17.9998 12.4947 17.7669 12.6025 17.6443L20.7525 8.50833C21.0806 8.14129 21.0828 7.54293 20.7573 7.1729L19.9711 6.27909C19.6456 5.9091 19.1151 5.90666 18.787 6.2737L12 13.8668Z" />
    </svg>
  </StyledSvgWrap>)
}

export const UpArrow = ({isClicked}: ArrowProps) => {
  return (<StyledSvgWrap $isClicked={isClicked}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
            d="M16 12.179L25.0494 22.303C25.4868 22.7924 26.1942 22.7892 26.6281 22.2959L27.6764 21.1041C28.1103 20.6107 28.1075 19.8129 27.6701 19.3235L16.798 7.14824C16.7282 7.0689 16.4321 6.66772 16.0032 6.66797C15.6092 6.66822 15.3403 6.97877 15.1966 7.14218L4.32994 19.3235C3.89253 19.8129 3.88965 20.6107 4.32358 21.1041L5.37187 22.2959C5.8058 22.7892 6.51321 22.7924 6.95062 22.303L16 12.179Z" />
    </svg>
  </StyledSvgWrap>)
}