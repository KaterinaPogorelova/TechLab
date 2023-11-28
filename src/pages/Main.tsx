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


export const Main = () => {
    return (<>
        <RunLine></RunLine>
        <Header></Header>
        <MainInfo></MainInfo>
        <Directions></Directions>
        <AboutUs></AboutUs>
        <ExpectationLayout></ExpectationLayout>
        <OurExperts></OurExperts>
        <Advertisement></Advertisement>
        <Reviews></Reviews>
        <QuestionsLayout></QuestionsLayout>
    </>)
}