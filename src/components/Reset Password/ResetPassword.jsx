function ResetPassword() {
    return (
        <div className="authentication">
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center no-gutters min-vh-100">
                    <div className="col-12 col-md-7 col-lg-5 col-xl-4 py-md-11">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h3 className="text-center">Password Reset</h3>
                                <p className="text-center mb-6">
                                    Please enter your email address below to receive instructions for
                                    resetting password.
                                </p>
                                <form className="mb-4 mt-5">
                                    <div className="input-group mb-2">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="text-center mt-5">
                                        <a
                                            href="login.html"
                                            className="btn btn-lg btn-primary"
                                            title=""
                                        >
                                            Send Reset link
                                        </a>
                                    </div>
                                </form>
                                <p className="text-center mb-0">
                                    Already have an account?{" "}
                                    <a className="link" href="login.html">
                                        Sign in
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="signin-img d-none d-lg-block text-center">
                        <img src="assets/img/auth-img.svg" alt="Sign In Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;