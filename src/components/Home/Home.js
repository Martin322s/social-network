import { useRoutes } from "react-router-dom";
import { Friends } from "../Friends/Friends";
import { Shortcuts } from "../Shortcuts/Shortcuts";
import { TimeLine } from "../TimeLine/TimeLine";

export function Home() {
    const routes = useRoutes()
    return (
        <div className="gap gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row" id="page-contents">
                            <section className="sidebars">
                                <Shortcuts />
                                <TimeLine />
                                <Friends />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};