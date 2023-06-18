import { Link } from "react-router-dom";

export function About() {
    return (
        <div className="col-lg-6">
            <div className="central-meta">
                <div className="about">
                    <div className="personal">
                        <h5 className="f-title">
                            <i className="ti-info-alt" /> Personal Info
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                    <div className="d-flex flex-row mt-2">
                        <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                >
                                    Basic info
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="basic">
                                <ul className="basics">
                                    <li>
                                        <i className="ti-user" />
                                        sarah grey
                                    </li>
                                    <li>
                                        <i className="ti-map-alt" />
                                        live in Dubai
                                    </li>
                                    <li>
                                        <i className="ti-mobile" />
                                        +1-234-345675
                                    </li>
                                    <li>
                                        <i className="ti-email" />
                                        Lorem ipsum dolor sit amet.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}