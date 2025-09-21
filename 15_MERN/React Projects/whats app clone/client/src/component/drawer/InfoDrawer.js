import React from 'react'
import {Drawer, makeStyles, Box, Typography} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Profile from './Profile';

const useStyles = makeStyles({
    header : {
        background : 'teal',
        height : 90,
        color : '#FFF',
        display : 'flex',
        "& > *" : {
            marginTop : 'auto',
            fontWeight : '600',
            padding : '20px',

        }
    }
})

function InfoDrawer({open, setOpen}) {
    const handleClose = () =>{
        setOpen(false);
    }

    const classes = useStyles();

    return (
        <Drawer open={open} >
            <Box className={classes.header} onClose={handleClose}>
                <ArrowBack onClick={handleClose}/>
                <Typography>Profile</Typography>
            </Box>
            <Profile/>
         </Drawer>
    )
}

export default InfoDrawer
