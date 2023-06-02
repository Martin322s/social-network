import { Contact } from "./components/Contact/Contact";
import { Error } from "./components/Error/Error";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Friends } from "./components/Profile Friends/Friends";
import { Profile } from "./components/Profile/Profile";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <>
            <Header />
            {/* <Home />
            <Login />
            <Register />
            <Error />
            <Contact />
            <Friends /> */}
            <Profile />
            <Footer />
        </>
    );
}

export default App;