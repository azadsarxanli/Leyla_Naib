import './Contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <p className="contact__work-together">let’s work together</p>
            <div className="contact__details">
                <h1>contact us</h1>
                <p className="contact__details__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis nunc leo sed lectus 
                    fringilla tincidunt sed enim. Netus enim augue facilisis faucibus amet.
                </p>
                <div className="contact__details__messagge-send-part">
                    <div className="contact__details__messagge-send-part__contact-info">
                        <p>(+994 50) 222 21 11</p>
                        <p>high.interiordesignn@gmail.com</p>
                    </div>
                    <div className="contact__details__messagge-send-part__your-info">
                        <p>*Error</p>
                        <div className="contact__details__messagge-send-part__your-info__enter-part">
                            <input type="text" placeholder="Phone"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Message" />
                        </div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;