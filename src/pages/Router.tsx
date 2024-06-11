import { Route, Routes } from "react-router-dom";

import { Main } from "./Main";
import { AboutSchool } from "./AboutSchool";
import { Course } from "./Course";
import { Mentors } from "./Mentors";
import { Catalogue } from "./Catalogue";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/aboutschool" element={<AboutSchool />}></Route>
      <Route path="/course" element={<Course />}></Route>
      <Route path="/mentors/:mentor" element={<Mentors />}></Route>
      <Route path="/catalogue/:catalogue" element={<Catalogue />}></Route>
    </Routes>
  );
};
