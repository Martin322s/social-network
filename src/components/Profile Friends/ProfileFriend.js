import { Link } from "react-router-dom";

export function ProfileFriend() {
    return (
        <li>
            <div className="nearly-pepls">
                <figure>
                    <Link to="time-line.html">
                        <img src="/images/resources/friend-avatar9.jpg" alt="" />
                    </Link>
                </figure>
                <div className="pepl-info">
                    <h4>
                        <Link to="time-line.html">
                            jhon kates
                        </Link>
                    </h4>
                    <span>ftv model</span>
                    <Link
                        to="/"

                        className="add-butn more-action"
                        data-ripple=""
                    >
                        unfriend
                    </Link>
                    <Link to="/" className="add-butn" data-ripple="">
                        add friend
                    </Link>
                </div>
            </div>
        </li>
    );
}