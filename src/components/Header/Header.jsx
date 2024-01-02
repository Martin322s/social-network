function Header() {
    return (
        <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
            <div
                className="nav flex-md-column nav-pills flex-grow-1"
                role="tablist"
                aria-orientation="vertical"
            >
                <a
                    className="mb-xl-3 mb-md-2 nav-link active"
                    data-bs-toggle="pill"
                    href="../pages/settings.html"
                    role="tab"
                >
                    <img
                        src="../assets/img/avatar5.png"
                        className="avatar sm rounded-circle"
                        alt="user avatar"
                    />
                </a>
                <a
                    className="mb-xl-3 mb-md-2 nav-link"
                    data-bs-toggle="pill"
                    href="../index.html"
                >
                    <i className="zmdi zmdi-home" />
                </a>
                <a
                    className="mt-xl-3 mt-md-2 nav-link light-dark-toggle"
                    href=""
                >
                    <i className="zmdi zmdi-brightness-2" />
                    <input className="light-dark-btn" type="checkbox" />
                </a>
                <a
                    className="mt-xl-3 mt-md-2 nav-link d-none d-sm-block"
                    href="settings.html"
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

export default Header;