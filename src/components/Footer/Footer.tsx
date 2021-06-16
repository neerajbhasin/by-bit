import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px 100px 0 100px",
      backgroundImage: "linear-gradient(to right, #ECF8FF, #FFF6F8)",
      color: "#2D82B7",
      fontFamily: "Space Grotesk",
    },
    section: {
      fontWeight: 700,
      textAlign: "left",
      color: '#0E47EF',
      fontSize:'24px'

    },
    subSection:{
      color: '#121212',
      fontSize:'18px',
      fontWeight:400
    },
    learmore:{
      fontSize:'18px',
      fontWeight:400,
      color: '#999999',
      '&:hover': {
        color: "#0E47EF",
        cursor:'pointer'
     },
    },
    
    pl: {
      paddingLeft: "0px",
    },
  })
);

//social link
const socialLink = [
  { name: "Twitter", index: 1, url: "#" },
  { name: "Discord", index: 2, url: "#" },
  { name: "Telegram", index: 3, url: "#" },
  { name: "Github", index: 4, url: "#" },
  { name: "Medium", index: 5, url: "#" },
];
const protocolLink = [
  { name: "About Us", index: 1, url: "#" },
  { name: "API Docs", index: 2, url: "#" },
  { name: "Governance", index: 3, url: "#" },
  { name: "Lite Paper", index: 4, url: "#" },
  { name: "Vote", index: 5, url: "#" },
];
const supportLink = [
  { name: "FAQ", index: 1, url: "#" },
  { name: "Careers", index: 2, url: "#" },
];
function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

function Footer() {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12} className={classes.section}>
        {/* <Typography variant="h4" component="h2" className={classes.section}>
          BitDAO
        </Typography> */}
        <img src="/Frame.png" />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.section}>
          BitDAO Governance
        </Typography>
        <p className={classes.subSection}>
          BIT token holders have control over BitDAO treasury and protocol
          through a proposal and voting process. Successful proposals are
          automatically executed on-chain without reliance on a middleman.
        </p>
        <p className={classes.learmore}>Learn More {'>'}{'>'}</p>
      </Grid>
    </Grid>
  );
}

export default Footer;
