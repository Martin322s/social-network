const baseUrl = "http://localhost:3030/users";

export const registerUser = async (userData) => {
    const res = await fetch(`${baseUrl}/regitser`);
    const data = await res.json();
    return data;
}