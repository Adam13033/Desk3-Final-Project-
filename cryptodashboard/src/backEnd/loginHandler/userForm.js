import { useState} from "react";
import { addUser, login } from "./fetchRequests";

export const UserForm = ({ setUser }) => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logBool, setLogBool] = useState(false);
    const [show, setShow] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!logBool) {
            addUser(username, email, password, setUser);
        }else{
            login(username, password);
        }
    };

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <input onChange = {(e) => setUserName(e.target.value)}
                placeholder = "Username" />
                <input onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email" />
                <input onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
                type = {show ? "text" : "password"}
                onMouseOver = {() => setShow (!show)}
                onMouseOut = {() => setShow (!show)}/>
                <button onClick = {() => setLogBool(!logBool)}>SignUp</button>
            </form>
        </div>
    )
}