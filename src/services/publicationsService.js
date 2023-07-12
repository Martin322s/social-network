const baseUrl = "http://localhost:3030/publications";

export const create = async (token, data) => {
    const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    return res.json();
};