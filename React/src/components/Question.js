

function Question() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">

                    <div className="align-items-center col-lg-5 col-md-6 col-12">
                        <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Kérdezz tőlünk</h2>

                        <form action="#" method="post" className="contact-form webform rounded" data-aos="fade-up" data-aos-delay="400" role="form">

                            <input type="text" className="form-control rounded" name="cf-name" placeholder="Név" />

                            <input type="email" className="form-control rounded" name="cf-email" placeholder="Email" />

                            <textarea className="form-control not-resizeable rounded" rows="5" name="cf-message" placeholder="Üzenet"></textarea>

                            <button type="submit" className="form-control rounded" id="submit-button" name="submit">Üzenet kűldése</button>

                        </form>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Question