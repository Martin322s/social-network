function Settings() {
    return (
        <div className="main px-xl-5 px-lg-4 px-3">
            <div className="main-body">
                <div className="body-header border-bottom py-xl-3 py-2">
                    <div className="container px-0">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="media">
                                    <div className="avatar sm">
                                        <a href="index.html" title="" className="link">
                                            <i className="zmdi zmdi-arrow-left zmdi-hc-lg" />
                                        </a>
                                    </div>
                                    <div className="media-body overflow-hidden">
                                        <div className="d-flex align-items-center mb-1">
                                            <h6 className="fw-bold text-truncate mb-0 me-auto">
                                                Settings
                                            </h6>
                                        </div>
                                        <div className="text-truncate">
                                            Last Update your profile: 01 January 2021
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-page d-flex py-xl-3 py-2">
                    <div className="container px-0">
                        <div className="row">
                            <div className="col-12">
                                <ul className="nav nav-tabs nav-overflow page-header-tabs mb-4 mt-md-5 mt-3">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#setting-general"
                                            role="tab"
                                        >
                                            General
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#setting-members"
                                            role="tab"
                                        >
                                            Members
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#setting-security"
                                            role="tab"
                                        >
                                            Security
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="setting-general"
                                role="tabpanel"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <h6 className="card-title mb-0">Account Setting</h6>
                                                <span className="text-muted small">
                                                    Update your account details
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                <form className="row g-3">
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Enter your name"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Enter phone"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Enter your email"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Facebook profile link"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Instagram profile link"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Twitter profile link"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Select Avatar</label>
                                                            <input type="file" className="form-control-file" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <textarea
                                                                    rows={4}
                                                                    className="form-control"
                                                                    placeholder="Enter Bio"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="button" className="btn btn-primary">
                                                            Update
                                                        </button>
                                                        <button type="button" className="btn btn-warning">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-between mt-4">
                                    <div className="col-12 col-md-6">
                                        <h5>Delete your account</h5>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-danger mb-5">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="setting-members" role="tabpanel">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <p className="text-uppercase text-muted small mb-1">
                                                            Seats used
                                                        </p>
                                                        <span className="h4 mb-0">3 out of 7</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a className="btn btn-sm btn-outline-primary" href="#!">
                                                            Upgrade
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <p className="text-uppercase text-muted small mb-1">
                                                            Default role
                                                        </p>
                                                        <span className="h4 mb-0">Member</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a className="btn btn-sm btn-dark" href="#!">
                                                            Change
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between">
                                                <h6 className="card-title">Members</h6>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-primary"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        Invite member
                                                    </button>
                                                    <form
                                                        className="dropdown-menu dropdown-menu-right"
                                                        style={{ width: 300 }}
                                                    >
                                                        <div className="card-header">
                                                            <h6 className="card-title mb-0">Invite a member</h6>
                                                            <span className="badge bg-primary">2 seats left</span>
                                                        </div>
                                                        <div className="card-header">
                                                            <div className="row no-gutters align-items-center">
                                                                <div className="col-3">
                                                                    <label className="mb-0">Name</label>
                                                                </div>
                                                                <div className="col">
                                                                    <input
                                                                        className="form-control form-control-flush"
                                                                        type="text"
                                                                        placeholder="Full name"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-header">
                                                            <div className="row no-gutters align-items-center">
                                                                <div className="col-3">
                                                                    <label className="mb-0">Email</label>
                                                                </div>
                                                                <div className="col">
                                                                    <input
                                                                        className="form-control form-control-flush"
                                                                        type="text"
                                                                        placeholder="Email address"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button
                                                                className="btn btn-block btn-primary"
                                                                type="submit"
                                                            >
                                                                Invite member
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="list-group custom list-group-flush my-md-3">
                                                    <div className="list-group-item">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <a href="#" className="avatar">
                                                                    <img
                                                                        src="../assets/img/avatar2.png"
                                                                        className="avatar rounded-circle"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-5 ms-2">
                                                                <h6 className="mb-1">
                                                                    <a href="#">Avatar 1</a>
                                                                </h6>
                                                                <p className="small text-muted mb-0">
                                                                    <a
                                                                        className="d-block text-reset text-truncate"
                                                                        href="#"
                                                                    >
                                                                        <span>info@domain.com</span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="col-auto ms-auto mr-md-3">
                                                                <select
                                                                    className="form-control custom-select"
                                                                    data-bs-toggle="select"
                                                                >
                                                                    <option value={1}>Admin</option>
                                                                    <option value={2}>Member</option>
                                                                    <option value={3}>Custom</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="dropdown">
                                                                    <a
                                                                        className="btn dropdown-toggle"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="zmdi zmdi-more" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#!">
                                                                            Action
                                                                        </a>
                                                                        <a className="dropdown-item" href="#!">
                                                                            Another action
                                                                        </a>
                                                                        <a className="dropdown-item" href="#!">
                                                                            Something else here
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <a href="#" className="avatar">
                                                                    <img
                                                                        src="../assets/img/avatar3.png"
                                                                        className="avatar rounded-circle"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-5 ms-2">
                                                                <h6 className="mb-1">
                                                                    <a href="#">Avatar 2</a>
                                                                </h6>
                                                                <p className="small text-muted mb-0">
                                                                    <a
                                                                        className="d-block text-reset text-truncate"
                                                                        href="#"
                                                                    >
                                                                        <span>info@domain.com</span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="col-auto ms-auto mr-md-3">
                                                                <select
                                                                    className="form-control custom-select"
                                                                    data-bs-toggle="select"
                                                                >
                                                                    <option value={1}>Admin</option>
                                                                    <option value={2}>Member</option>
                                                                    <option value={3}>Custom</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="dropdown">
                                                                    <a
                                                                        className="btn dropdown-toggle"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="zmdi zmdi-more" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#!">
                                                                            Action
                                                                        </a>
                                                                        <a className="dropdown-item" href="#!">
                                                                            Another action
                                                                        </a>
                                                                        <a className="dropdown-item" href="#!">
                                                                            Something else here
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <a href="#" className="avatar">
                                                                    <img
                                                                        src="../assets/img/avatar4.png"
                                                                        className="avatar rounded-circle"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="col-5 ms-2">
                                                                <h6 className="mb-1">
                                                                    <a href="#">Avatar 4</a>
                                                                </h6>
                                                                <p className="small text-muted mb-0">
                                                                    <a
                                                                        className="d-block text-reset text-truncate"
                                                                        href="#"
                                                                    >
                                                                        <span>info@domain.com</span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="col-auto ms-auto mr-md-3">
                                                                <select
                                                                    className="form-control custom-select"
                                                                    data-bs-toggle="select"
                                                                >
                                                                    <option value={1}>Admin</option>
                                                                    <option value={2}>Member</option>
                                                                    <option value={3}>Custom</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="dropdown">
                                                                    <a
                                                                        className="btn dropdown-toggle"
                                                                        href="#"
                                                                        role="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="zmdi zmdi-more" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a className="dropdown-item" href="#!">
                                                                            Action
                                                                        </a>
                                                                        <a className="dropdown-item" href="#!">
                                                                            Another action
                                                                        </a>
                                                                        <a className="dropdown-item" href="#!">
                                                                            Something else here
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="setting-security" role="tabpanel">
                                <div className="row justify-content-between mb-4">
                                    <div className="col-12 col-md-6">
                                        <h5>Change your password</h5>
                                        <p className="text-muted mb-md-0">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
                                            Quasi, autem!
                                        </p>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-warning">
                                            Forgot your password?
                                        </button>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <form className="row">
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label>Current password</label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label>New password</label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label>Confirm password</label>
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                        <button type="button" className="btn btn-primary">
                                                            Update Password
                                                        </button>
                                                        <button type="button" className="btn btn-warning">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    <div className="col-lg-8 col-md-12">
                                                        <div className="card bg-light border">
                                                            <div className="card-body">
                                                                <p className="mb-2">Password requirements</p>
                                                                <p className="small text-muted mb-2">
                                                                    To create a new password, you have to meet all of
                                                                    the following requirements:
                                                                </p>
                                                                <ul className="small text-muted ps-4 mb-0">
                                                                    <li>Minimum 8 character</li>
                                                                    <li>At least one special character</li>
                                                                    <li>At least one number</li>
                                                                    <li>Can’t be the same as a previous password</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-between mt-4 mb-4">
                                    <div className="col-12 col-md-6">
                                        <h5>Device History</h5>
                                        <p className="text-muted mb-md-0">
                                            If you see a device here that you believe wasn’t you, please
                                            contact our account fraud department immediately.
                                        </p>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-dark">Log out all devices</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="list-group custom list-group-flush my-md-3">
                                                    <div className="list-group-item px-0">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="avatar lg text-center">
                                                                    <i className="zmdi zmdi-smartphone h2" />
                                                                </div>
                                                            </div>
                                                            <div className="col ml-n2">
                                                                <h6 className="mb-1">iPhone 11</h6>
                                                                <small className="text-muted">
                                                                    Indonesia, Makassar<time>Jan 01 at 00:05pm</time>
                                                                </small>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-white">
                                                                    Sign out
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item px-0">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="avatar lg text-center">
                                                                    <i className="zmdi zmdi-desktop-mac h2" />
                                                                </div>
                                                            </div>
                                                            <div className="col ml-n2">
                                                                <h6 className="mb-1">
                                                                    iMac OSX ·{" "}
                                                                    <span className="font-weight-normal">
                                                                        Edge 10.2
                                                                    </span>
                                                                </h6>
                                                                <small className="text-muted">
                                                                    Indonesia, Makassar<time>Jan 01 at 00:05pm</time>
                                                                </small>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-white">
                                                                    Sign out
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item px-0">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="avatar lg text-center">
                                                                    <i className="zmdi zmdi-laptop h2" />
                                                                </div>
                                                            </div>
                                                            <div className="col ml-n2">
                                                                <h6 className="mb-1">HP Laptop Win10</h6>
                                                                <small className="text-muted">
                                                                    Indonesia, Makassar <time>Jan 01 at 00:05pm</time>
                                                                </small>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-white">
                                                                    Sign out
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item px-0">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <div className="avatar lg text-center">
                                                                    <i className="zmdi zmdi-desktop-windows h2" />
                                                                </div>
                                                            </div>
                                                            <div className="col ml-n2">
                                                                <h6 className="mb-1">
                                                                    iMac OSX ·{" "}
                                                                    <span className="font-weight-normal">
                                                                        Edge browser
                                                                    </span>
                                                                </h6>
                                                                <small className="text-muted">
                                                                    Inodonesia, Makassar<time>Jan 01 at 00:05pm</time>
                                                                </small>
                                                            </div>
                                                            <div className="col-auto">
                                                                <button className="btn btn-sm btn-white">
                                                                    Sign out
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;