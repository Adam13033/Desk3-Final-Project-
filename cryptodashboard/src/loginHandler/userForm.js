import { useState } from "react";
import { signUp } from "./signUp";
import { fetchLogin } from "./signUp";
import "../components/styles/UserForm.css";
import Logo from "../components/images/Logo.jpg"


export const UserForm = ({  setUser, user }) => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  
  
  const submitHandler = (event) => {
    event.preventDefault();
    signUp(username, email, password, setUser);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    fetchLogin(username, password, setUser);
    setUser(username)
  };

    return (
        <div className="LoginPage">
          <div className="left-div">
          <img className="LoginLogo" src={Logo} alt="Logo" />
          </div>
          <div className="LoginBox">
          <p className="LoginText">Login to view charts</p>
            <form onSubmit = {submitHandler}>
                <input className="LoginBoxes" onChange = {(e) => setUserName(e.target.value)}
                placeholder = "Username" />
                <input className="LoginBoxes" onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email" />
                <input className="LoginBoxes" onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
                type = {show ? "text" : "password"}
                onMouseOver = {() => setShow (!show)}
                onMouseOut = {() => setShow (!show)}/>
                <button className="SubmitBtn" type="submit">Submit</button>
            </form>
            <form onSubmit={loginHandler}>
              <input className="login" onChange={(event) => setUserName(event.target.value) && setUser(event.target.value)} placeholder="username" type="test" required />
              <input onChange={(event) => setPassword(event.target.value)} onSubmit={(event) => setUser(event.target.value)} placeholder="password" type="text" required />
              <button type="submit">Login</button>
            </form>
        </div>
      </div>
    )
}