import React from 'react';
import logo from './logo.svg';
import './App.css';
import LessonTypography from './components/LessonTypography';
import LessonButon from './components/LessonButon';
import LessonTextField from './components/LessonTextField';

function App() {
  return (
    <div className="App">
        {/* <LessonTypography></LessonTypography> */}
        {/* <LessonButon></LessonButon> */}
        <LessonTextField></LessonTextField>
    </div>
  );
}

export default App;
