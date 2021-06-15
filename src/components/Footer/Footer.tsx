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
      backgroundImage: "linear-gradient(to bottom, #ECF8FF, #FFFFFF)",
      color: "#2D82B7",
      fontFamily: "Space Grotesk",
    },
    section: {
      fontWeight: 800,
      textAlign: "left",
    },
    pl:{
        paddingLeft:'0px'
    }
  })
);

//social link
const socialLink = [
  { name: "Twitter", index: 1,  url:'#'},
  { name: "Discord", index: 2  , url:'#'},
  { name: "Telegram", index: 3  , url:'#'},
  { name: "Github", index: 4  , url:'#'},
  { name: "Medium", index: 5  , url:'#'},
];
const protocolLink = [
    { name: "About Us", index: 1,  url:'#'},
    { name: "API Docs", index: 2  , url:'#'},
    { name: "Governance", index: 3  , url:'#'},
    { name: "Lite Paper", index: 4  , url:'#'},
    { name: "Vote", index: 5  , url:'#'},
  ];
  const supportLink = [
    { name: "FAQ", index: 1,  url:'#'},
    { name: "Careers", index: 2  , url:'#'},
   
  ];
function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

function Footer() {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={3} className={classes.section}>
        <Typography variant="h4" component="h2" className={classes.section}>
          BitDAO
        </Typography>
        <p>BitDAO is an on-chain protocol governed by BIT token holders</p>
      </Grid>
      <Grid item xs={3} className={classes.section}>
        <Typography variant="h5" component="h2" className={classes.section}>
          Social
        </Typography>
        {socialLink.map((links) => (
          <ListItemLink key={links.index}href={links.url} className={classes.pl}>
            <ListItemText primary={links.name} />
          </ListItemLink>
        ))}
      </Grid>
      <Grid item xs={3} >
        <Typography variant="h5" component="h2" className={classes.section}>
          Protocol
        </Typography>
        {protocolLink.map((links) => (
          <ListItemLink key={links.index}href={links.url} className={classes.pl}>
            <ListItemText primary={links.name} />
          </ListItemLink>
        ))}
      </Grid>
      <Grid item xs={3} >
        <Typography variant="h5" component="h2" className={classes.section}>
          Support
        </Typography>
        {supportLink.map((links) => (
          <ListItemLink key={links.index}href={links.url}  className={classes.pl}>
            <ListItemText primary={links.name} />
          </ListItemLink>
        ))}
      </Grid>
    </Grid>
  );
}

export default Footer;
