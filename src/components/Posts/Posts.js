export function Posts() {
    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="new-postbox">
                    <figure>
                        <img src="images/resources/admin2.jpg" alt="" />
                    </figure>
                    <div className="newpst-input">
                        <form method="post">
                            <textarea rows={2} 
                                placeholder="Tell us, what's you think?" 
                                defaultValue={""} 
                            />
                            <div className="attachments">
                                <ul>
                                    <li>
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                            <input type="file" />
                                        </label>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera" />
                                        <label className="fileContainer">
                                            <input type="file" />
                                        </label>
                                    </li>
                                    <li>
                                        <button type="submit">Post</button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="loadMore">
                <div className="central-meta item">
                    <div className="user-post">
                        <div className="friend-info">
                            <figure>
                                <img src="images/resources/friend-avatar10.jpg" alt="" />
                            </figure>
                            <div className="friend-name">
                                <ins>
                                    <a href="time-line.html" title="">
                                        Janice Griffith
                                    </a>
                                </ins>
                                <span>published: june,2 2018 19:PM</span>
                            </div>
                            <div className="post-meta">
                                <img src="images/resources/user-post.jpg" alt="" />
                                <div className="we-video-info">
                                    <ul>
                                        <li>
                                            <span 
                                                className="like" 
                                                data-toggle="tooltip" 
                                                title="like"
                                            >
                                                <i className="ti-heart" />
                                                <ins>2.2k</ins>
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="comment"
                                                data-toggle="tooltip"
                                                title="Comments"
                                            >
                                                <i className="fa fa-comments-o" />
                                                <ins>52</ins>
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
                                <div className="description">
                                    <p>
                                        World's most beautiful car in Curabitur{" "}
                                        <a href="#" title="">
                                            #test drive booking!
                                        </a>{" "}
                                        the most beatuiful car available in america and the saudia
                                        arabia, you can book your test drive by our official website.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coment-area">
                            <ul className="we-comet">
                                <li>
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <a href="time-line.html" title="">
                                                    Jason borne
                                                </a>
                                            </h5>
                                        </div>
                                        <p>
                                            We are working for the dance and sing songs. this car is 
                                            very awesome for the youngster. please vote this car 
                                            and like our post.
                                        </p>
                                    </div>
                                    <ul>
                                        <li className="post-comment">
                                            <div className="comet-avatar">
                                                <img src="images/resources/comet-1.jpg" alt="" />
                                            </div>
                                            <div className="post-comt-box">
                                                <form method="post">
                                                    <textarea
                                                        placeholder="Post your comment"
                                                        defaultValue={""}
                                                    />
                                                    <button type="submit">Send</button>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="central-meta item">
                    <div className="user-post">
                        <div className="friend-info">
                            <figure>
                                <img src="images/resources/nearly1.jpg" alt="" />
                            </figure>
                            <div className="friend-name">
                                <ins>
                                    <a href="time-line.html" title="">
                                        Sara Grey
                                    </a>
                                </ins>
                                <span>published: june,2 2018 19:PM</span>
                            </div>
                            <div className="post-meta">
                                <iframe
                                    src="https://player.vimeo.com/video/15232052"
                                    height={315}
                                    webkitallowfullscreen=""
                                    mozallowfullscreen=""
                                    allowFullScreen=""
                                />
                                <div className="we-video-info">
                                    <ul>
                                        <li>
                                            <span 
                                                className="like" 
                                                data-toggle="tooltip" 
                                                title="like"
                                            >
                                                <i className="ti-heart" />
                                                <ins>2.2k</ins>
                                            </span>
                                        </li>
                                        <li>
                                            <span
                                                className="comment"
                                                data-toggle="tooltip"
                                                title="Comments"
                                            >
                                                <i className="fa fa-comments-o" />
                                                <ins>52</ins>
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
                                <div className="description">
                                    <p>
                                        Lonely Cat Enjoying in Summer Curabitur{" "}
                                        <a href="#" title="">
                                            #mypage
                                        </a>{" "}
                                        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                                        semper libero, sit amet adipiscing sem neque sed ipsum. 
                                        Nam quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="coment-area">
                            <ul className="we-comet">
                                <li>
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <a href="time-line.html" title="">
                                                    Jason borne
                                                </a>
                                            </h5>
                                        </div>
                                        <p>
                                            We are working for the dance and sing songs. this car is 
                                            very awesome for the youngster. please vote this car 
                                            and like our post.
                                        </p>
                                    </div>
                                    <ul>
                                        <li className="post-comment">
                                            <div className="comet-avatar">
                                                <img src="images/resources/comet-1.jpg" alt="" />
                                            </div>
                                            <div className="post-comt-box">
                                                <form method="post">
                                                    <textarea
                                                        placeholder="Post your comment"
                                                        defaultValue={""}
                                                    />
                                                    <button type="submit">Send</button>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};