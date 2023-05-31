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
                                <li><a href="/">Login</a></li>
                                <li><a href="/">Sign In</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                            <ul className="setting-area">
                                <li>
                                    <a href="/" title="Home" data-ripple="">
                                        <i className="ti-search" />
                                    </a>
                                    <div className="searched">
                                        <form method="post" className="form-search">
                                            <input type="text" placeholder="Search" />
                                            <button data-ripple="">
                                                <i className="ti-search" />
                                            </button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <div className="user-img">
                                <a href="/">
                                    <img src="images/resources/admin.jpg" alt="profile" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};