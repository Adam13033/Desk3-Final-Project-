import "../styles/Profile.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import profileImage from "../images/profileImage.jpg";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  export const ProfileModal = ({ profile, setProfile }) => {
    const classes = useStyles();

    const {user} = useContext(AppContext)

    return(
      <div>
  
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={profile}
          onClose={!profile}
          onClick={!profile}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={profile}>
            <div className={classes.paper}>
                <div className = "titleProfile">
                    <h1>PROFILE PAGE</h1>
                </div>
                    <img className = "profilePic" src = {profileImage} alt = "yourImage"/>
                <div>
                  <h2>Username: {user}</h2>
                  <h2>Email: {user}</h2>
                </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
  export default ProfileModal;