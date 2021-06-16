import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";

import ChooseVoting from "./ChooseVoting";
import WalletButton from "../../components/WalletButton/WalletButton";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import DelegateVoting from "./DelegateVoting";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px 70px 0 70px",
      backgroundImage: "linear-gradient(to right, #ECF8FF, #FFF6F8)",
      //   backgroundImage: "linear-gradient(to left, #,#FFFFFF)"
      textAlign: "left",
    },
    heading: {
      fontFamily: "Space Grotesk",
      fontSize: "48px",
      fontsSyle: "normal",
      fontWeight: 700,
      margin: "20px",
      letterSpacing: "-1px",
      textAlign: "left",
      color: "#0E47EF",
    },
    connectButton: {
      marginTop: "24px",
    },
    votingContainer: {
      borderRadius: "16px",
      padding: "15px 30px 15px 30px",
      
      

      backgroundImage: "linear-gradient(to  right, #0E47EF, #6288F7)",
    },
    votingNumbers: {
      color: "#ffff",
      fontSize: "48px",
      fontWeight: 700,
      ['@media (max-width:619px)']: {
        fontSize:'24px !important'
      },
      ['@media (max-width:420px)']: {
        fontSize:'18px !important'
      },
    },
    subHeading: {
      color: "#ffff",
      fontWeight: 400,
      fontSize: "18px",
      ['@media (max-width:420px)']: {
        fontSize:'15px !important'
      },
    },
    subHeading2: {
      color: "#121212",
      fontWeight: 400,
      fontSize: "18px",
    },
    tableHead: {
      backgroundImage: "linear-gradient(to top, #ffffff, #FFF6F8)",
      padding: "20px",
      borderRadius: "15px 15px 0px 0px",
      // borderRadiusTopRight:"10px !important",
      color: "#0E47EF",
      fontSize: "24px",
      fontWeight: 800,
    },
    tableBottom: {
      color: "#121212",
      fontWeight: 400,
      fontSize: "18px",
      padding: "20px",
      borderRadius: "0px 0px 15px 15px",
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#0E47EF",
        color: "#ffff",
        
      },
    },
    votingWalletContainer: {
      margintTop: "50px !important",
    },
    votingBox: {
      borderRadius: "0px",
      textAlign: "center",
      padding: "40px",
      color: "#0E47EF",
    },
    connectedBox: {
      borderRadius: "0px",
      textAlign: "left",
      padding: "40px",
      color: "#0E47EF",
    },
    startButton: {
      width: "100%",
      padding: "12px",
      borderRadius: "16px",
      backgroundImage: "linear-gradient(to bottom, #0E47EF, #6288F7)",
    },
    changeButton:{
      textAlign: "right",
      fontSize: "18px",
      color: "#999999",
      cursor:'pointer'
    }
  })
);

// function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
//   return <ListItem button component="a" {...props} />;
// }

function createData(
  Rank: string,
  Votes: string,
  VoteWeight: string,
  ProposalsVoted: string
  
) {
  return { Rank, Votes, VoteWeight, ProposalsVoted,  };
}

const rows = [
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),
  createData("Gauntlet", '126,136.4747', '4.92%', '32'),

];

