import { Link } from "react-router-dom";

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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Timeline</Link></li>
                                <li><Link to="/users/login">Login</Link></li>
                                <li><Link to="/users/register">Sign In</Link></li>
                                <li><Link to="/users/logout">Logout</Link></li>
                            </ul>
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