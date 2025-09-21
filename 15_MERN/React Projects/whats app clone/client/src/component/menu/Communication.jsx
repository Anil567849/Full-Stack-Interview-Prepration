import React from 'react'
import {Box, Typography, makeStyles} from '@material-ui/core';


const useStyle = makeStyles({
    component : {
        display : 'flex',
        height : 40,
        padding : '13 0 ',
        alignItems : 'center',
        marginTop : '10px'

    },

    dp : {
        width : 50,
        height : 50,
        borderRadius : '50%',
        padding : "0 14px",



    }
})


function Communication({user}) {

    const classes = useStyle();

    return (
        <div>
            <Box className={classes.component}>
                <Box>
                    <img src={user.imageUrl} className={classes.dp}/>
                </Box>
                <Box>
                    <Box>
                        <Typography>{user.name}</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Communication
