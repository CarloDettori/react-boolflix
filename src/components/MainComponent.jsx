import RowComponent from "./RowComponent";

function MainComponent() {

    return (
        <main>
            <RowComponent key="moovies" content={moovieContent} rowTitle={filmRowTitle} />
            <RowComponent key="series" content={seriesContent} rowTitle={serieRowTitle} />
        </main>
    )
}

export default MainComponent;