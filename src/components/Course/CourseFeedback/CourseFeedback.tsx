import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import {
  StyledCourseFeedback,
  StyledCourseFeedbackTitle,
  StyledCourseFeedbackSwiper,
} from "./StyledCourseFeedback";
import ava from "../../../assets/img/avatars/avatarMan.png";
import avatarWoman from "../../../assets/img/avatars/avatarWomanGlas.png";
import avatarka from "../../../assets/img/avatars/avatarWoman.png";
import avatarWatson from "../../../assets/img/avatars/avatarWatson.png";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseFeedbackItem } from "./CourseFeedbackItem";

import "swiper/css";
import "swiper/css/pagination";
import "./CourseFeedbackSwiper.css";

export const feedbacks = [
  {
    stars: 4,
    avatar: ava,
    text: "TechLab's UI/UX course is a genuine professional breakthrough! Valuable materials, responsive mentors, and, of course, excellent results.",
    name: "Mart Peterson",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: avatarWatson,
    text: "TechLab amazed me! Useful content, individual consultations, and, most importantly, real projects for my portfolio. Very satisfied with the outcome.",
    name: "Andrew Watson",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: ava,
    text: "Thanks to TechLab for excellent training. The UX/UI lessons were structured, clear, and, most importantly, applicable in practice.",
    name: "Mika Käkkinen",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: avatarWoman,
    text: "I never thought I could learn design. TechLab gave me confidence and practical skills. Highly recommend!",
    name: "Ly Sammi",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: ava,
    text: "The UI/UX course at TechLab is not just training but a real immersion into the design industry. Excellent mentors and communication with like-minded peers.",
    name: "Oskar Hugs",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: avatarWatson,
    text: "Big thanks to TechLab for an outstanding UX/UI course! The curriculum is well-organized, the instructors are knowledgeable, and the practical approach is truly beneficial.",
    name: "Tom Nicedress",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: avatarka,
    text: "The TechLab UI/UX course exceeded my expectations. The hands-on projects helped me apply theoretical knowledge, making the learning experience comprehensive and engaging.",
    name: "Heili Bumi",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: ava,
    text: "Choosing TechLab for UI/UX studies was the right decision. The course strikes a perfect balance between theory and practical application, providing a solid foundation for a design career.",
    name: "Giuseppe Aperol",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: avatarWoman,
    text: "TechLab's UI/UX program stands out for its industry relevance. The up-to-date content and real-world projects ensured I was well-prepared for the demands of the design field.",
    name: "Marta Johanson",
    place: "Behance",
  },
  {
    stars: 4,
    avatar: avatarWatson,
    text: "I'm grateful for the opportunity to learn UX/UI design at TechLab. The supportive community, insightful mentors, and focus on practical skills make it a top choice for anyone entering the design field.",
    name: "Samuel Gong",
    place: "Behance",
  },
];

export const CourseFeedback = () => {
  return (
    <StyledCourseFeedback>
      <StyledContainer>
        <StyledCourseFeedbackTitle>
          <StyledFrameHeader>
            Students <span>who got a job</span> in UX/UI
          </StyledFrameHeader>
          <StyledFrameText $black>
            With a true international community of students and mentors, we are
            proud to be a diverse and highly rated group of UX professionals
          </StyledFrameText>
        </StyledCourseFeedbackTitle>
      </StyledContainer>
      <StyledCourseFeedbackSwiper>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={48}
          loop={true}
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation, A11y]}
          className="feedbackSwiper"
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <CourseFeedbackItem {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledCourseFeedbackSwiper>
    </StyledCourseFeedback>
  );
};
