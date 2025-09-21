import { MoreVert } from '@material-ui/icons'
import React,  {useState, useContext} from 'react'
import {Menu, MenuItem} from '@material-ui/core'
import {GoogleLogout} from 'react-google-login';
import { AccountContext } from '../accountContext/AccountProvider';

function HeaderMenu() {

    const [open, setOpen] = useState(false);
    const {setAccount} = useContext(AccountContext);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = (event) => {
        setOpen(event.currentTarget)
    }


    const onLogoutSuccess = () => {
        alert("logged out");
        console.clear();
        setAccount("");
    }




    const clientId = '907958364135-s97gpl7c5jmhpap87sueh8kbe6r17ih9.apps.googleusercontent.com';


    return (
        <>
            <MoreVert onClick={handleOpen}/>
            <Menu
                anchorEl={open}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}

                // dropdown positon 
                getContentAnchorEl={null}
                anchorOrigin = {{
                    vertical : 'bottom',
                    horizontal : 'center',
                }}
                transformOrigin = {{
                    vertical  : "top",
                    horizontal : 'right'
                }}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <GoogleLogout
                    
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}

                />
            </Menu>
        </>
    )
}

export default HeaderMenu
