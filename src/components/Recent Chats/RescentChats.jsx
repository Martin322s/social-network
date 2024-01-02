function RecentChats() {
    return (
        <div className="tab-pane fade show active" id="nav-tab-chat" role="tabpanel">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0 text-primary">Chat</h3>
                <div>
                    <button className="btn btn-dark" type="button">
                        New Chat
                    </button>
                </div>
            </div>
            <div className="form-group input-group-lg search mb-3">
                <i className="zmdi zmdi-search" />
                <input type="text" className="form-control" placeholder="Search..." />
            </div>
            <ul className="chat-list">
                <li className="header d-flex justify-content-between ps-3 pe-3 mb-1">
                    <span>RECENT CHATS</span>
                    <div className="dropdown">
                        <a
                            className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="zmdi zmdi-filter-list" />
                        </a>
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
                    <a href="pages/bot-chat.html" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <div className="avatar rounded-circle no-image bg-primary text-light">
                                        <span>
                                            <i className="zmdi zmdi-comment-text" />
                                        </span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Chat Bot</h6>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-circle text-success" /> Online
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="online">
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
                    <a href="pages/single-chat.html" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar2.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 1</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            09:00 am
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
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
                    <a href="pages/group-chat.html" className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar me-3">
                                    <span className="status rounded-circle" />
                                    <div className="avatar rounded-circle no-image cyan">
                                        <span>DG</span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Design Group</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            07:00 am
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-file-text me-1" /> Lorem ipsum dolor sit
                                        amet consectetur, adipisicing....
                                        <div className="avatar-list avatar-list-stacked mt-1">
                                            <img
                                                className="avatar xs rounded"
                                                src="assets/img/avatar4.png"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Jojo"
                                            />
                                            <img
                                                className="avatar xs rounded"
                                                src="assets/img/avatar3.png"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Jeje"
                                            />
                                            <img
                                                className="avatar xs rounded"
                                                src="assets/img/avatar5.png"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Jaja"
                                            />
                                            <img
                                                className="avatar xs rounded"
                                                src="assets/img/avatar1.jpg"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Jiji"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="away">
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
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar4.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 2</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            20:00 pm
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        Lorem ipsum dolor sit amet consectetur.
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
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar2.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 3</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            23:10 pm
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-file-text me-1" /> Lorem ipsum dolor sit
                                        amet consectetur adipisicing elit. Fuga....
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="online">
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
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar1.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 4</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            17:00 am
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        <div className="wave">
                                            <span className="dot" />
                                            <span className="dot" />
                                            <span className="dot" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="away">
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
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar6.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 5</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            11:00 am
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-phone-end me-1" /> Lorem ipsum dolor sit
                                        amet consectetur, adipisicing elit.
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
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar5.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 6</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            01-01-2021
                                        </p>
                                    </div>
                                    <div className="text-truncate">Hello, Terry are you there?</div>
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
                                    <span className="status rounded-circle" />
                                    <div className="avatar rounded-circle no-image cyan">
                                        <span>DC</span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Daeng Coding</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            02-01-2021
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-file-text me-1" /> Lorem ipsum dolor sit
                                        amet, consectetur...
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
                                    <span className="status rounded-circle" />
                                    <div className="avatar rounded-circle no-image green">
                                        <span>JD</span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">John Doe</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            21:00 pm
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        Lorem ipsum dolor sit amet consectetur....
                                        <div className="avatar-list avatar-list-stacked mt-1">
                                            <img
                                                className="avatar xs rounded"
                                                src="assets/img/avatar1.jpg"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Jojo"
                                            />
                                            <img
                                                className="avatar xs rounded"
                                                src="assets/img/avatar2.png"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Jeje"
                                            />
                                        </div>
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
                                    <span className="status rounded-circle" />
                                    <img
                                        className="avatar rounded-circle"
                                        src="assets/img/avatar3.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Avatar 7</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            03-01-2121
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        Hello, Lorem ipsum dolor sit amet.
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
                                    <span className="status rounded-circle" />
                                    <div className="avatar rounded-circle no-image red">
                                        <span>YC</span>
                                    </div>
                                </div>
                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 me-auto">Youtube Creator</h6>
                                        <p className="small text-muted text-nowrap ms-4 mb-0">
                                            04-01-2021
                                        </p>
                                    </div>
                                    <div className="text-truncate">
                                        <i className="zmdi zmdi-file-text me-1" /> Lorem ipsum dolor sit
                                        amet consectetur...
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

export default RecentChats;