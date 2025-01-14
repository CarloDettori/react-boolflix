import RowComponent from "./RowComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const call = "https://api.themoviedb.org/3/"
const moovieIta = "/search/movie/api_key=7316ac90ac2b0905a79bf2188640f47& query=a&language=it-IT"
const seriesIta = "/search/tv/api_key=7316ac90ac2b0905a79bf2188640f47&query=a&language=it-IT"

function MainComponent() {
    const [moovieContent, setMoovieContent] = useState()
    const [seriesContent, setSeriesContent] = useState()

    useEffect(() => {
        getMoovieData();
        getSeriesData();
    }, []);
    function getMoovieData() {
        axios
            .get(call + moovieIta)
            .then((res) => {
                console.log(res)
                // setMoovieContent(res.data.filter((post) => {
                //     if (post.published == true) {
                //         return post;
                //     }
                // }))
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
                console.log(res)
                // setPublishedPosts(res.data.filter((post) => {
                //     if (post.published == true) {
                //         return post;
                //     }
                // }))
            })
            .catch((error) => {
                console.log("error")
            })
            .finally(() => {

            })
    }
    return (
        <main>
            <RowComponent key="moovies" moovie={getMoovieData} />
            <RowComponent key="series" serie={getSeriesData} />
        </main>
    )
}

export default MainComponent;