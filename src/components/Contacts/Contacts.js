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
                                    <img src="images/envelop.png" alt="" />
                                </i>
                            </div>
                            <form method="post">
                                <div className="form-group">
                                    <input type="text" id="input" required="required" />
                                    <label className="control-label" htmlFor="input">
                                        First &amp; Last Name
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required="required" />
                                    <label className="control-label" htmlFor="input">
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="5e1b333f37321e"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required="required" />
                                    <label className="control-label" htmlFor="input">
                                        Phone No.
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <input type="text" required="required" />
                                    <label className="control-label" htmlFor="input">
                                        Company
                                    </label>
                                    <i className="mtrl-select" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        rows={4}
                                        id="textarea"
                                        required="required"
                                        defaultValue={""}
                                    />
                                    <label className="control-label" htmlFor="textarea">
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
                                    <span>360 king street feasterville trevose, PA 19054</span>
                                </li>
                                <li>
                                    <i className="fa fa-mobile-phone" />
                                    <span>(800) 900-200-300</span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope-o" />
                                    <span>
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="cba2a5ada48bb2a4beb9a6aaa2a7e5a8a4a6"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <ul className="social-media">
                                <li>
                                    <a href="#" title="">
                                        <i className="fa fa-facebook-square" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <i className="fa fa-google-plus-square" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <i className="fa fa-pinterest-square" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <i className="fa fa-twitter-square" />
                                    </a>
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