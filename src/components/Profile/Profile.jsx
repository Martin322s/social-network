function Profile() {
    return (
        <div className="tab-pane fade" id="nav-tab-user" role="tabpanel">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0 text-primary">Profile</h3>
                <div>
                    <a href="pages/login.html" title="" className="btn btn-dark">
                        Sign Out
                    </a>
                </div>
            </div>
            <div className="form-group input-group-lg search mb-3">
                <i className="zmdi zmdi-search" />
                <input type="text" className="form-control" placeholder="Search..." />
            </div>
            <div className="card border-0 text-center pt-3 mb-4">
                <div className="card-body">
                    <div className="card-user-avatar">
                        <img src="/img/avatar5.png" alt="avatar" style={{ width: 150 }} />
                        <button type="button" className="btn btn-secondary btn-sm">
                            <i className="zmdi zmdi-edit" />
                        </button>
                    </div>
                    <div className="card-user-detail mt-4">
                        <h5>Your Name</h5>
                        <span className="text-muted">
                            <a href="">info@domain.com</a>
                        </span>
                        <p>+628xxxxxxx - Makassar (IDN)</p>
                        <div className="social">
                            <a
                                className="icon p-2"
                                href="#"
                                data-toggle="tooltip"
                                title="Facebook"
                            >
                                <i className="zmdi zmdi-facebook-box" />
                            </a>
                            <a
                                className="icon p-2"
                                href="#"
                                data-toggle="tooltip"
                                title="Youtube"
                            >
                                <i className="zmdi zmdi-youtube-play" />
                            </a>
                            <a
                                className="icon p-2"
                                href="#"
                                data-toggle="tooltip"
                                title="Twitter"
                            >
                                <i className="zmdi zmdi-twitter" />
                            </a>
                            <a
                                className="icon p-2"
                                href="#"
                                data-toggle="tooltip"
                                title="Instagram"
                            >
                                <i className="zmdi zmdi-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0">
                <ul className="list-group custom list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Color scheme</span>
                        <ul className="choose-skin list-unstyled mb-0">
                            <li data-theme="indigo" data-toggle="tooltip" title="Theme-Indigo">
                                <div className="indigo" />
                            </li>
                            <li
                                className="active"
                                data-theme="cyan"
                                data-toggle="tooltip"
                                title="Theme-Darkred"
                            >
                                <div className="cyan" />
                            </li>
                            <li data-theme="green" data-toggle="tooltip" title="Theme-Green">
                                <div className="green" />
                            </li>
                            <li data-theme="blush" data-toggle="tooltip" title="Theme-Blush">
                                <div className="blush" />
                            </li>
                            <li data-theme="dark" data-toggle="tooltip" title="Theme-Dark">
                                <div className="dark" />
                            </li>
                        </ul>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Facebook notifications</span>
                        <label className="c_checkbox">
                            <input type="checkbox" defaultChecked="" />
                            <span className="checkmark" />
                        </label>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Youtube notifications</span>
                        <label className="c_checkbox">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Twitter notifications</span>
                        <label className="c_checkbox">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Instagram notifications</span>
                        <label className="c_checkbox">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </label>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Profile;