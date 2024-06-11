import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
  StyledSectionSeparator,
} from "../../../styledConstants";
import {
  StyledCoursePotfolio,
  StyledPortfolioSwiper,
} from "./StyledCoursePortfolio";
import ava from "../../../assets/img/avatarkaWomanCoursePage.png";
import project1 from "../../../assets/img/projects1.png";
import project2 from "../../../assets/img/projects2.png";
import project3 from "../../../assets/img/projects3.png";
import project4 from "../../../assets/img/projects4.png";
import project5 from "../../../assets/img/projects5.png";
import project6 from "../../../assets/img/projects6.png";
import project7 from "../../../assets/img/projects7.png";
import project8 from "../../../assets/img/projects8.png";
import project9 from "../../../assets/img/projects9.png";
import project10 from "../../../assets/img/projects10.png";
import project11 from "../../../assets/img/projects11.png";
import project12 from "../../../assets/img/projects12.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { backgroundColor } from "../../../styledConstantsColors";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { CoursePortfolioItem } from "./CoursePortfolioItem";

import "swiper/css";
import "swiper/css/pagination";
import "./CourseProjectSwiper.css";

export const projects = [
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project1,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project2,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project3,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project4,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project5,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project6,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project7,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project8,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project9,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project10,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project11,
  },
  {
    avatarka: ava,
    name: "Anna Deriega",
    title: " - UX/UI design Protect card mobile animation",
    image: project12,
  },
];

export const CoursePortfolio = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <StyledCoursePotfolio>
        <StyledContainer>
          <StyledFrameHeader>
            <span>Projects</span> of our graduates
          </StyledFrameHeader>
          <StyledFrameText $black={false}>
            Hundreds of our students have started rewarding careers with great
            companies.
          </StyledFrameText>
          {/* {width > 1023 && ( */}
        </StyledContainer>
        <StyledPortfolioSwiper>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            loop={true}
            pagination={{ type: "fraction" }}
            navigation={true}
            modules={[Pagination, Navigation, A11y]}
            className="portfolioSwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <CoursePortfolioItem
                  avatarka={project.avatarka}
                  title={project.title}
                  image={project.image}
                  name={project.name}
                ></CoursePortfolioItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledPortfolioSwiper>
      </StyledCoursePotfolio>
      {width > 1023 && (
        <StyledSectionSeparator
          $background={backgroundColor.champagne}
        ></StyledSectionSeparator>
      )}
    </>
  );
};
