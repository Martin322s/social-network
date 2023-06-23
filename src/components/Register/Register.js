import { useReducer } from "react";
import { Link } from "react-router-dom";
import { initialState, reducer } from "./data/registerData";
import { changeHandler, termsStatusChange } from "./utils/utils";
import * as userService from "../../services/userService";

export function Register() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitHandler = (ev, data) => {
        ev.preventDefault();
        
        if (Object.values(data).some(x => x === "")) {
            alert("All fields are required!");
        } else {
            userService.registerUser(data)
                .then();
        }
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