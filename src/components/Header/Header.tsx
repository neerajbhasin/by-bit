
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'left',
      color:'#000',
      
      fontWeight:800

    },
    appbar:{
        backgroundColor:'#ffff',
        display:'block-inline'
    },
    appBarHeading:{
        textAlign:"right"
    },
    navList:{
      color:'#000',
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    listColor:{
      color:'#000',
    }

  }),
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  className={classes.appbar}position="static">
        <Toolbar>
          
          <Typography variant="h4" className={classes.title}>
            BitDAO
          </Typography>
          <div className={classes.appBarHeading}>
          <List component="nav" className={classes.navList}>
          <ListItemLink  href='#'>
              <ListItemText primary='FAQ'/>
            </ListItemLink>
            <ListItemLink  href='#'>
              <ListItemText primary='Litepaper'/>
            </ListItemLink>
            <ListItemLink  href='#' >
              <ListItemText primary='Governance' />
            </ListItemLink>
            <ListItemLink  href='#' >
            
              <img src='/language.png'/>
              <ListItemText primary='EN' />
            </ListItemLink>
            </List>
          
    
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}