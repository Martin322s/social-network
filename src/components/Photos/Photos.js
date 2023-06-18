import { Link } from "react-router-dom";

export function Photos() {
    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <ul className="photos">
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
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-33.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo3.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-44.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo4.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-55.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo5.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-66.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo6.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-77.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo7.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-88.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo8.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-99.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo12.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-101.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo10.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-101.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo11.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-22.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo1.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-33.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo9.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-99.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo12.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-66.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo6.jpg" alt="profile" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="strip"
                            to="images/resources/photo-66.jpg"
                            data-strip-group="mygroup"
                            data-strip-group-options="loop: false"
                        >
                            <img src="/images/resources/photo13.jpg" alt="profile" />
                        </Link>
                    </li>
                </ul>
                <div className="lodmore">
                    <button className="btn-view btn-load-more" />
                </div>
            </div>
        </div>
    );
};