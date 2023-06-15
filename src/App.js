import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/users/login" element={<Login />}/>
                <Route path="/users/register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;