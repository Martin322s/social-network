import "./styles/header.css";

export function Header() {
    return (
        <header>
            <nav>
                <div className="theme-layout">
                    <div className="topbar stick">
                        <div className="logo">
                            <a href="/">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="top-area">
                            <ul className="setting-area">
                                <li>
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
                                <a href="/profile">
                                    <img src="/images/resources/admin.jpg" alt="profile" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};