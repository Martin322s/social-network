import { Link } from "react-router-dom";

export function TimeLine() {
    return (
        <div className="col-lg-6">
            <div className="loadMore">
                <div className="central-meta item">
                    <div className="new-postbox">
                        <figure>
                            <img src="/images/resources/admin2.jpg" alt="profile" />
                        </figure>
                        <div className="newpst-input">
                            <form method="post">
                                <textarea
                                    rows={2}
                                    placeholder="write something"
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
                                            <button type="submit">Publish</button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                                    <Link to="/" title="">
                                        www.sample.com
                                    </Link>
                                </div>
                                <div className="we-video-info">
                                    <ul>
                                        <li>
                                            <span className="views" data-toggle="tooltip" title="views">
                                                <i className="fa fa-eye" />
                                                <ins>1.2k</ins>
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
                                        <li className="social-media">
                                            <div className="menu">
                                                <div className="btn trigger">
                                                    <i className="fa fa-share-alt" />
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-html5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-facebook" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-google-plus" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-twitter" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-css3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-instagram" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-dribbble" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-pinterest" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="central-meta item">
                    <div className="user-post">
                        <div className="friend-info">
                            <figure>
                                <img src="images/resources/friend-avatar10.jpg" alt="" />
                            </figure>
                            <div className="friend-name">
                                <ins>
                                    <Link to="time-line.html" title="">
                                        Janice Griffith
                                    </Link>
                                </ins>
                                <span>published: june,2 2018 19:PM</span>
                            </div>
                            <div className="post-meta">
                                <img src="images/resources/user-post.jpg" alt="" />
                                <div className="we-video-info">
                                    <ul>
                                        <li>
                                            <span className="views" data-toggle="tooltip" title="views">
                                                <i className="fa fa-eye" />
                                                <ins>1.2k</ins>
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
                                        <li className="social-media">
                                            <div className="menu">
                                                <div className="btn trigger">
                                                    <i className="fa fa-share-alt" />
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-html5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-facebook" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-google-plus" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-twitter" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-css3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-instagram" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-dribbble" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-pinterest" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <p>
                                        Curabitur world's most beautiful car in{" "}
                                        <Link to="/" title="">
                                            #test drive booking !
                                        </Link>{" "}
                                        the most beatuiful car available in america and the saudia
                                        arabia, you can book your test drive by our official website
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
                                                <Link to="time-line.html" title="">
                                                    Jason borne
                                                </Link>
                                            </h5>
                                            <span>1 year ago</span>
                                            <Link className="we-reply" to="/" title="Reply">
                                                <i className="fa fa-reply" />
                                            </Link>
                                        </div>
                                        <p>
                                            we are working for the dance and sing songs. this car is very
                                            awesome for the youngster. please vote this car and like our
                                            post
                                        </p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="comet-avatar">
                                                <img src="images/resources/comet-2.jpg" alt="" />
                                            </div>
                                            <div className="we-comment">
                                                <div className="coment-head">
                                                    <h5>
                                                        <Link to="time-line.html" title="">
                                                            alexendra dadrio
                                                        </Link>
                                                    </h5>
                                                    <span>1 month ago</span>
                                                    <Link className="we-reply" to="/" title="Reply">
                                                        <i className="fa fa-reply" />
                                                    </Link>
                                                </div>
                                                <p>
                                                    yes, really very awesome car i see the features of this
                                                    car in the official website of{" "}
                                                    <Link to="/" title="">
                                                        #Mercedes-Benz
                                                    </Link>{" "}
                                                    and really impressed :-)
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comet-avatar">
                                                <img src="images/resources/comet-3.jpg" alt="" />
                                            </div>
                                            <div className="we-comment">
                                                <div className="coment-head">
                                                    <h5>
                                                        <Link to="time-line.html" title="">
                                                            Olivia
                                                        </Link>
                                                    </h5>
                                                    <span>16 days ago</span>
                                                    <Link className="we-reply" to="/" title="Reply">
                                                        <i className="fa fa-reply" />
                                                    </Link>
                                                </div>
                                                <p>
                                                    i like lexus cars, lexus cars are most beautiful with the
                                                    awesome features, but this car is really outstanding than
                                                    lexus
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <Link to="time-line.html" title="">
                                                    Donald Trump
                                                </Link>
                                            </h5>
                                            <span>1 week ago</span>
                                            <Link className="we-reply" to="/" title="Reply">
                                                <i className="fa fa-reply" />
                                            </Link>
                                        </div>
                                        <p>
                                            we are working for the dance and sing songs. this video is
                                            very awesome for the youngster. please vote this video and
                                            like our channel
                                            <i className="em em-smiley" />
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/" title="" className="showmore underline">
                                        more comments
                                    </Link>
                                </li>
                                <li className="post-comment">
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="post-comt-box">
                                        <form method="post">
                                            <textarea placeholder="Post your comment" defaultValue={""} />
                                            <div className="add-smiles">
                                                <span className="em em-expressionless" title="add icon" />
                                            </div>
                                            <div className="smiles-bunch">
                                                <i className="em em---1" />
                                                <i className="em em-smiley" />
                                                <i className="em em-anguished" />
                                                <i className="em em-laughing" />
                                                <i className="em em-angry" />
                                                <i className="em em-astonished" />
                                                <i className="em em-blush" />
                                                <i className="em em-disappointed" />
                                                <i className="em em-worried" />
                                                <i className="em em-kissing_heart" />
                                                <i className="em em-rage" />
                                                <i className="em em-stuck_out_tongue" />
                                            </div>
                                            <button type="submit" />
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="central-meta item">
                    <div className="user-post">
                        <div className="friend-info">
                            <figure>
                                <img src="images/resources/friend-avatar10.jpg" alt="" />
                            </figure>
                            <div className="friend-name">
                                <ins>
                                    <Link to="time-line.html" title="">
                                        Janice Griffith
                                    </Link>
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
                                    title="#"
                                />
                                <div className="we-video-info">
                                    <ul>
                                        <li>
                                            <span className="views" data-toggle="tooltip" title="views">
                                                <i className="fa fa-eye" />
                                                <ins>1.2k</ins>
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
                                        <li className="social-media">
                                            <div className="menu">
                                                <div className="btn trigger">
                                                    <i className="fa fa-share-alt" />
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-html5" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-facebook" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-google-plus" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-twitter" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-css3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-instagram" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-dribbble" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="rotater">
                                                    <div className="btn btn-icon">
                                                        <Link to="/" title="">
                                                            <i className="fa fa-pinterest" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <p>
                                        Lonely Cat Enjoying in Summer Curabitur{" "}
                                        <Link to="/" title="">
                                            #mypage
                                        </Link>{" "}
                                        ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                                        Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                                        semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                                        nunc,
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
                                                <Link to="time-line.html" title="">
                                                    Jason borne
                                                </Link>
                                            </h5>
                                            <span>1 year ago</span>
                                            <Link className="we-reply" to="/" title="Reply">
                                                <i className="fa fa-reply" />
                                            </Link>
                                        </div>
                                        <p>
                                            we are working for the dance and sing songs. this video is
                                            very awesome for the youngster. please vote this video and
                                            like our channel
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-2.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <Link to="time-line.html" title="">
                                                    Sophia
                                                </Link>
                                            </h5>
                                            <span>1 week ago</span>
                                            <Link className="we-reply" to="/" title="Reply">
                                                <i className="fa fa-reply" />
                                            </Link>
                                        </div>
                                        <p>
                                            we are working for the dance and sing songs. this video is
                                            very awesome for the youngster.
                                            <i className="em em-smiley" />
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/" title="" className="showmore underline">
                                        more comments
                                    </Link>
                                </li>
                                <li className="post-comment">
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-2.jpg" alt="" />
                                    </div>
                                    <div className="post-comt-box">
                                        <form method="post">
                                            <textarea placeholder="Post your comment" defaultValue={""} />
                                            <div className="add-smiles">
                                                <span className="em em-expressionless" title="add icon" />
                                            </div>
                                            <div className="smiles-bunch">
                                                <i className="em em---1" />
                                                <i className="em em-smiley" />
                                                <i className="em em-anguished" />
                                                <i className="em em-laughing" />
                                                <i className="em em-angry" />
                                                <i className="em em-astonished" />
                                                <i className="em em-blush" />
                                                <i className="em em-disappointed" />
                                                <i className="em em-worried" />
                                                <i className="em em-kissing_heart" />
                                                <i className="em em-rage" />
                                                <i className="em em-stuck_out_tongue" />
                                            </div>
                                            <button type="submit" />
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};