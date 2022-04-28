

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">

                <h1 className="navbar-brand">Lajhár fitness</h1>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link smoothScroll">Főoldal</a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link smoothScroll">Rólunk</a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link smoothScroll">Üzenet</a>
                        </li>

                        <li className="nav-item">
                            <a href="#bejelentkezes" className="nav-link smoothScroll" data-toggle="modal" data-target="#bejelentkezes">Bejelentkezés</a>
                        </li>

                        <li className="nav-item">
                            <a href="#regisztracio" className="nav-link smoothScroll" data-toggle="modal" data-target="#regisztracio">Regisztráció</a>
                        </li>
                    </ul>

                    <ul className="social-icon ml-lg-3">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-instagram"></a></li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Navbar