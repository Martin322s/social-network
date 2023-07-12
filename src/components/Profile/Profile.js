import { Link, useRoutes } from "react-router-dom";
import { TimeLine } from "../TimeLine/TimeLine";
import { ProfileFriends } from "../Profile Friends/ProfileFriends";
import { Photos } from "../Photos/Photos";
import { About } from "../About Section/About";
import { Shortcuts } from "../Shortcuts/Shortcuts";
import { ChangePassword } from "../Change Password/ChangePassword";
import { EditProfile } from "../Edit Profile/EditProfile";
import { Messages } from "../Messages/Messages";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService";

export function Profile() {
    const { user } = useContext(AuthContext);
    const [userData, setUser] = useState({});

    const [photo, setPhoto] = useState({
        baseUrl: '/images/profile.jpg',
        encodeURI: '',
        decodeURI: ''
    });

    useEffect(() => {
        userService.getUser(user._id)
            .then(result => {
                setPhoto(state => ({
                    ...state,
                    decodeURI: result.imageUrl
                }));
                setUser(result);
            });
    }, [user._id, photo.encodeURI, photo.decodeURI, photo]);

    const routes = useRoutes([
        { path: "/", element: <TimeLine /> },
        { path: "/timeline", element: <TimeLine /> },
        { path: "/friends", element: <ProfileFriends /> },
        { path: "/about", element: <About /> },
        { path: "/images/:userId", element: <Photos /> },
        { path: "/password", element: <ChangePassword /> },
        { path: "/edit", element: <EditProfile /> },
        { path: "/messages-inbox", element: <Messages /> }
    ]);

    const changeHandler = (ev) => {
        const file = ev.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const dataURL = reader.result;
                userService.updateUserPhoto(user._id, user.accessToken, { imageUrl: dataURL })
                    .then(result => setPhoto(state => ({
                        ...state,
                        decodeURI: result.imageUrl
                    })));
                setPhoto(state => ({
                    ...state,
                    encodeURI: dataURL
                }));
            };
            reader.readAsDataURL(file);
        }
        setPhoto(state => ({
            ...state,
            baseUrl: '/image/profile.jpg'
        }));
    };

    return (
        <div className="theme-layout">
            <section>
                <div className="feature-photo">
                    <figure>
                        <img src="/images/resources/timeline-1.jpg" alt="profile" />
                    </figure>
                    <div className="add-btn">
                        <span>{userData.friends.length} followers</span>
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
                                        <img src={photo.decodeURI || photo.baseUrl} alt="cover" />
                                        <form
                                            className="edit-phto"
                                        >
                                            <i className="fa fa-camera-retro" />
                                            <label className="fileContainer">
                                                Edit Display Photo
                                                <input
                                                    type="file"
                                                    onChange={(ev) => changeHandler(ev)}
                                                />
                                            </label>
                                        </form>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-10 col-sm-9">
                                <div className="timeline-info">
                                    <ul>
                                        <li className="admin-name">
                                            <h5>{`${userData.firstName} ${userData.lastName}`}</h5>
                                            <span>{userData.email}</span>
                                        </li>
                                        <li>
                                            <Link to="/profile/timeline">
                                                time line
                                            </Link>
                                            <Link to={`/profile/images/${user._id}`}>
                                                Photos
                                            </Link>
                                            <Link to="/profile/friends">
                                                Friends
                                            </Link>
                                            <Link to="/profile/messages-inbox">
                                                Messages
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
                                                        <Link to="/profile/about">
                                                            Basic info
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="ti-lock" />
                                                        <Link to="/profile/password">
                                                            change password
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="ti-info-alt" />
                                                        <Link to="/profile/edit">
                                                            Edit profile
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