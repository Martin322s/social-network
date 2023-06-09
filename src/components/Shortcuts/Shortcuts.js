import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
export function Shortcuts() {
    const { user } = useContext(AuthContext);

    return (
        <aside className="sidebar static shortcuts">
            <div className="widget">
                <h4 className="widget-title">Shortcuts</h4>
                <ul className="naves">
                    <li>
                        <i className="ti-mouse-alt" />
                        <Link to="/">Home</Link>
                    </li>
                    {user.accessToken ?
                        <>
                            <li>
                                <i className="ti-user" />
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <i className="ti-user" />
                                <Link to="/profile/messages-inbox">Messages</Link>
                            </li>
                            <li>
                                <i className="ti-image" />
                                <Link to="/profile/images/:userId">Images</Link>
                            </li>
                            <li>
                                <i className="ti-power-off" />
                                <Link to="/users/logout">Logout</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <i className="ti-video-camera" />
                                <Link to="/profile/timeline">Timeline</Link>
                            </li>
                            <li>
                                <i className="ti-video-camera" />
                                <Link to="/contacts">Contacts</Link>
                            </li>
                            <li>
                                <i className="fas fa-door-open" />
                                <Link to="/users/login">Login</Link>
                            </li>
                            <li>
                                <i className="fas fa-user-plus" />
                                <Link to="/users/register">Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </aside>
    );
};