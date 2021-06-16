import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
type ModalProps = {
  open: any;
  handleClose: any;
  handleDelegateSubmit:any
};
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 35;
  const left = 45;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    ['@media (max-width:414px)']: {
      top:'30%',
      left:'35%'
    },
  };
}
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "16px",
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    ['@media (max-width:414px)']: {
      width:300
    },
  },
  heading: {
    padding: "0px 20px 0px 20px",
    color: "#1049F0",
    fontSize: "18px",
  },
  icon: {
    border: "1px dotted #0E47EF",
    textAlign: "center",
    borderRadius: "100%",
    padding: "25px",
    backgroundImage: "linear-gradient(to top, #ffffff, #FFF6F8)",
  },
  plr: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  arrow: {
    marginTop: "50px",
    color: "#CCCCCC",
    cursor: "pointer",
  },
  inputBox:{
      borderRadius:'5px',
      width:'50%',
      padding:'10px',
      height:'20%',
      border:'1px solid #CCCCCC'
  },
  delegateButton:{
      width:'100%',
    padding:'12px',
    color:'#ffffff',
    borderRadius:'16px',
    backgroundImage: "linear-gradient(to bottom, #0E47EF, #6288F7)",
  },
  closeButton:{
    position:'absolute',
    right:'20px',
    color:'#CCCCCC',
    fontWeight:400,
    cursor:'pointer'

  }
  
}));
function DelegateVoting({ open, handleClose,handleDelegateSubmit }: ModalProps) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [delegationAddr, setDelegationAddr] = React.useState('');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.heading}>
             
              <h3 className={classes.heading}>Delegate Voting 
              <span style={{cursor:'pointer'}}className={classes.closeButton}onClick={handleClose}>x</span>
              </h3>
              
              
           
          </Grid>
        </Grid>

        <div style={{ borderTop: "1px solid #CCCCCC" }}></div>
        <Grid container spacing={3} className={classes.plr}>
          <Grid item xs={12}>
            <p>
              <strong>Select an Address</strong>
            </p>
            <p>
              If you know the address you wish to delegate to, enter it below.
              if not, you can view the delegate leaderboard to find a political
              party you wish to support.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              <strong>Delegate Address</strong>
            </p>
            <p>
            <input className={classes.inputBox}placeholder='Enter a 0x address' value={delegationAddr} onChange={(e)=>setDelegationAddr(e.target.value)}/>
            </p>
            <p>
            <Button className={classes.delegateButton} onClick={()=>handleDelegateSubmit(delegationAddr)}>Delegate Votes</Button>
            </p>
          
          </Grid>

        </Grid>
      </div>
    </Modal>
  );
}

export default DelegateVoting;
