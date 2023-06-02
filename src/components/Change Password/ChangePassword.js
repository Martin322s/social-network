export function ChangePassword() {
    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="editing-info">
                    <h5 className="f-title">
                        <i className="ti-lock" />
                        Change Password
                    </h5>
                    <form method="post">
                        <div className="form-group">
                            <input type="password" id="input" required="required" />
                            <label className="control-label" htmlFor="input">
                                New password
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <input type="password" required="required" />
                            <label className="control-label" htmlFor="input">
                                Confirm password
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <div className="form-group">
                            <input type="password" required="required" />
                            <label className="control-label" htmlFor="input">
                                Current password
                            </label>
                            <i className="mtrl-select" />
                        </div>
                        <a className="forgot-pwd underline" title="" href="#">
                            Forgot Password?
                        </a>
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
};