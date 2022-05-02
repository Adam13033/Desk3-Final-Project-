import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterBox">
        <h3>Support</h3>
        <a href="">Contact Us</a>
        <a href="">Help Centre</a>
        <a href="">FAQ</a>
      </div>
      <div className="FooterBox">
        <h3>Company</h3>
        <a href="">About</a>
        <a href="">Information</a>
        <a href="">Legal</a>
        <a href="">Privacy</a>
      </div>
      <div className="FooterBoxSocial">
      <h3>Social</h3>
        <a href="" className='icon'><FaFacebookSquare /></a>
        <a href="" className='icon'><FaTwitterSquare /></a>
        <a href="" className='icon'><FaLinkedin /></a>
        <a href="" className='icon'><FaGithubSquare /></a>
      </div>
    </div>
  );
};

export default Footer;