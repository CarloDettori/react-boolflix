import { useContext } from "react";
import RowComponent from "./RowComponent";
import { GlobalContext } from "../context/GlobalContext";

function MainComponent() {
    const { moovieContent, seriesContent, filmRowTitle, serieRowTitle } = useContext(GlobalContext)

    return (
        <main>
            <RowComponent key="moovies" content={moovieContent} rowTitle={filmRowTitle} />
            <RowComponent key="series" content={seriesContent} rowTitle={serieRowTitle} />
        </main>
    )
}

export default MainComponent;