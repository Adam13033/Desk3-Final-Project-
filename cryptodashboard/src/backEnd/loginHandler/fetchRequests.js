export const addUser = async(username, email, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        const data = await response.json();
        setUser(data);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error)
    }
}

export const login = async(username, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}`},
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const data = await response.json();
        setUser(data);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error)
    }
}