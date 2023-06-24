import { Link } from "react-router-dom";

export function ChangePassword() {
    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="editing-info">
                    <h5 className="f-title">
                        <i className="ti-lock" />
                        Change Password
                    </h5>
                    <form>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
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
                                name="repassword"
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
                                name="oldpassword"
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
                            <button type="button" className="mtr-btn">
                                <span>Update</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}