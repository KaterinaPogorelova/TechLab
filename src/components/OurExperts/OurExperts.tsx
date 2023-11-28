import { StyledContainer, StyledFrameHeader, StyledFrameText } from "../../styledConstants"

import { colors } from "../../styledConstantsColors";

import { StyledExpertSectionWrap } from "./StyledOurExperts"
import { ExpertCard } from "./ExpertCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Slider/slider.css';
import "./expertsSlider.css";

import yuri from '../../assets/img/expert1.png'
import alice from '../../assets/img/expert2.png'
import tom from '../../assets/img/expert3.png'
import andrus from '../../assets/img/expert5.png'
import { RightSideLink } from "../LinkWithRightArrow/LinkWithRightArrow";

const experts = [
    { name: 'Juri Ratas', color: colors.brand.orange, desc: 'Co-founder of the programming academy', src: yuri },
    { name: 'Alice Berg', color: colors.brand.turquoise, desc: 'Co-founder of the programming academy', src: alice },
    { name: 'Tom Watson', color: colors.brand.green, desc: 'Co-founder of the programming academy', src: tom },
    { name: 'Andrus Kask', color: colors.brand.turquoise, desc: 'Co-founder of the programming academy', src: andrus },
    { name: 'Juri Ratas', color: colors.brand.orange, desc: 'Co-founder of the programming academy', src: yuri },
    { name: 'Alice Berg', color: colors.brand.turquoise, desc: 'Co-founder of the programming academy', src: alice },
    { name: 'Juri Ratas', color: colors.brand.orange, desc: 'Co-founder of the programming academy', src: yuri },
    { name: 'Alice Berg', color: colors.brand.turquoise, desc: 'Co-founder of the programming academy', src: alice },
    { name: 'Tom Watson', color: colors.brand.green, desc: 'Co-founder of the programming academy', src: tom },
    { name: 'Andrus Kask', color: colors.brand.turquoise, desc: 'Co-founder of the programming academy', src: andrus },
    { name: 'Juri Ratas', color: colors.brand.orange, desc: 'Co-founder of the programming academy', src: yuri },
    { name: 'Alice Berg', color: colors.brand.turquoise, desc: 'Co-founder of the programming academy', src: alice }
]

export const OurExperts = () => {
    return (<StyledExpertSectionWrap>
        <StyledContainer>
            <StyledFrameHeader>Our <span>experts</span></StyledFrameHeader>
            <StyledFrameText $black><span>TechLab</span> classes are taught by industry leaders excited to share their tools, techniques with you.</StyledFrameText>
        </StyledContainer>
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            loop={true}
            pagination={{
                type: 'fraction',
            }}
            navigation
            modules={[Pagination, Navigation, A11y]}
            className="expertsSwiper">
            {experts.map((expert, index) =>
                <SwiperSlide key={index}>
                    <ExpertCard name={expert.name} src={expert.src} desc={expert.desc} color={expert.color} />
                </SwiperSlide>
            )}
        </Swiper>
        <RightSideLink text={'All TechLab teachers'} path={'/'} isBlack isRightSided />
    </StyledExpertSectionWrap>)
}