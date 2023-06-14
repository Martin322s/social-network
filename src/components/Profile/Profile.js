import { About } from "../About/About";
import { ChangePassword } from "../Change Password/ChangePassword";
import { EditProfile } from "../Edit Profile/EditProfile";
import { Photos } from "../Profile Photos/Photos";
import { TimeLine } from "../Time Line/TimeLine";
import { Friends } from "../Profile Friends/Friends";
import { Routes, Route } from "react-router-dom";

export function Profile() {
    return (
        <div className="theme-layout">
            <section>
                <div className="feature-photo">
                    <figure>
                        <img src="images/resources/timeline-1.jpg" alt="" />
                    </figure>
                    <div className="add-btn">
                        <span>1205 followers</span>
                        <a href="/" title="" data-ripple="">
                            Add Friend
                        </a>
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
                                        <img src="images/resources/user-avatar.jpg" alt="" />
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
                                            <a className="" href="/profile/timeline" title="" data-ripple="">
                                                time line
                                            </a>
                                            <a
                                                className=""
                                                href="/profile/photos"
                                                title=""
                                                data-ripple=""
                                            >
                                                Photos
                                            </a>
                                            <a
                                                className=""
                                                href="/profile/friends"
                                                title=""
                                                data-ripple=""
                                            >
                                                Friends
                                            </a>
                                            <a
                                                href="/profile/about"
                                                title=""
                                                data-ripple=""
                                            >
                                                About
                                            </a>
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
                                            <div className="widget">
                                                <h4 className="widget-title">Edit info</h4>
                                                <ul className="naves">
                                                    <li>
                                                        <i className="ti-info-alt" />
                                                        <a title="" href="edit-profile-basic.html">
                                                            Basic info
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-lock" />
                                                        <a title="" href="edit-password.html">
                                                            change password
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                    {/* 
                                    <TimeLine />
                                    <Friends />
                                    <ChangePassword />
                                    <EditProfile />
                                    <About />
                                    <Photos /> */}
                                    <Routes>
                                        <Route path="timeline" element={<TimeLine />} />
                                        <Route path="about" element={<About />} />
                                        <Route path="photos" element={<Photos />} />
                                        <Route path="friends" element={<Friends />} />
                                    </Routes>
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            <div className="widget stick-widget">
                                                <h4 className="widget-title">Who's follownig</h4>
                                                <ul className="followers">
                                                    <li>
                                                        <figure>
                                                            <img
                                                                src="images/resources/friend-avatar2.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Kelly Bill
                                                                </a>
                                                            </h4>
                                                            <a href="/" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img
                                                                src="images/resources/friend-avatar4.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Issabel
                                                                </a>
                                                            </h4>
                                                            <a href="/" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img
                                                                src="images/resources/friend-avatar6.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Andrew
                                                                </a>
                                                            </h4>
                                                            <a href="/" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img
                                                                src="images/resources/friend-avatar8.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Sophia
                                                                </a>
                                                            </h4>
                                                            <a href="/" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img
                                                                src="images/resources/friend-avatar3.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a href="time-line.html" title="">
                                                                    Allen
                                                                </a>
                                                            </h4>
                                                            <a href="/" title="" className="underline">
                                                                Add Friend
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};