import { Friends } from "../Friends/Friends";
import { Shortcuts } from "../Shortcuts/Shortcuts";

export function Home() {
    return (
        <div className="gap gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row" id="page-contents">
                            <div className="col-lg-3">
                                <Shortcuts />
                                <Friends />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};