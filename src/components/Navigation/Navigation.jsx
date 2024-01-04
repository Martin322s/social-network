function Navigation() {
    return (
        <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
            <a href="/" className="brand">
                <img src="/img/logo2.png" alt="" style={{ width: 50 }} />
            </a>
            <div
                className="nav flex-md-column nav-pills flex-grow-1"
                role="tablist"
                aria-orientation="vertical"
            >
                <a
                    className="mb-xl-3 mb-md-2 nav-link"
                    href="/profile"
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
                    href="/chats"
                    role="tab"
                >
                    <i className="zmdi zmdi-comment-alt" />
                </a>
                <a
                    className="mt-xl-3 mt-md-2 nav-link d-none d-sm-block"
                    href="/settings"
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