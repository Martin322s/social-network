function TabPanel() {
    return (
        <div className="tab-pane fade" id="nav-tab-contact" role="tabpanel">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0 text-primary">Contact</h3>
                <div>
                    <button
                        className="btn btn-dark"
                        type="button"
                        data-toggle="modal"
                        data-target="#InviteFriends"
                    >
                        Invite Friends
                    </button>
                </div>
            </div>
            <div className="form-group input-group-lg search mb-3">
                <i className="zmdi zmdi-search" />
                <input type="text" className="form-control" placeholder="Search..." />
            </div>
            <ul className="chat-list">
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>A</span>
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
                                    <div className="text-truncate">last seen 1 day ago</div>
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
                                    <div className="text-truncate">last seen 2 day ago</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>C</span>
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
                                    <div className="text-truncate">last seen 3 day ago</div>
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
                                    <div className="text-truncate">last seen 1 day ago</div>
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
                                    <div className="text-truncate">last seen 1 day ago</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>D</span>
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
                                    <div className="text-truncate">last seen 1 day ago</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>M</span>
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
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 7</h6>
                                    </div>
                                    <div className="text-truncate">last seen 1 day ago</div>
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
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 8</h6>
                                    </div>
                                    <div className="text-truncate">last seen 1 day ago</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>T</span>
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
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 9</h6>
                                    </div>
                                    <div className="text-truncate">last seen 1 day ago</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default TabPanel;