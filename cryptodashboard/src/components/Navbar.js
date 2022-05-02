import React from "react";
import { IoStar } from "react-icons/io5";
import Logo from "./images/Logo.jpg";
import WroteLogo from "./images/AEGIS.png";
import { VscAccount } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import { BsInfoCircleFill } from "react-icons/bs";
import "../components/styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navLeft">
        <Link to={`/`} className="link home">
          <img className="Logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navMiddle">
        <Link to={`/`} className="link home">
          <img className="WroteLogo" src={WroteLogo} alt="Aegis" />
        </Link>
      </div>
      <div className="navRight">
        <Link to={`/info`}>
          <button className="buttons">
            <BsInfoCircleFill />
          </button>
        </Link>
        <Link to={`/mail`}>
          <button className="buttons">
            <GoMail />
          </button>
        </Link>
        <Link to={`/account`}>
          <button className="buttons">
            <VscAccount />
          </button>
        </Link>
        <Link to={`/favs`}>
          <button className="buttons">
            <IoStar />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
