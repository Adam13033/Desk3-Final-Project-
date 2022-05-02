import './App.css';
// import MainDiv from './components/MainDiv';
import { UserForm } from "./backEnd/loginHandler/userForm";
import { tokenFetch } from "./backEnd/loginHandler/signUp";
import { useState, useEffect } from "react";

const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    tokenFetch(setUser)
  }, [])

  
  return (
    <div className="UserForm">
      <div>
      {user ? <h1>{user}</h1> : <h1>Please enter Username</h1>}
      </div>
      <UserForm setUser = {setUser}/>
    </div>
    // <div className="App">
    //   <MainDiv />
    // </div>
  );
}

export default App;
