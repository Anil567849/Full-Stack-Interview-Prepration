import React from 'react'
import { withStyles, Dialog, Box, makeStyles } from '@material-ui/core'
import Menu from './menu/Menu';

const style = {
    dialogPaper : {
        height : '90%',
        width : '90%',
        maxHeight : '100%',
        maxWidth : '100%',
    }
}


const useStyles = makeStyles({
    container : {
        display : 'flex',
        flex : 1
    }, 
    leftContainer : {
        display : 'flex',
        flexDirection : 'column',
        flex : '0.3',
        background : 'red',
    },
    rightContainer : {
        display : 'flex',
        flex : '0.7',
        background : 'yellow',
    }
})


function Chatbox({classes}) {
    const classname = useStyles();
    return (
        <div>
            
            <Dialog classes={{paper : classes.dialogPaper}} open={true}>
                <Box className={classname.container}>
                    <Box className={classname.leftContainer}><Menu/></Box>
                    <Box className={classname.rightContainer}>Chat</Box>
                </Box>
            </Dialog>

        </div>
    )
}

export default withStyles(style)(Chatbox);
