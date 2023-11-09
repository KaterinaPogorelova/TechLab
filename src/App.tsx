import React from 'react';
import './App.css';
import QuestionsLayout from './components/QuestionsLayout/QuestionsLayout';
import ExpectationLayout from './components/ExpectationLayout/ExpectationLayout';
import PopularLayout from './components/PopularCoursesLayout/PopularLayout';

export const App = () => {
  return (
    <div className="App">
      <QuestionsLayout/>
      <PopularLayout/>
      <ExpectationLayout/>
    </div>
  );
}
