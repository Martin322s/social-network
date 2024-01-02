function Options() {
    return (
        <div className="tab-pane fade" id="nav-tab-pages" role="tabpanel">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0 text-primary">Pages</h3>
            </div>
            <div className="card border-0">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 mt-3">
                        <a className="link" href="pages/login.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Login
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/register.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Registration
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/password-reset.html">
                            <i className="zmdi zmdi-label-alt me-2" /> Reset Password
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/settings.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Settings
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/single-chat.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Single Chat Room
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/group-chat.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Group Chat Room
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/audio-call.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Audio Call Room
                        </a>
                    </li>
                    <li className="list-group-item border-0">
                        <a className="link" href="pages/video-call.html">
                            <i className="zmdi zmdi-label-alt me-2" />
                            Video Call Room
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Options;