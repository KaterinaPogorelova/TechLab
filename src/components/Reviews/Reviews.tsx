import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation, Pagination } from "swiper/modules"
import { StyledContainer, StyledFrameHeader, StyledFrameText } from "../../styledConstants"
import { StyledReviewsWrap } from "./StyledReviews"
import { Review } from "./Review"
import studentOrange from '../../assets/img/StudentOrange.png'
import studentGreen from '../../assets/img/StudentGreen.png'
import studentViolet from '../../assets/img/StudentViolet.png'

import { backgroundColor, colors } from "../../styledConstantsColors"
import '../Slider/slider.css';
import './reviewsSlider.css'

export const reviews = [
    {
        desc: 'Transition from aviation to analytics',
        imgSrc: studentOrange,
        videoSrc: 'https://www.youtube.com/embed/dqlO6_5rZSQ?autoplay=1',
        color: colors.brand.orange
    },
    {
        desc: 'Transition from aviation to analytics',
        imgSrc: studentGreen,
        videoSrc: 'https://www.youtube.com/embed/dqlO6_5rZSQ?autoplay=1',
        color: colors.brand.green
    },
    {
        desc: 'Transition from aviation to analytics',
        imgSrc: studentViolet,
        videoSrc: 'https://www.youtube.com/embed/dqlO6_5rZSQ?autoplay=1',
        color: colors.brand.violet
    },
    {
        desc: 'Transition from aviation to analytics',
        imgSrc: studentOrange,
        videoSrc: 'https://www.youtube.com/embed/dqlO6_5rZSQ?autoplay=1',
        color: colors.brand.orange
    },
    {
        desc: 'Transition from aviation to analytics',
        imgSrc: studentGreen,
        videoSrc: 'https://www.youtube.com/embed/dqlO6_5rZSQ?autoplay=1',
        color: colors.brand.green
    },
    {
        desc: 'Transition from aviation to analytics',
        imgSrc: studentViolet,
        videoSrc: 'https://www.youtube.com/embed/dqlO6_5rZSQ?autoplay=1',
        color: colors.brand.violet
    }
]


export const Reviews = () => {
    return (<StyledReviewsWrap>
        <StyledContainer>
            <StyledFrameHeader>Learn about <span>our graduates’ stories</span></StyledFrameHeader>
            <StyledFrameText $black={false}>TechLab graduates find themselves and change their lives for the better.
                Our success is the success of our students.</StyledFrameText>
        </StyledContainer>
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            loop={true}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation, A11y]}
            className="techlab_slider reviewSwiper">
            {reviews.map((review, index) => <SwiperSlide key={index}>
                <Review color={review.color} desc={review.desc} imgSrc={review.imgSrc} videoSrc={review.videoSrc}></Review>
            </SwiperSlide>)}
        </Swiper>

    </StyledReviewsWrap>)
}