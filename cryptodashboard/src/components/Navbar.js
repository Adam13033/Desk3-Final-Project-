import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import Logo from "./images/Logo.jpg";
import WroteLogo from "./images/ARTIS.png";
import { VscAccount } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import "../components/styles/Navbar.css";
import { Link } from "react-router-dom";
import AboutUsModal from "./modals/aboutUs";
import ProfileModal from "./modals/Profile";

const Navbar = ({ handleOpen, handleClose, }) => {
const [aboutUs, setAboutUs] = useState(false);
const [profile, setProfile] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setAboutUs(!false)
  }

  const handleClickProfile = (event) => {
    event.preventDefault();
    setProfile(!false)
  }


  return (
    <div className="Navbar">
      <div className="navLeft">
        <Link to={`/`} className="link home">
          <img className="Logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navMiddle">
        <Link to={`/`} className="link home">
          <img className="WroteLogo" src={WroteLogo} alt="Artis" />
        </Link>
      </div>
      <div className="navRight">
        <Link to={`/mail`}>
          <button className="buttons">
            <GoMail />
          </button>
        </Link>
        {/* <Link to={`/info`}> */}
          <button className="buttons"  onClick={() => setAboutUs(!aboutUs)}>
            <BsInfoCircle onClick={() => setAboutUs(!aboutUs)}/>
            {aboutUs && <AboutUsModal handleClose={ handleClose } aboutUs={aboutUs} onClose={() => setAboutUs(!aboutUs)}/>}
          </button>
        {/* </Link> */}
        <Link to={`/favs`}>
          <button className="buttons">
            <IoStarOutline />
          </button>
        </Link>
        {/* <Link to={`/account`}> */}
          <button className="buttons"  onClick={() => setProfile(!profile)}>
            <VscAccount onClick={() => setProfile(!profile)}/>
            {profile && <ProfileModal handleClose={ handleClose } profile={profile} onClose={() => setProfile(!profile)}/>}
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
