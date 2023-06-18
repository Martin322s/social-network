import { Link } from "react-router-dom";
import "./styles/header.css";

export function Header() {
    return (
        <header>
            <nav>
                <div className="theme-layout">
                    <div className="topbar stick">
                        <div className="logo">
                            <Link to="/">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="top-area">
                            <ul className="setting-area">
                                <li>
                                    <div className="searched">
                                        <form className="form-search">
                                            <input 
                                                type="text"
                                                placeholder="Search"
                                                name="search"
                                            />
                                            <button data-ripple="">
                                                <i className="ti-search" />
                                            </button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <div className="user-img">
                                <Link to="/profile/timeline">
                                    <img src="/images/resources/admin.jpg" alt="profile" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};