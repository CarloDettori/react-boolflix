function CardComponent(el) {
    //const { moovieContent, seriesContent, filmRowTitle, serieRowTitle } = useContext(GlobalContext)
    console.log(el.el)
    let title = null
    if (el.el.title) {
        title = el.el.title
    } else if (el.el.name) {
        title = el.el.name
    }
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w342${el.el.
                poster_path}`} alt="" />
            <div className="overlay">
                <h4>{title}</h4>

                <p>{el.el.overview.substring(0, 200)}...</p>
                <p>Voto: {el.el.vote_average}</p>
                <p></p>
            </div>
        </div>

    )


}

export default CardComponent;