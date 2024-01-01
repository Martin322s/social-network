function Navigation() {
    return (
        <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
            <a href="index.html" className="brand">
                <img src="/img/logo2.png" alt="" style={{ width: 50 }} />
            </a>
            <div
                className="nav flex-md-column nav-pills flex-grow-1"
                role="tablist"
                aria-orientation="vertical"
            >
                <a
                    className="mb-xl-3 mb-md-2 nav-link"
                    data-toggle="pill"
                    href="#nav-tab-user"
                    role="tab"
                >
                    <img
                        src="/img/avatar5.png"
                        className="avatar sm rounded-circle"
                        alt="user avatar"
                    />
                </a>
                <a
                    className="mb-xl-3 mb-md-2 nav-link active"
                    data-toggle="pill"
                    href="#nav-tab-chat"
                    role="tab"
                >
                    <i className="zmdi zmdi-comment-alt" />
                </a>
                <a
                    className="mb-xl-3 mb-md-2 nav-link"
                    data-toggle="pill"
                    href="#nav-tab-phone"
                    role="tab"
                >
                    <i className="zmdi zmdi-phone" />
                </a>
                <a
                    className="mb-xl-3 mb-md-2 nav-link"
                    data-toggle="pill"
                    href="#nav-tab-contact"
                    role="tab"
                >
                    <i className="zmdi zmdi-account-circle" />
                </a>
                <a
                    className="mb-xl-3 mb-md-2 nav-link d-none d-sm-block flex-grow-1"
                    data-toggle="pill"
                    href="#nav-tab-pages"
                    role="tab"
                >
                    <i className="zmdi zmdi-layers" />
                </a>
                <a
                    className="mt-xl-3 mt-md-2 nav-link light-dark-toggle"
                    href="/"
                >
                    <i className="zmdi zmdi-brightness-2" />
                    <input className="light-dark-btn" type="checkbox" />
                </a>
                <a
                    className="mt-xl-3 mt-md-2 nav-link d-none d-sm-block"
                    href="pages/settings.html"
                    role="tab"
                >
                    <i className="zmdi zmdi-settings" />
                </a>
            </div>
            <button type="submit" className="btn sidebar-toggle-btn shadow-sm">
                <i className="zmdi zmdi-menu" />
            </button>
        </div>
    );
}

export default Navigation;