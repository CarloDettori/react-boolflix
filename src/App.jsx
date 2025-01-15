import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';


//import posts from "./data/posts.js";
import MainComponent from './components/MainComponent'
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/DefaultLayout';
function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/contenuti" Component={MainComponent} />
        </Route>
      </Routes>
    </BrowserRouter >

  )
}

export default App
