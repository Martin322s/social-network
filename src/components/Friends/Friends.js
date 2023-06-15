import { Link } from "react-router-dom";

export function Friends() {
    return (
        <div className="col-lg-3">
            <aside className="sidebar static">
                <div className="widget">
                    <h4 className="widget-title">Your page</h4>
                    <div className="your-page">
                        <figure>
                            <Link to="/">
                                <img src="/images/resources/friend-avatar9.jpg" alt="logo" />
                            </Link>
                        </figure>
                        <div className="page-meta">
                            <Link to="/" className="underline">
                                My page
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="widget friend-list stick-widget">
                    <h4 className="widget-title">Last 8 recently added friends:</h4>
                    <div id="searchDir" />
                    <ul id="people-list" className="friendz-list">
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar.jpg" alt="friends" />
                                <span className="status f-online" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="/">bucky barnes</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="a0d7c9ced4c5d2d3cfccc4c5d2e0c7cdc1c9cc8ec3cfcd"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar2.jpg" alt="friends" />
                                <span className="status f-away" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">Sarah Loren</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="b4d6d5c6dad1c7f4d3d9d5ddd89ad7dbd9"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar3.jpg" alt="friends" />
                                <span className="status f-off" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">jason borne</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="1d777c6e72737f5d7a707c7471337e7270"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar4.jpg" alt="friends" />
                                <span className="status f-off" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">Cameron diaz</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="bed4dfcdd1d0dcfed9d3dfd7d290ddd1d3"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar5.jpg" alt="friends" />
                                <span className="status f-online" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">daniel warber</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="553f34263a3b37153238343c397b363a38"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar6.jpg" alt="friends" />
                                <span className="status f-away" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">andrew</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="5933382a36373b193e34383035773a3634"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar7.jpg" alt="friends" />
                                <span className="status f-off" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">amy watson</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="5933382a36373b193e34383035773a3634"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                        <li>
                            <figure>
                                <img src="/images/resources/friend-avatar5.jpg" alt="friends" />
                                <span className="status f-online" />
                            </figure>
                            <div className="friendz-meta">
                                <Link to="time-line.html">daniel warber</Link>
                                <i>
                                    <Link
                                        to="https://wpkixx.com/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="dbb1baa8b4b5b99bbcb6bab2b7f5b8b4b6"
                                    >
                                    </Link>
                                </i>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};