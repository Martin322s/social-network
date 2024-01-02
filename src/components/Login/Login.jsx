function Login() {
    return (
        <div className="authentication">
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center no-gutters min-vh-100">
                    <div className="col-12 col-md-7 col-lg-5 col-xl-4 py-md-11">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h3 className="text-center">Sign in</h3>
                                <p className="text-center mb-6">Make it simple, but significant</p>
                                <form className="mb-4 mt-5">
                                    <div className="input-group mb-2">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <label className="c_checkbox">
                                            <input type="checkbox" />
                                            <span className="ms-2 todo_name">Remember me</span>
                                            <span className="checkmark" />
                                        </label>
                                        <a className="link" href="password-reset.html">
                                            Reset password
                                        </a>
                                    </div>
                                    <div className="text-center mt-5">
                                        <a
                                            href="../index.html"
                                            className="btn btn-lg btn-primary"
                                            title=""
                                        >
                                            Sign in
                                        </a>
                                    </div>
                                </form>
                                <p className="text-center mb-0">
                                    Don't have an account yet{" "}
                                    <a className="link" href="register.html">
                                        Sign up
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="signin-img d-none d-lg-block text-center">
                        <img src="../assets/img/auth-img.svg" alt="Sign In Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;