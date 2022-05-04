import "../styles/Profile.css"
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import { profileImage } from "../images/profileImage.jpg";

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
                <div className = "title">
                    <h4>ProfilePage</h4>
                </div>
                    {/* <img className = "profilePic" src = {profileImage} alt = "yourImage"/> */}
                <div className = "info">
                    <h6>Username: demouser</h6>
                    <h6>Email: demo@email.com</h6>
                </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
  export default ProfileModal;