import { RunLine } from "../components/RunLine/RunLine"
import { Header } from "../components/Header/Header"
import { MainInfo } from "../components/MainInfo/MainInfo"
import { TestBlock } from "../components/TestBlock/TestBlock"
import { FeedbackSection } from "../components/FeedbackFormSection/FeedbackSection"


export const Main = () => {
    return (<>
        <RunLine></RunLine>
        <Header></Header>
        <MainInfo></MainInfo>
        <TestBlock></TestBlock>
        <FeedbackSection></FeedbackSection>
    </>)
}