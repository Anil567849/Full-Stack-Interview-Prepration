import React, {useContext, useState} from 'react'
import {Chat} from '@material-ui/icons'
import {Box, makeStyles} from '@material-ui/core';
import {AccountContext} from '../accountContext/AccountProvider';
import HeaderMenu from './HeaderMenu';
import Drawer from '../drawer/InfoDrawer';

const useStyles = makeStyles({
    header : {
        height : '35px',
        background : "#ededed",
        padding : '12px 12px',
        display : 'flex',
        alignItems : 'center',
    },
    avatar : {
        height : 37,
        width : 37,
        borderRadius : '50%',
    },
    icons : {
        marginLeft : 'auto',
        '& > *' : {
            marginLeft : 2,
            padding : 8,
            color : '#919191'
        }
    }
})

function Header() {
    const {account} = useContext(AccountContext);
    // console.log(account);
    // console.log(account.imageUrl);


    const [open, setOpen] = useState(false);
    
    const toggleDrawer = () => {
        setOpen(true);
    }

    const classes = useStyles();
    return (
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} alt="Display Picture" onClick={()=>toggleDrawer()} className={classes.avatar}/>
                <Box className={classes.icons}>
                    <svg id="ee51d023-7db6-4950-baf7-c34874b80976" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                    <Chat/>
                    <HeaderMenu/>
                </Box>
            </Box>
            <Drawer open={open} setOpen={setOpen}/>
        </>
    )
}

export default Header;