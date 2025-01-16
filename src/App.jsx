import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { GlobalContext } from './context/GlobalContext';
import MainComponent from './components/MainComponent'
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/DefaultLayout';
import { useState, useEffect } from "react";
import axios from "axios";

const call = "https://api.themoviedb.org/3/search/"
const moovieIta = "movie?api_key=7316ac90ac2b0905a79bf2188640f47b&query=a&language=it-IT"
const seriesIta = "tv?api_key=7316ac90ac2b0905a79bf2188640f47b&query=a&language=it-IT"
function App() {

  const [moovieContent, setMoovieContent] = useState([])
  const [seriesContent, setSeriesContent] = useState([])
  const filmRowTitle = "Film"
  const serieRowTitle = "Serie TV"

  useEffect(() => {
    getMoovieData();
    getSeriesData();
  }, []);

  function getMoovieData() {
    axios
      .get(call + moovieIta)
      .then((res) => {

        setMoovieContent(res.data.results)
        console.log("moovies", moovieContent)
      })
      .catch((error) => {
        console.log("error")
      })
      .finally(() => {

      })
  }

  function getSeriesData() {

    axios
      .get(call + seriesIta)
      .then((res) => {
        console.log(setSeriesContent(res.data.results))
        console.log("series", seriesContent)

      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {

      })
  }
  return (
    <GlobalContext.Provider value={{ moovieContent, seriesContent, filmRowTitle, serieRowTitle }}>
      < BrowserRouter >
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/contenuti" Component={MainComponent} />
          </Route>
        </Routes>
      </BrowserRouter >
    </GlobalContext.Provider>
  )
}

export default App
