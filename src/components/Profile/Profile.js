import { About } from "../About/About";
import { ChangePassword } from "../Change Password/ChangePassword";
import { EditProfile } from "../Edit Profile/EditProfile";
import { Photos } from "../Profile Photos/Photos";
import { TimeLine } from "../Time Line/TimeLine";
import { Friends } from "../Profile Friends/Friends";

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
                                            <a className="" href="time-line.html" title="" data-ripple="">
                                                time line
                                            </a>
                                            <a
                                                className=""
                                                href="timeline-photos.html"
                                                title=""
                                                data-ripple=""
                                            >
                                                Photos
                                            </a>
                                            <a
                                                className=""
                                                href="timeline-friends.html"
                                                title=""
                                                data-ripple=""
                                            >
                                                Friends
                                            </a>
                                            <a
                                                className="active"
                                                href="about.html"
                                                title=""
                                                data-ripple=""
                                            >
                                                about
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
                                                        <i className="ti-mouse-alt" />
                                                        <a title="" href="edit-work-eductation.html">
                                                            Education &amp; Work
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-heart" />
                                                        <a title="" href="edit-interest.html">
                                                            My interests
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="ti-settings" />
                                                        <a title="" href="edit-account-setting.html">
                                                            account setting
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
                                    <About />
                                    <TimeLine />
                                    <ChangePassword />
                                    <EditProfile />
                                    <Photos />
                                    <Friends />
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            <div className="widget">
                                                <h4 className="widget-title">Your page</h4>
                                                <div className="your-page">
                                                    <figure>
                                                        <a title="" href="/">
                                                            <img
                                                                alt=""
                                                                src="images/resources/friend-avatar9.jpg"
                                                            />
                                                        </a>
                                                    </figure>
                                                    <div className="page-meta">
                                                        <a className="underline" title="" href="/">
                                                            My page
                                                        </a>
                                                        <span>
                                                            <i className="ti-comment" />
                                                            Messages <em>9</em>
                                                        </span>
                                                        <span>
                                                            <i className="ti-bell" />
                                                            Notifications <em>2</em>
                                                        </span>
                                                    </div>
                                                    <div className="page-likes">
                                                        <ul className="nav nav-tabs likes-btn">
                                                            <li className="nav-item">
                                                                <a
                                                                    data-toggle="tab"
                                                                    href="#link1"
                                                                    className="active"
                                                                >
                                                                    likes
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a data-toggle="tab" href="#link2" className="">
                                                                    views
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        {/* Tab panes */}
                                                        <div className="tab-content">
                                                            <div id="link1" className="tab-pane active fade show">
                                                                <span>
                                                                    <i className="ti-heart" />
                                                                    884
                                                                </span>
                                                                <a title="weekly-likes" href="/">
                                                                    35 new likes this week
                                                                </a>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Sophie"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-6.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Maria"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-7.jpg"
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div id="link2" className="tab-pane fade">
                                                                <span>
                                                                    <i className="ti-eye" />
                                                                    445
                                                                </span>
                                                                <a title="weekly-likes" href="/">
                                                                    440 new views this week
                                                                </a>
                                                                <div className="users-thumb-list">
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Anderw"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-1.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="frank"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-2.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Sara"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-3.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Amy"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-4.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Ema"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-5.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Sophie"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-6.jpg"
                                                                        />
                                                                    </a>
                                                                    <a
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        href="/"
                                                                        data-original-title="Maria"
                                                                    >
                                                                        <img
                                                                            alt=""
                                                                            src="images/resources/userlist-7.jpg"
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                            {/* who's following */}
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