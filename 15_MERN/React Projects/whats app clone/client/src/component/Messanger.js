import React, {useContext} from 'react';
import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import Login from './account/Login';

import { AccountContext } from './accountContext/AccountProvider';
import Chatbox from './Chatbox';

const useStyles = makeStyles({
    loginHeader : {
        height : 200,
        background : '#000fe5',
        boxShadow : 'none'
    },
    Header : {
        height : 100,
        background : '#000fe5',
        boxShadow : 'none'
    },
})

function Messanger() {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return (
        <>
        <AppBar  className={(!account) ? classes.loginHeader : classes.Header}>
            <Toolbar>

            </Toolbar>
        </AppBar>

        { (account) ? <Chatbox/> : <Login /> }

        </>
    )
}

export default Messanger
