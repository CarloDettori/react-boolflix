import { NavLink } from "react-router-dom";

function HeaderComponent() {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg bg-body-black">
                <div className="container-fluid">
                    <a id="logo-he" className="navbar-brand" href="#">BOOLFLIX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul id="ul" className="d-flex">
                        <li>
                            <NavLink id="l1" to="/">Home</NavLink>
                        </li>
                        <li id="li2">
                            <NavLink id="l2" to="/contenuti">Esplora</NavLink>
                        </li>

                    </ul>
                    <div className="d-flex">
                        <select id="genere-filter" className="form-select" aria-label="Default select example" defaultValue="All generes">
                            <option value="all-generes">Tutti i generi</option>
                            <option value="1">Thriller</option>
                            <option value="2">Horror</option>
                            <option value="3">Commedia</option>
                        </select>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex" role="search">
                                <input id="search-bar" className="form-control me-3" type="search" placeholder="titolo" aria-label="Search" />
                                <button id="search-button" className="btn" type="submit">Cerca</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default HeaderComponent;