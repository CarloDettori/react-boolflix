import RowComponent from "./RowComponent";
import { useState, useEffect } from "react";
import axios from "axios";
const call = "https://api.themoviedb.org/3/search/"
const moovieIta = "movie?api_key=7316ac90ac2b0905a79bf2188640f47b&query=a&language=it-IT"
const seriesIta = "tv?api_key=7316ac90ac2b0905a79bf2188640f47b&query=a&language=it-IT"

function MainComponent() {
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
                console.log("error")
            })
            .finally(() => {

            })
    }
    return (
        <main>
            <RowComponent key="moovies" content={moovieContent} rowTitle={filmRowTitle} />
            <RowComponent key="series" content={seriesContent} rowTitle={serieRowTitle} />
        </main>
    )
}

export default MainComponent;