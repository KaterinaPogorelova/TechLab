import { RunLine } from "../components/RunLine/RunLine"
import { Header } from "../components/Header/Header"
import { MainInfo } from "../components/MainInfo/MainInfo"
import { Advertisement } from "../components/Advertisement/Advertisement"


export const Main = () => {
    return (<>
        <RunLine></RunLine>
        <Header></Header>
        <MainInfo></MainInfo>
        <Advertisement></Advertisement>
    </>)
}