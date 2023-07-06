import { Link } from "react-router-dom";
import { ProfileFriend } from "./ProfileFriend";

export function ProfileFriends() {
    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="frnds">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="active" to="#frends" data-toggle="tab">
                                My Friends
                            </Link>{" "}
                            <span>55</span>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active fade show " id="frends">
                            <ul className="nearby-contct">
                                <ProfileFriend />
                            </ul>
                            <button className="btn-view btn-load-more" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};