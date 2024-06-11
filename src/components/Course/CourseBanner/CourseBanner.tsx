import {
  StyledCourseContainer,
  StyledCourseWrap,
  StyledImgContainer,
  StyledCourseBannerText,
} from "./SyledCourseBanner";
import image from "../../../assets/img/ZeusUIux.png";
// import { useEffect, useState } from "react";

export const CourseBanner = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setOffsetY(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  return (
    <StyledCourseContainer
    // offsetY={offsetY}
    >
      <StyledCourseWrap>
        <StyledImgContainer>
          <img src={image} alt="zeus"></img>
        </StyledImgContainer>
        <StyledCourseBannerText>
          You can master a new profession within 12 months!
        </StyledCourseBannerText>
      </StyledCourseWrap>
    </StyledCourseContainer>
  );
};
