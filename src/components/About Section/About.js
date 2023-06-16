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
                                <a
                                    href="#basic"
                                    className="nav-link active"
                                    data-toggle="tab"
                                >
                                    Basic info
                                </a>
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
                                        <a
                                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="3c4553494e515d55507c59515d5550125f5351"
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                        </a>
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