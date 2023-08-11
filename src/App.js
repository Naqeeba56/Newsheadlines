
import './App.css';

import React from 'react'
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';







const App = () => {

  const pageSize = 9;
  const [progress, setprogress] = useState(0);




  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11496'
          progress={progress} />
        <Routes>
        <Route path="/" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Business" />}></Route>
          <Route path="/Business" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Business" />}></Route>
          <Route path="/Entertainment" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Entertainment" />}></Route>
          <Route path="/General" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="General" />}></Route>
          <Route path="/Health" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Health" />}></Route>
          <Route path="/Science" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Science" />}></Route>
          <Route path="/Sports" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Sports" />}></Route>
          <Route path="/Technology" element={<News setProgress={setprogress} pageSize={pageSize} country="in" category="Technology" />}></Route>
         

        </Routes>

      </BrowserRouter>
    </div>
  );
};



export default App;
