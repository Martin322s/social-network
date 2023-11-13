import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from "../../services/userService";
import * as postService from "../../services/publicationsService";
import { initialValue, reducer } from "./data/data";

export function TimeLine() {
    const { user } = useContext(AuthContext);
    const [userData, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        postService.getAll().then(result => setPosts(result));
    }, []);
    
    const changeHandler = (ev) => {
        if (ev.target.type === "textarea") {
            dispatch(
                {
                    type: "SET_FIELD",
                    field: ev.target.name,
                    value: ev.target.value
                }
            )
        } else {
            const file = ev.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const dataURL = reader.result;
                    dispatch({ type: "SET_FIELD", field: "file", value: dataURL });
                }
                reader.readAsDataURL(file);
            }
        }
    };

    const submitHandler = (ev, data) => {
        ev.preventDefault();
        
        postService.create(user.accessToken, data, user._id)
            .then(() => navigate('/profile/timeline'));
    }

    useEffect(() => {
        userService.getUser(user?._id).then(result => setUser(result));
    }, [user._id]);

    console.log(posts);

    return (
        <div className="col-lg-6">
            <div className="loadMore">
                <div className="central-meta item">
                    <div className="new-postbox">
                        <figure>
                            <img src={userData?.imageUrl} alt="profile" />
                        </figure>
                        <div className="newpst-input">
                            <form onSubmit={(ev) => submitHandler(ev, state)}>
                                <textarea
                                    rows={2}
                                    name="opinion"
                                    placeholder="write something"
                                    value={state.opinion}
                                    onChange={(ev) => changeHandler(ev)}
                                />
                                <div className="attachments">
                                    <ul>
                                        <li>
                                            <i className="fa fa-image" />
                                            <label className="fileContainer" htmlFor="file">
                                                <input
                                                    type="file"
                                                    id="file"
                                                    name="file"
                                                    onChange={(ev) => changeHandler(ev)}
                                                />
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
                                <img src="/images/resources/friend-avatar10.jpg" alt="public" />
                            </figure>
                            <div className="friend-name">
                                <ins>
                                    <Link to="time-line.html">
                                        Janice Griffith
                                    </Link>
                                </ins>
                                <span>published: june,2 2018</span>
                            </div>
                            <div className="post-meta">
                                <img src="images/resources/user-post.jpg" alt="" />
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
                                        <img src="/images/resources/comet-1.jpg" alt="profile" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <Link to="/">
                                                    Jason borne
                                                </Link>
                                            </h5>
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
                                                <img src="/images/resources/comet-3.jpg" alt="" />
                                            </div>
                                            <div className="we-comment">
                                                <div className="coment-head">
                                                    <h5>
                                                        <Link to="time-line.html">
                                                            Olivia
                                                        </Link>
                                                    </h5>
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

                                <li className="post-comment">
                                    <div className="comet-avatar">
                                        <img src="images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="post-comt-box">
                                        <form>
                                            <textarea
                                                placeholder="Post your comment"
                                                defaultValue={""}
                                                name="comment"
                                            />
                                            <button type="submit">Post</button>
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
                                <img src="/images/resources/friend-avatar10.jpg" alt="profile" />
                            </figure>
                            <div className="friend-name">
                                <ins>
                                    <Link to="time-line.html" title="">
                                        Janice Griffith
                                    </Link>
                                </ins>
                                <span>published: june,2 2018</span>
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
                                <div className="description">
                                    <p>
                                        Lonely Cat Enjoying in Summer Curabitur #my page
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
                                                <Link to="/">
                                                    Jason borne
                                                </Link>
                                            </h5>
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
                                        <img src="/images/resources/comet-2.jpg" alt="profile" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <Link to="time-line.html">
                                                    Sophia
                                                </Link>
                                            </h5>
                                        </div>
                                        <p>
                                            we are working for the dance and sing songs. this video is
                                            very awesome for the youngster.
                                        </p>
                                    </div>
                                </li>
                                <li className="post-comment">
                                    <div className="comet-avatar">
                                        <img src="/images/resources/comet-2.jpg" alt="profile" />
                                    </div>
                                    <div className="post-comt-box">
                                        <form>
                                            <textarea
                                                placeholder="Post your comment"
                                                defaultValue={""}
                                                name="comment"
                                            />
                                            <button type="submit">Post</button>
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