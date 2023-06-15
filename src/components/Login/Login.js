import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row merged">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="land-featurearea">
                            <div className="land-meta">
                                <h1>Winku</h1>
                                <p>
                                    Welcome to the login page! Please enter your credentials to access
                                    your account.
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
                                <h2 className="log-title">Login</h2>
                                <p>
                                    Don't use Winku Yet?{" "}
                                    <Link to="/users/register" replace>
                                        Join now
                                    </Link>
                                </p>
                                <form>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            id="username" 
                                            required="required"
                                        />
                                        <label className="control-label" htmlFor="username">
                                            Username
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input 
                                            type="password" 
                                            required="required"
                                            id="password"
                                        />
                                        <label className="control-label" htmlFor="password">
                                            Password
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>
                                    <Link href="/" className="forgot-pwd">
                                        Forgot Password?
                                    </Link>

                                    <div className="submit-btns">
                                        <button className="mtr-btn signin" type="button">
                                            <span>Login</span>
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