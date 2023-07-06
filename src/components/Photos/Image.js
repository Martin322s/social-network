import { Link } from "react-router-dom";

export function Image() {
    return (
        <li>
            <Link
                className="strip"
                to="images/resources/photo-22.jpg"
                data-strip-group="mygroup"
                data-strip-group-options="loop: false"
            >
                <img src="/images/resources/photo2.jpg" alt="profile" />
            </Link>
        </li>
    );
}