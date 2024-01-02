function PhoneCalls() {
    return (
        <div className="tab-pane fade" id="nav-tab-phone" role="tabpanel">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0 text-primary">Call</h3>
                <div>
                    <button className="btn btn-dark" type="button">
                        New Call
                    </button>
                </div>
            </div>
            <div className="form-group input-group-lg search mb-3">
                <i className="zmdi zmdi-search" />
                <input type="text" className="form-control" placeholder="Search..." />
            </div>
            <ul className="chat-list">
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>RECENT CALL</span>
                    <div className="dropdown">
                        <a
                            className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        />
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="hover_action">
                        <button type="button" className="btn btn-link text-info">
                            <i className="zmdi zmdi-eye" />
                        </button>
                        <button type="button" className="btn btn-link text-warning">
                            <i className="zmdi zmdi-star" />
                        </button>
                        <button type="button" className="btn btn-link text-danger">
                            <i className="zmdi zmdi-delete" />
                        </button>
                    </div>
                    <a href="#" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar1.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 1</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-missed me-1" /> Yesterday at 07:00
                                        AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="hover_action">
                        <button type="button" className="btn btn-link text-info">
                            <i className="zmdi zmdi-eye" />
                        </button>
                        <button type="button" className="btn btn-link text-warning">
                            <i className="zmdi zmdi-star" />
                        </button>
                        <button type="button" className="btn btn-link text-danger">
                            <i className="zmdi zmdi-delete" />
                        </button>
                    </div>
                    <a href="#" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar2.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 2</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-missed me-1" /> Yesterday at 09:00
                                        AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="hover_action">
                        <button type="button" className="btn btn-link text-info">
                            <i className="zmdi zmdi-eye" />
                        </button>
                        <button type="button" className="btn btn-link text-warning">
                            <i className="zmdi zmdi-star" />
                        </button>
                        <button type="button" className="btn btn-link text-danger">
                            <i className="zmdi zmdi-delete" />
                        </button>
                    </div>
                    <a href="#" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar3.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 3</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-missed me-1" /> Yesterday at 11:21
                                        AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="hover_action">
                        <button type="button" className="btn btn-link text-info">
                            <i className="zmdi zmdi-eye" />
                        </button>
                        <button type="button" className="btn btn-link text-warning">
                            <i className="zmdi zmdi-star" />
                        </button>
                        <button type="button" className="btn btn-link text-danger">
                            <i className="zmdi zmdi-delete" />
                        </button>
                    </div>
                    <a href="#" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar4.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 4</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-forwarded me-1" /> Yesterday at
                                        21:00 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="hover_action">
                        <button type="button" className="btn btn-link text-info">
                            <i className="zmdi zmdi-eye" />
                        </button>
                        <button type="button" className="btn btn-link text-warning">
                            <i className="zmdi zmdi-star" />
                        </button>
                        <button type="button" className="btn btn-link text-danger">
                            <i className="zmdi zmdi-delete" />
                        </button>
                    </div>
                    <a href="#" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar5.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 5</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-missed me-1" /> Yesterday at 00:08
                                        AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="hover_action">
                        <button type="button" className="btn btn-link text-info">
                            <i className="zmdi zmdi-eye" />
                        </button>
                        <button type="button" className="btn btn-link text-warning">
                            <i className="zmdi zmdi-star" />
                        </button>
                        <button type="button" className="btn btn-link text-danger">
                            <i className="zmdi zmdi-delete" />
                        </button>
                    </div>
                    <a href="#" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar6.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 6</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-forwarded me-1" /> Yesterday at
                                        16:00 AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PhoneCalls;