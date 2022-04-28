import { useState} from "react";
import { signUp } from "./signUp";

export const UserForm = ({ setUser }) => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password, setUser);
    };

    return (
        <div>
            <from onSubmit = {submitHandler}>
                <input onChange = {(e) => setUserName(e.target.value)}
                placeholder = "Username" />
                <input onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email" />
                <input onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
                type = {show ? "text" : "password"}
                onMouseOver = {() => setShow (!show)}
                onMouseOut = {() => setShow (!show)}/>
                <button type = "submit">SignUp</button>
            </from>
        </div>
    )
}