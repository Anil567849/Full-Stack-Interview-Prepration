import React , {useEffect, useState, useContext} from 'react'
import {getUsers} from '../../service/api';
import Communication from './Communication.jsx';
import {Box, makeStyles} from '@material-ui/core';
import {AccountContext} from '../accountContext/AccountProvider.js';



const useStyle = makeStyles({
    component : {
        height : "81vh",
        overflow : "overlay",
    }
})


function Conversation({text}) {

    const [users, setUsers] = useState([]);
    const {account, setAccount} = useContext(AccountContext);

    const classes = useStyle();
    
    useEffect(()=>{
        const fetchData = async () => {
            const data = await getUsers();
            const filtered_data = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filtered_data);
        }
        fetchData();
    }, [text]);




    return (
        <Box className={classes.component}>
            {
                users.map(user => (
                    user.googleId !== account.googleId &&
                        <Communication user={user}/>
                ))
            }
        </Box>
    )
}

export default Conversation
