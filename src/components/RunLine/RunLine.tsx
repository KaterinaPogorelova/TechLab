import { useAppDispatch, useAppSelector } from "../../store/store"
import { setRunlineClosed } from "../../store/runline"

import { RunLineBlockWrap, RunLineWrap, RunLineList, RunLineItem, SvgWrap } from "./StyledRunLine"
import { Cross } from "../../assets/icons/Cross"


export const RunLine = () => {
    const isClosed = useAppSelector((state) => state.runline.isClosed)
    const runlineList = useAppSelector((state) => state.runline.runlineList)
    const dispatch = useAppDispatch()

    return (<>
        {!isClosed && <RunLineBlockWrap><RunLineWrap>
            <RunLineList>
                {runlineList.map((item) => <RunLineItem>{item}</RunLineItem>)}
            </RunLineList>
            <RunLineList aria-hidden='true'>
                {runlineList.map((item) => <RunLineItem>{item}</RunLineItem>)}
            </RunLineList>
        </RunLineWrap>
            <SvgWrap onClick={() => dispatch(setRunlineClosed(true))}><Cross></Cross></SvgWrap>
        </RunLineBlockWrap>}
    </>)
}