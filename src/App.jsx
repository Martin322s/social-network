import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Rightbar from "./components/Rightbar/Rightbar";
import Profile from "./components/Profile/Profile"
import RecentChats from "./components/Recent Chats/RescentChats";
import PhoneCalls from "./components/PhoneCalls/PhoneCalls";
import TabPanel from "./components/TabPanel/TabPanel";
import ChatBody from "./components/Chat Body/ChatBody";
import InviteNewFriends from "./components/Invite New Friends/InviteNewFriends";
import Options from "./components/Options/Options";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPassword from "./components/Reset Password/ResetPassword";
import Settings from "./components/Settings/Settings";

function App() {

    return (
        <div id="layout" className="theme-cyan">


            {/* <Login /> */}
            {/* <Register /> */}
            {/* <ResetPassword /> */}
            <Navigation />
            <Rightbar />
            <ChatBody />
            <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
                <div className="tab-content">
                    <Routes>
                        <Route path="/" element={<RecentChats />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                    {/* 
                    <RecentChats />
                    <PhoneCalls />
                    <TabPanel />
                    <InviteNewFriends />
                    <Options />
                     */}
                    
                </div>
            </div>
            {/* <Settings /> */}
        </div>
    );
}

export default App;
