import { useState } from "react";
import { Link } from "react-router-dom";

export function ChangePassword() {
    const [passwords, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        reNewPassword: ""
    });

    const changeHandler = (ev) => {
        setPassword(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const submitHandler = (ev, data) => {
        ev.preventDefault();
        console.log(data);
    }

    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="editing-info">
                    <h5 className="f-title">
                        <i className="ti-lock" />
                        Change Password
                    </h5>
                    <form onSubmit={(ev) => submitHandler(ev, passwords)}>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="newPassword"
                                value={passwords.newPassword}
                                onChange={(ev) => changeHandler(ev)}
                                required="required"
                            />
                            <label className="control-label" htmlFor="password">
                                New password
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="reNewPassword"
                                value={passwords.reNewPassword}
                                onChange={(ev) => changeHandler(ev)}
                                required="required"
                            />
                            <label className="control-label" htmlFor="repassword">
                                Confirm password
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="oldPassword"
                                value={passwords.oldPassword}
                                onChange={(ev) => changeHandler(ev)}
                                required="required"
                            />
                            <label className="control-label" htmlFor="oldpassword">
                                Current password
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <Link className="forgot-pwd underline" to="/">
                            Forgot Password?
                        </Link>
                        <div className="submit-btns">
                            <button type="button" className="mtr-btn">
                                <span>Cancel</span>
                            </button>
                            <button type="submit" className="mtr-btn">
                                <span>Update</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}