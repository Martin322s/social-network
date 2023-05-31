import { Footer } from "./components/Footer/Footer";
import { Friends } from "./components/Friends Sidebar/Friends";
import { Header } from "./components/Header/Header";
import { Shortcuts } from "./components/Shortcuts/Shortcuts";

function App() {
    return (
        <>
            <Header />
            <div class="gap gray-bg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row" id="page-contents">
                                <div class="col-lg-3">
                                    <Shortcuts />
                                </div>
                                <Friends />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;