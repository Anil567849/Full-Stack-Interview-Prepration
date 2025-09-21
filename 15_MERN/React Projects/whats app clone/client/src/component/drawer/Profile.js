import React, {useContext} from 'react'
import {Box, makeStyles, Typography} from '@material-ui/core';
import { AccountContext } from '../accountContext/AccountProvider';

const useStyles = makeStyles({
    imageContainer : {
        display : 'flex',
        justifyContent : 'center'
    },
    displayPicture : {
        width : 200,
        height : 200,
        borderRadius : '50%',
        padding : '10px 0',
    },
    nameContainer : {
        background : '#ededed',
        padding : 10,
        '& :first-child' : {
            fontSize : '16px',
            color : 'green'
        },
        '& :last-child' : {
            color : "black",
            margin : "14px 0",
        }
    }
})

function Profile() {

    const {account} = useContext(AccountContext);

    const classes = useStyles();

    return (
        <div>
            <Box>
                <Box className={classes.imageContainer}>
                    <img className={classes.displayPicture} src={account.imageUrl} alt="dp"/>
                </Box>
                <Box className={classes.nameContainer}>
                    <Typography>Your Name</Typography>
                    <Typography>{account.name}</Typography>
                </Box>
                <Box></Box>
                <Box></Box>
            </Box>
        </div>
    )
}

export default Profile
