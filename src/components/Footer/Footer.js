import "./styles/footer.css";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="widget">
                            <div className="foot-logo">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="/images/logo.png" alt="logo" />
                                    </Link>
                                </div>
                                <p>
                                    Embrace the Power of Connection on Winku: Where Friendships
                                    Flourish, Ideas Spark, and Communities Thrive!
                                </p>
                            </div>
                            <ul className="location">
                                <li>All rights reserved &copy; by Martin Sofroniev</li>
                                <li>
                                    <i className="ti-map-alt" />
                                    <p>3400, Montana, Bulgaria - Neofit Bozveli 40 Str.</p>
                                </li>
                                <li>
                                    <i className="ti-mobile" />
                                    <p>+359 87 704 0853</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Follow</h4>
                            </div>
                            <ul className="list-style">
                                <li>
                                    <i className="fa fa-facebook-square" />
                                    <Link to="https://www.facebook.com/profile.php?id=100009733451214">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <i className="fa fa-twitter-square" />
                                    <Link to="https://twitter.com/SofronievM41383">
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <i className="fa fa-instagram" />
                                    <Link to="https://www.instagram.com/martin13s18/">
                                        Instagram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="widget">
                            <div className="widget-title">
                                <h4>Navigate</h4>
                            </div>
                            <ul className="list-style">
                                <li>
                                    <Link to="/">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};