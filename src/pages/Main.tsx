import { RunLine } from "../components/RunLine/RunLine"
import { Header } from "../components/Header/Header"
import { MainInfo } from "../components/MainInfo/MainInfo"
import { Advertisement } from "../components/Advertisement/Advertisement"
import { Directions } from "../components/Directions/Directions"
import { AboutUs } from "../components/AboutUs/AboutUs"
import ExpectationLayout from "../components/ExpectationLayout/ExpectationLayout"
import { OurExperts } from "../components/OurExperts/OurExperts"
import { Reviews } from "../components/Reviews/Reviews"
import QuestionsLayout from "../components/QuestionsLayout/QuestionsLayout"
import PopularLayout from "../components/PopularCoursesLayout/PopularLayout"
import { TestBlock } from "../components/TestBlock/TestBlock"
import { FeedbackSection } from "../components/FeedbackFormSection/FeedbackSection"
import SoonStartLayout from "../components/SoonStartLayout/SoonStartLayout"


export const Main = () => {
        return (<>
                {/*         <RunLine></RunLine>
        <Header></Header>
        <MainInfo></MainInfo>
        {/* <PopularLayout /> */}
                <Directions></Directions>
                <AboutUs></AboutUs>
                {/* <ExpectationLayout></ExpectationLayout>*/}
                <OurExperts></OurExperts>
                <Advertisement></Advertisement>
                <Reviews></Reviews>
                {/* <SoonStartLayout /> */}
                <TestBlock></TestBlock>
                {/* <QuestionsLayout></QuestionsLayout> */}
                <FeedbackSection></FeedbackSection>
        </>)
}