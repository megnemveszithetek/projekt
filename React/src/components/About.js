

function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="row">

                    <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-5 mx-auto col">
                        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Rólunk</h2>

                        <p data-aos="fade-up" data-aos-delay="400">A Lajhár KFT. bármikor elérhető a project.nembukunkmeg@gmail.com email címen.</p>

                        <p data-aos="fade-up" data-aos-delay="500">A csapat további tagja Besenyei János designer is.</p>

                    </div>

                    <div className="ml-lg-auto col-lg-3 col-md-2 col " data-aos="fade-up" data-aos-delay="700">
                        <div className="team-thumb">
                            <img src="images/team/gabor.jpg" className="img-fluid" alt="programer" />

                            <div className="team-info d-flex flex-column">

                                <h3>Vágási Gábor</h3>
                                <h4>Applikáció fejlesztő</h4>


                            </div>
                        </div>
                    </div>

                    <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-2 col" data-aos="fade-up" data-aos-delay="800">
                        <div className="team-thumb">
                            <img src="images/team/adam.jpg" className="img-fluid" alt="programer" />

                            <div className="team-info d-flex flex-column">

                                <h3>Szurkos Ádám</h3>
                                <h4>Programozó</h4>


                            </div>
                        </div>
                    </div>

                    <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-2 col" data-aos="fade-up" data-aos-delay="900">
                        <div className="team-thumb">
                            <img src="images/team/janos.jpg" className="img-fluid" alt="programer" />

                            <div className="team-info d-flex flex-column">

                                <h3>Besenyei János</h3>
                                <h4>Frontend</h4>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
