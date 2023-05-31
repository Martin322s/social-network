export function Header() {
    return (
        <header>
            <nav>
                <div className="theme-layout">
                    <div className="topbar stick">
                        <div className="logo">
                            <a href="/">
                                <img src="images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="top-area">
                            <ul className="main-menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Timeline</a></li>
                                <li><a href="/">Account settings</a></li>
                                <li><a href="/">More pages</a></li>
                            </ul>
                            <ul className="setting-area">
                                <li>
                                    <a href="/" title="Home" data-ripple="">
                                        <i className="ti-search" />
                                    </a>
                                    <div className="searched">
                                        <form method="post" className="form-search">
                                            <input type="text" placeholder="Search Friend" />
                                            <button data-ripple="">
                                                <i className="ti-search" />
                                            </button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <div className="user-img">
                                <img src="images/resources/admin.jpg" alt="" />
                                <span className="status f-online" />
                                <div className="user-setting">
                                    <a href="/" title="">
                                        <span className="status f-online" />
                                        online
                                    </a>
                                    <a href="/" title="">
                                        <span className="status f-away" />
                                        away
                                    </a>
                                    <a href="/" title="">
                                        <span className="status f-off" />
                                        offline
                                    </a>
                                    <a href="/" title="">
                                        <i className="ti-user" /> view profile
                                    </a>
                                    <a href="/" title="">
                                        <i className="ti-pencil-alt" />
                                        edit profile
                                    </a>
                                    <a href="/" title="">
                                        <i className="ti-power-off" />
                                        log out
                                    </a>
                                </div>
                            </div>
                            <span className="ti-menu main-menu" data-ripple="" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};