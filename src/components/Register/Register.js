import { Link } from "react-router-dom";

export function Register() {
    return (
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row merged">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="land-featurearea">
                            <div className="land-meta">
                                <h1>Winku</h1>
                                <p>
                                    Please fill out the form below to create your account
                                    and join our community.
                                </p>
                                <div className="friend-logo">
                                    <span>
                                        <img src="/images/wink.png" alt="logo" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="login-reg-bg">
                            <div className="log-reg-area sign">
                                <h2 className="log-title">Register</h2>
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required="required"
                                            id="firstName"
                                            name="firstName"
                                        />
                                        <label className="control-label" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required="required"
                                            id="lastName"
                                            name="lastName"
                                        />
                                        <label className="control-label" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" required="required" id="email" name="email" />
                                        <label className="control-label" htmlFor="email">
                                            <a
                                                href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                                className="__cf_email__"
                                                data-cfemail="6c29010d05002c"
                                            >
                                                Email
                                            </a>
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            required="required"
                                            id="password"
                                            name="password"
                                        />
                                        <label className="control-label" htmlFor="password">
                                            Password
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            required="required"
                                            id="repassword"
                                            name="repassword"
                                        />
                                        <label className="control-label" htmlFor="repassword">
                                            Confirm password
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-radio">
                                        <div className="radio">
                                            <label htmlFor="gender">
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                    defaultChecked="checked"
                                                    id="gender"
                                                />
                                                <i className="check-box" />
                                                Male
                                            </label>
                                        </div>

                                        <div className="radio">
                                            <label htmlFor="gender">
                                                <input type="radio" name="radio" id="gender" />
                                                <i className="check-box" />
                                                Female
                                            </label>
                                        </div>
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" defaultChecked="checked" />
                                            <i className="check-box" />
                                            Accept Terms &amp; Conditions ?
                                        </label>
                                    </div>

                                    <Link to="/users/login" className="already-have" replace>
                                        Already have an account
                                    </Link>

                                    <div className="submit-btns">
                                        <button className="mtr-btn signup" type="button">
                                            <span>Register</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};