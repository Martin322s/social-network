import { Link } from "react-router-dom";
import "./styles/header.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService";

export function Header() {
    const { user } = useContext(AuthContext);
    const [userData, setUser] = useState({});

    useEffect(() => {
        userService.getUser(user._id)
            .then(result => setUser(result));
    }, [user._id]);

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
                                    <img src={userData?.imageUrl} alt="profile" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};