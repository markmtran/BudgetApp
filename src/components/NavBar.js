import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, AppBar, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return(
    <AppBar position='static'>
      <Toolbar>
        <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to='/'>Calculator</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to='/history'>History</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
        <Button style={{display: props.signOut}} color="inherit" onClick={handleSignOut}>Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;