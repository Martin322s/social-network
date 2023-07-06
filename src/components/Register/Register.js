import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initialState, reducer } from "./data/registerData";
import { changeHandler, termsStatusChange } from "./utils/utils";
import * as userService from "../../services/userService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function Register() {
    const { userLogin } = useContext(AuthContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    let regex = new RegExp('[A-Za-z]+', 'g');

    const submitHandler = (ev, data) => {
        ev.preventDefault();

        if (Object.values(data).some(x => x === "")) {
            alert("All fields are required!");
        } else if (state.tac === false) {
            alert("Please, accept all terms and conditions!")
        } else {
            userService.registerUser(data)
                .then((result) => {
                    if (result.message) {
                        console.log(result);
                        throw result.message;
                    } else {
                        userLogin(result);
                        navigate('/profile/edit', { replace: true });
                    }
                })
                .catch(err => alert(err));
        }
    }

    console.log(regex.test(state.password) + ' ' + regex + ' ' + state.password);

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
                                <form onSubmit={(ev) => submitHandler(ev, state)}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required="required"
                                            id="firstName"
                                            name="firstName"
                                            value={state.firstName}
                                            onChange={(ev) => changeHandler(ev, dispatch)}
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
                                            value={state.lastName}
                                            onChange={(ev) => changeHandler(ev, dispatch)}
                                        />
                                        <label className="control-label" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required="required"
                                            id="email"
                                            name="email"
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
                                            required="required"
                                            id="password"
                                            name="password"
                                            value={state.password}
                                            onChange={(ev) => changeHandler(ev, dispatch)}
                                        />
                                        <label className="control-label" htmlFor="password">
                                            Password
                                        </label>
                                        <i className="mtrl-select" />
                                        <p
                                            className={state.password.length >= 6
                                                ?
                                                "password-length correct"
                                                :
                                                "password-length"
                                            }
                                        >
                                            {state.password.length >= 6
                                                ? <i className={state.password.length >= 6
                                                    ?
                                                    "fas fa-check correct"
                                                    :
                                                    "fas fa-check"
                                                }>
                                                </i>
                                                : null
                                            }
                                            Password must contain at least 6 characters.
                                        </p>
                                        <p className={
                                            regex.test(state.password)
                                                ?
                                                "password-length correct"
                                                :
                                                "password-length"
                                        }
                                        >
                                            <i className={regex.test(state.password)
                                                ?
                                                "fas fa-check correct vis"
                                                :
                                                "fas fa-check correct hid"
                                            }>
                                            </i>
                                            Password must contain upper / lower case letters.
                                        </p>
                                        <p
                                            className="password-numeric correct"
                                        >
                                            <i className="fas fa-check correct"></i>
                                            Password must contain at least one numeric character.
                                        </p>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            required="required"
                                            id="repassword"
                                            name="repassword"
                                            value={state.repassword}
                                            onChange={(ev) => changeHandler(ev, dispatch)}
                                        />
                                        <label className="control-label" htmlFor="repassword">
                                            Confirm password
                                        </label>
                                        <i className="mtrl-select" />
                                    </div>

                                    <div className="form-radio">
                                        <div className="radio">
                                            <label htmlFor="gender-male">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="gender-male"
                                                    value="male"
                                                    checked={state.gender === "male"}
                                                    onChange={(ev) => changeHandler(ev, dispatch)}
                                                />
                                                <i className="check-box" />
                                                Male
                                            </label>
                                        </div>

                                        <div className="radio">
                                            <label htmlFor="gender-female">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="gender-female"
                                                    value="female"
                                                    checked={state.gender === "female"}
                                                    onChange={(ev) => changeHandler(ev, dispatch)}
                                                />
                                                <i className="check-box" />
                                                Female
                                            </label>
                                        </div>
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="tac"
                                                checked={state.tac}
                                                onChange={(ev) => termsStatusChange(ev, dispatch)}
                                            />
                                            <i className="check-box" />
                                            Accept Terms &amp; Conditions ?
                                        </label>
                                    </div>

                                    <Link to="/users/login" className="already-have" replace>
                                        Already have an account
                                    </Link>

                                    <div className="submit-btns">
                                        <button className="mtr-btn signup" type="submit">
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