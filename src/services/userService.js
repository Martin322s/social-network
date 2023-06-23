const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    try {
        if (Object.values(userData).some(x => x === "")) {
            throw {
                message: "Invalid data provided!"             
            }
        }

        const res = await fetch(`${baseUrl}/regitser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        return data;
    } catch (err) {

    }
}