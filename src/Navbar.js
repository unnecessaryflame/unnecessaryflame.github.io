import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(66,66,66)",
  },
  textColor: { color: "rgba(255,255,255)"},
  TitleText: { marginTop: "20px",
  marginBottom: "20px",
  color: "rgba(255,255,255)",
textDecoration: "none"},
}));

function Navbar() {
  const classes = useStyles();

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <Typography component={Link} to="/" underline="none" className={classes.TitleText} variant="h5" align="center">UNNECESSARY FLAME</Typography>
        <List>
        <ListItem button component={Link} to="/" >
              <ListItemText disableTypography primary={<Typography className={classes.textColor} variant="h6">HOME</Typography>} />
            </ListItem>
            <ListItem button component={Link} to="/Roster" >
              <ListItemText disableTypography primary={<Typography className={classes.textColor} variant="h6">ROSTER</Typography>} />
            </ListItem>
            {/* <ListItem button component={Link} to="/Roster" >
              <ListItemText disableTypography primary={<Typography className={classes.textColor} variant="h6">ROSTER</Typography>} />
            </ListItem>
            <ListItem button component={Link} to="/History" >
              <ListItemText disableTypography primary={<Typography className={classes.textColor} variant="h6">HISTORY</Typography>} />
            </ListItem> */}
            <ListItem button component="a" href="https://www.warcraftlogs.com/guild/eu/ragnaros/unnecessary%20flame" >
              <ListItemText disableTypography primary={<Typography className={classes.textColor} variant="h6">WARCRAFTLOGS</Typography>} />
            </ListItem>
            <ListItem button component="a" href="https://forms.gle/R1NmkSyCXPDUG9oN9" >
              <ListItemText disableTypography primary={<Typography className={classes.textColor} variant="h6">APPLY</Typography>} />
            </ListItem>
        </List>
      </Drawer>
  );
}

export default Navbar