import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { Error } from "./components/Error Page/ErrorPage";
import { Profile } from "./components/Profile/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import { Logout } from "./components/Logout/Logout";

function App() {
    return (
        <>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/profile/*" element={<Profile />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/register" element={<Register />} />
                    <Route path="/users/logout" element={<Logout />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;