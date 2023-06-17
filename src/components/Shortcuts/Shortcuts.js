import { Link } from "react-router-dom";

export function Shortcuts() {
    return (
        <aside className="sidebar static shortcuts">
            <div className="widget">
                <h4 className="widget-title">Shortcuts</h4>
                <ul className="naves">
                    <li>
                        <i className="ti-mouse-alt" />
                        <Link to="/">Home</Link>
                    </li>
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
                        <Link to="/profile/images">Images</Link>
                    </li>
                    <li>
                        <i className="ti-video-camera" />
                        <Link to="/profile/timeline">Timeline</Link>
                    </li>
                    <li>
                        <i className="fas fa-door-open" />
                        <Link to="/users/login">Login</Link>
                    </li>
                    <li>
                        <i className="fas fa-user-plus" />
                        <Link to="/users/register">Register</Link>
                    </li>
                    <li>
                        <i className="ti-power-off" />
                        <Link to="/users/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};