function Governance({}) {
  const classes = useStyles();
  // const matches = useMediaQuery(
  //   ({
  //     minWidth: 600,
  //   }),
  // );

  const [arrayLength, setArrayLength] = React.useState(5);
  const [connected, setConnected] = React.useState(false);
  const [bitBalance, setBitBalance] = React.useState("0.00000000");
  const [open, setOpen] = React.useState(false);
  const [openDelegate, setOpenDelegate] = React.useState(false);
  const [manualVoting, setManualVoting] = React.useState(false);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal, contracts, accounts] =
    useWeb3Modal();
  console.log(provider);

  const handleViewMore = () => {
    if (arrayLength == 5) {
      setArrayLength(30);
    } else {
      setArrayLength(5);
    }
  };
  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelegate = () => {
    setOpen(false);
    setOpenDelegate(false);
  };
  const handleDelegateVoting = () => {
    setOpen(false);
    setOpenDelegate(true);
    setManualVoting(false)
  };
  const handleManualVoting = () => {
    setManualVoting(true);
    setOpen(false);
  };
  const handleDelegateSubmit = async (address: any) => {
    console.log(address);
    const result = await contracts.methods
      .delegate(address)
      .send({ from: accounts, gas: 300000 });
    console.log(result);
  };

  React.useEffect(() => {
    if (provider != undefined) {
      setConnected(true);
    }
  }, [provider]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={9}>
          <Typography className={classes.heading} variant="h1" component="h2">
            Governance Overview
          </Typography>
        </Grid>
        <Grid item md={3} className={classes.connectButton}>
          <WalletButton
            provider={provider}
            loadWeb3Modal={loadWeb3Modal}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            accounts={accounts}
          />
        </Grid>
      </Grid>

      {/* voting number */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.votingContainer}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.votingNumbers}
            >
              2,564,150
            </Typography>
            <p className={classes.subHeading}>Votes Delegated</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.votingContainer}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.votingNumbers}
            >
              2,564,150
            </Typography>
            <p className={classes.subHeading}>Votes Delegated</p>
          </div>
        </Grid>
      </Grid>

      {/* address by voting weight */}
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item xs={12}>
          {/* <div className={classes.tableHead}>Addresses by Voting Weight</div> */}
          <Paper className={classes.tableHead}>
            Addresses by Voting Weight
          </Paper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align="right">Votes</TableCell>
                  <TableCell align="right">Vote Weight</TableCell>
                  <TableCell align="right">Proposals Voted</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(0, arrayLength).map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}&nbsp;{" "}
                      <img src="/user.png" style={{ width: "15px" }} />
                      &nbsp;{row.Rank}
                    </TableCell>
                    <TableCell align="right">{row.Votes}</TableCell>
                    <TableCell align="right">{row.VoteWeight}</TableCell>
                    <TableCell align="right">{row.ProposalsVoted}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Paper className={classes.tableBottom} onClick={handleViewMore}>
            {arrayLength == 5 ? "View Leaderboard" : "Pack Up"}
          </Paper>
        </Grid>
      </Grid>

      {/* voting wallet */}
      <Grid container spacing={3} style={{ marginTop: "50px" }}>
        <Grid item xs={12}>
          <Paper className={classes.tableHead}>Voting Wallet</Paper>
          {connected ? (
            <>
              {manualVoting ? (
                <div>
                  <Paper className={classes.connectedBox}>
                    <div>
                      <p className={classes.subHeading2}>Bit Balance</p>
                      <span className={classes.subHeading2}>
                        {bitBalance}
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;
                      {/* <span><img src='/balancelogo.png'/> </span> */}
                    </div>
                  </Paper>
                  <Paper className={classes.connectedBox}>
                    <div>
                      <p className={classes.subHeading2}>Delegating To</p>
                      <span className={classes.subHeading2}>
                        <strong>Self</strong>
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;
                      {/* <span><img src='/balancelogo.png'/> </span> */}
                      <p
                        className={classes.changeButton}
                        onClick={handleOpen}
                      >
                        Change <img src="/corner-down-left.png" />
                      </p>
                    </div>
                  </Paper>
                  <Paper
                    className={classes.connectedBox}
                    style={{ borderRadius: "0px 0px 15px 15px" }}
                  >
                    <div>
                      <p className={classes.subHeading2}>Votes Received</p>
                      <span className={classes.subHeading2}>
                        0.00000000
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;
                      {/* <span><img src='/balancelogo.png'/> </span> */}
                    </div>
                  </Paper>
                </div>
              ) : (
                <div>
                  <Paper className={classes.connectedBox}>
                    <div>
                      <p className={classes.subHeading2}>Bit Balance</p>
                      <span className={classes.subHeading2}>
                        {bitBalance}
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;
                      {/* <span><img src='/balancelogo.png'/> </span> */}
                    </div>
                  </Paper>
                  <Paper
                    className={classes.connectedBox}
                    style={{ borderRadius: "0px 0px 15px 15px" }}
                  >
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.startButton}
                        onClick={handleOpen}
                      >
                        Get Started
                      </Button>
                    </div>
                  </Paper>
                </div>
              )}
            </>
          ) : (
            <div style={{}}>
              <Paper className={classes.votingBox}>
                <p>
                  <img src="/nothingIsHere.png" />
                </p>

                <p>
                  Nothing's Here, <br /> connect wallet now {">"}
                  {">"}
                </p>
              </Paper>
            </div>
          )}
        </Grid>
      </Grid>

      {open && (
        <ChooseVoting
          open={open}
          handleClose={handleClose}
          handleDelegateVoting={handleDelegateVoting}
          handleManualVoting={handleManualVoting}
        />
      )}
      {openDelegate && (
        <DelegateVoting
          open={openDelegate}
          handleClose={handleCloseDelegate}
          handleDelegateSubmit={handleDelegateSubmit}
        />
      )}
      <Grid container spacing={3}>
        <Grid item xs={9}></Grid>
      </Grid>
    </div>
  );
}

export default Governance;
