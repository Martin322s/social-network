import { useEffect, useState } from "react";
import { Image } from "./Image";
import * as userService from "../../services/userService";
import { useParams } from "react-router-dom";

export function Photos() {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    useEffect(() => {
        userService.getUser(userId)
            .then(result => setUser(result));
    }, [userId]);

    return (
        <div className="col-lg-6">
            <div className="central-meta">
                {user.images?.length > 0
                    ?
                    <ul className="photos">
                        {user.images.map(x => <Image key={x} />)}
                    </ul>
                    :
                    <h2>There are no images posted yet.</h2>
                }
            </div>
        </div>
    );
};