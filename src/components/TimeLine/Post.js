export function Post() {
    return (
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src="/images/resources/friend-avatar10.jpg" alt="profile" />
                    </figure>
                    <div className="friend-name">
                        <ins>
                            <Link to="time-line.html">
                                Janice Griffith
                            </Link>
                        </ins>
                        <span>published: june,2 2018</span>
                    </div>
                    <div className="description">
                        <p>
                            World's most beautiful car in Curabitur #test drive booking!
                            the most beatuiful car available in america and the saudia arabia,
                            you can book your test drive by our official website
                        </p>
                    </div>
                    <div className="post-meta">
                        <div className="linked-image align-left">
                            <Link to="/" title="">
                                <img src="/images/resources/page1.jpg" alt="public" />
                            </Link>
                        </div>
                        <div className="detail">
                            <span>Love Maid - ChillGroves</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua...{" "}
                            </p>
                        </div>
                        <div className="we-video-info">
                            <ul>
                                <li>
                                    <span
                                        className="comment"
                                        data-toggle="tooltip"
                                        title="Comments"
                                    >
                                        <i className="fas fa-comments" />
                                        <ins>52</ins>
                                    </span>
                                </li>
                                <li>
                                    <span className="like" data-toggle="tooltip" title="like">
                                        <i className="ti-heart" />
                                        <ins>2.2k</ins>
                                    </span>
                                </li>
                                <li>
                                    <span
                                        className="dislike"
                                        data-toggle="tooltip"
                                        title="dislike"
                                    >
                                        <i className="ti-heart-broken" />
                                        <ins>200</ins>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}