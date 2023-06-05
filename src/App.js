import { Routes, Route } from "react-router-dom";
import { Contact } from "./components/Contact/Contact";
import { Error } from "./components/Error/Error";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/register" element={<Register />} />
                <Route path="/users/logout" element={<Home />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;