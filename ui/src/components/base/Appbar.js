import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Appbar() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            NextUp
          </Typography>
        <div>
            <Link to="/profile">
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </Link>
        </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}
