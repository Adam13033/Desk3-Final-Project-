import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BsInfoCircle } from 'react-icons/bs';


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

export const AboutUsModal = ({ aboutUs, setAboutUs }) => {
    const classes = useStyles();
    return (
      <div>
   
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={aboutUs}
          onClose={!aboutUs}
          onClick={!aboutUs}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={aboutUs}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">DESK#3 HOW MADS THA HES HES</h2>
              <p id="transition-modal-description">Contact us at support@artiscrypto.co.uk</p>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
  export default AboutUsModal;