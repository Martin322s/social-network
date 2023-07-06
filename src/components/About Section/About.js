import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService";

export function About() {
    const { user } = useContext(AuthContext);
    const [userData, setUser] = useState({});

    useEffect(() => {
        userService.getUser(user._id)
            .then(result => setUser(result));
    }, [user._id]);

    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="about">
                    <div className="personal">
                        <h5 className="f-title">
                            <i className="ti-info-alt" /> Personal Info
                        </h5>
                        <p>
                            {userData.about}
                        </p>
                    </div>
                    <div className="d-flex flex-row mt-2">
                        <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                >
                                    Basic info
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="basic">
                                <ul className="basics">
                                    <li>
                                        <i className="ti-user" />
                                        {`${userData.firstName} ${userData.lastName}`}
                                    </li>
                                    <li>
                                        <i className="ti-map-alt" />
                                        lives in {`${userData.city}, ${userData.country}`}
                                    </li>
                                    <li>
                                        <i className="ti-mobile" />
                                        {userData.phone}
                                    </li>
                                    <li>
                                        <i className="ti-email" />
                                        {userData.email?.toLowerCase()}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}