function CardComponent(el) {

    return (
        <>

            <img src={`https://image.tmdb.org/t/p/w342${el.el.
                poster_path}`} alt="" />
        </>
    )


}

export default CardComponent;