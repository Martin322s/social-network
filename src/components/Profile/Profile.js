import { Link, useRoutes } from "react-router-dom";
import { TimeLine } from "../TimeLine/TimeLine";
import { ProfileFriends } from "../Profile Friends/ProfileFriends";
import { Photos } from "../Photos/Photos";
import { About } from "../About Section/About";
import { Shortcuts } from "../Shortcuts/Shortcuts";

export function Profile() {
    const routes = useRoutes([
        { path: "/", element: <TimeLine /> },
        { path: "/timeline", element: <TimeLine /> },
        { path: "/friends", element: <ProfileFriends /> },
        { path: "/about", element: <About /> },
        { path: "/images", element: <Photos />}
    ])
    return (
        <div className="theme-layout">
            <section>
                <div className="feature-photo">
                    <figure>
                        <img src="/images/resources/timeline-1.jpg" alt="profile" />
                    </figure>
                    <div className="add-btn">
                        <span>1205 followers</span>
                        <Link to="/">
                            Add Friend
                        </Link>
                    </div>
                    <form className="edit-phto">
                        <i className="fa fa-camera-retro" />
                        <label className="fileContainer">
                            Edit Cover Photo
                            <input type="file" />
                        </label>
                    </form>
                    <div className="container-fluid">
                        <div className="row merged">
                            <div className="col-lg-2 col-sm-3">
                                <div className="user-avatar">
                                    <figure>
                                        <img src="/images/resources/user-avatar.jpg" alt="cover" />
                                        <form className="edit-phto">
                                            <i className="fa fa-camera-retro" />
                                            <label className="fileContainer">
                                                Edit Display Photo
                                                <input type="file" />
                                            </label>
                                        </form>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-10 col-sm-9">
                                <div className="timeline-info">
                                    <ul>
                                        <li className="admin-name">
                                            <h5>Janice Griffith</h5>
                                            <span>Group Admin</span>
                                        </li>
                                        <li>
                                            <Link to="/profile/timeline">
                                                time line
                                            </Link>
                                            <Link to="/profile/photos">
                                                Photos
                                            </Link>
                                            <Link to="/profile/friends">
                                                Friends
                                            </Link>
                                            <Link to="/profile/about">
                                                About
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="gap gray-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row" id="page-contents">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            <Shortcuts />
                                            <div className="widget">
                                                <h4 className="widget-title">Edit info</h4>
                                                <ul className="naves">
                                                    <li>
                                                        <i className="ti-info-alt" />
                                                        <Link to="edit-profile-basic.html">
                                                            Basic info
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="ti-lock" />
                                                        <Link to="edit-password.html">
                                                            change password
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                    {routes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};