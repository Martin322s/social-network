import { Link } from "react-router-dom";
import { ProfileFriend } from "./ProfileFriend";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService";

export function ProfileFriends() {
    const [userData, setUser] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        userService.getUser(user._id)
            .then(result => setUser(result));
    }, [user._id]);

    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="frnds">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="active" to="#frends" data-toggle="tab">
                                My Friends
                            </Link>{" "}
                            <span>{userData.friends?.length}</span>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active fade show " id="frends">
                            {userData.friends?.length > 0
                                ?
                                <ul className="nearby-contct">
                                    {userData.friends.map(x => <ProfileFriend key={x} />)}
                                </ul>
                                :
                                <h3>There are not added friends yet.</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};