import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initialValue, reducer } from "./data/data";
import { changeHandler } from "./utils/utils";
import * as userService from "../../services/userService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (ev, data) => {
        ev.preventDefault();

        userService.loginUser(data)
            .then(res => {
                if (res.status !== 200) {
                    alert('Invalid data provided')
                } else {
                    return res.json();
                }
            })
            .then(result => {
                userLogin(result);
                navigate('/', { replace: true });
            })
            .catch(err => console.log(err));
    }

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
                                <form onSubmit={(ev) => submitHandler(ev, state)}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            required="required"
                                            value={state.email}
                                            onChange={(ev) => changeHandler(ev, dispatch)}
                                        />
                                        <label className="control-label" htmlFor="email">
                                            Email
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            required="required"
                                            id="password"
                                            value={state.password}
                                            onChange={(ev) => changeHandler(ev, dispatch)}
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
                                        <button className="mtr-btn signin" type="submit">
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