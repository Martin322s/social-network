import { Link } from "react-router-dom";

export function Contacts() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contct-info">
                        <div className="contact-form">
                            <div className="cnt-title">
                                <span>Send us a message</span>
                                <i>
                                    <img src="images/envelop.png" alt="profile" />
                                </i>
                            </div>
                            <form>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        id="firstName"
                                        required="required" 
                                    />
                                    <label className="control-label" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        id="lastName"
                                        required="required" 
                                    />
                                    <label className="control-label" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        id="email"
                                        name="email"
                                        required="required" 
                                    />
                                    <label className="control-label" htmlFor="email">
                                        Email
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        id="phone"
                                        required="required" 
                                    />
                                    <label className="control-label" htmlFor="phone">
                                        Phone
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        rows={4}
                                        id="message"
                                        required="required"
                                        defaultValue={""}
                                        name="message"
                                    />
                                    <label className="control-label" htmlFor="message">
                                        Message
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="submit-btns">
                                    <button className="mtr-btn signup" type="button">
                                        <i className="fa fa-paper-plane" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="cntct-adres">
                            <h3>contact info</h3>
                            <ul>
                                <li>
                                    <i className="ti-location-pin" />
                                    <span>Bulgaria, Montana, Neofit Bozveli 40 Str.</span>
                                </li>
                                <li>
                                    <i className="fa fa-mobile-phone" />
                                    <span>+359 87 704 0853</span>
                                </li>
                            </ul>
                            <ul className="social-media">
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-facebook-square" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-google-plus-square" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-pinterest-square" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-twitter-square" />
                                    </Link>
                                </li>
                            </ul>
                            <h1 className="bg-cntct">Winku</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}