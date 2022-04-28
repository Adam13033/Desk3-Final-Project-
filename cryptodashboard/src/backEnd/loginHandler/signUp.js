export const signUp = async (username, email, password, setUser) => {
  try {
    const response = await fetch (`${process.env.LOGIN_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.error){
      throw new Error(data.err)
    }
    setUser(data.user);
      localStorage.setItem("myToken", data.token);
      } catch (error) {
        console.log(error);
    }
  };

export const tokenFetch = async(setUser) => {
  try {
    const response = await fetch(`${process.env.LOGIN_API}user`, {
    method: "GET",
    headers: { Authroization: `Bearer ${localStorage.getItem("myToken")}`},
    });
    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    console.log(error)
  }
};