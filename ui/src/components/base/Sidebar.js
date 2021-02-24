import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
    drawerPaper: { width: 'inherit' },
    link: { 
        textDecoration: 'none',
        color: theme.palette.text.primary
    }
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
    <div style={{display: 'flex'}}>
        <Drawer
            style={{width: '200px'}}
            variant='persistent'
            anchor='left'
            open={true}
            classes={{ paper: classes.drawerPaper }}>
            <List>
                <SidebarLink to="/" text='Dashboard' icon={<HomeIcon />} />
                <SidebarLink to="/schedule" text='Schedule' icon={<CalendarTodayIcon />} />
                <SidebarLink to="/groups" text='Groups' icon={<GroupIcon />} />
                <SidebarLink to="/connect" text='Connect' icon={<GroupAddIcon />} />
                <SidebarLink to="/create" text='Create' icon={<AddCircleIcon />} />
            </List>
        </Drawer>
    </div>
    );
}

export function SidebarLink(props) {
    const { to, text, icon, ...other } = props;
    const classes = useStyles();

    return (
        <NavLink to={to} className={classes.link}>
        <ListItem button>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
        </NavLink>
    );
}