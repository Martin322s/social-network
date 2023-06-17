import { useRoutes } from "react-router-dom";
import { Friends } from "../Friends/Friends";
import { Shortcuts } from "../Shortcuts/Shortcuts";
import { TimeLine } from "../TimeLine/TimeLine";
import { Contacts } from "../Contacts/Contacts";

export function Home() {
    const routes = useRoutes([
        { path: "/contacts", element: <Contacts /> },
        { path: "/", element: <TimeLine /> }
    ])
    return (
        <div className="gap gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row" id="page-contents">
                            <section className="sidebars">
                                <Shortcuts />
                                {routes}
                                <Friends />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};