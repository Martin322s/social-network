const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    try {
        if (Object.values(userData).some(x => x === "")) {
            throw new Error ({ message: "Invalid data provided!" });
        } else if (userData.password.length < 6) {
            throw new Error ({ message: "Password should be at least 6 characters long!" });
        } else {
            const res = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await res.json();

            if (res.status !== 200) {
                throw new Error('Unexpected error in the registration process!');
            }

            if (!data.accessToken) {
                throw new Error('Token not found in the response');
            }

            return data;
        }
    } catch (err) {
        return err;
    }
}