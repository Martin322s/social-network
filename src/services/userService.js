const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    try {
        if (Object.values(userData).some(x => x === "")) {
            // eslint-disable-next-line
            throw { message: "Invalid data provided!" };
        } else if (userData.password.length < 6) {
            // eslint-disable-next-line
            throw { message: "Password should be at least 6 characters long!" };
        } else {
            const res = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            return await res.json();
        }
    } catch (err) {
        return err;
    }
}

export const loginUser = async (userData) => {
    try {
        if (Object.values(userData).some(x => x === "")) {
            throw new Error({ message: "Invalid data provided!" });
        } else if (userData.password.length < 6) {
            throw new Error({ message: "Password should be at least 6 characters long!" });
        } else {
            const res = await fetch(`${baseUrl}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            return await res.json();
        }
    } catch (err) {
        return err;
    }
}

export const logoutUser = (token) => fetch(`${baseUrl}/logout`, {
    method: "GET",
    headers: {
        'X-Authorization': token
    }
});