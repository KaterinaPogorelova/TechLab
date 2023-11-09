import { Route, Routes } from "react-router-dom"

import { Main } from "./Main"

export const Router = () => {
    return (<Routes>
        <Route path="/" element={<Main />}></Route>
    </Routes>)
}