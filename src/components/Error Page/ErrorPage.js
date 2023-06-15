import { Link } from "react-router-dom";

export function Error() {
    return (
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-page">
                            <div className="error-meta">
                                <h1>whoops!</h1>
                                <span>we couldn't find that page </span>
                                <Link to="/" replace>
                                    Back to Home page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};