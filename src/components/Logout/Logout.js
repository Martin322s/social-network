import { Navigate } from "react-router-dom";
import * as userService from "../../services/userService";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Logout() {
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        userService.logoutUser(user.accessToken);
        userLogout();
    }, [user.accessToken, userLogout]);

    return <Navigate to="/" replace />
}