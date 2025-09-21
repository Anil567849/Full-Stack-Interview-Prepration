import { Dialog, withStyles, makeStyles, Typography, List, Box, ListItem } from '@material-ui/core';
import React, {useContext} from 'react';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../accountContext/AccountProvider';
import { addUser } from '../../service/api';


const style = {
    dialogPaper : {
        height : '90%',
        width : '60%',
        marginTop : '12%',
        maxHeight : '100%',
        maxWidth : '100%',
    }
}



const useStyle = makeStyles({
    container : {
        display : 'flex',
    },
    leftContainer : {
        padding : '54px 0 54px 54px',
    },
    qrCode : {
        height : 268,
        width : 268
    }
})

function Login({classes}) {

    const {account, setAccount} = useContext(AccountContext);




    const classname = useStyle();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = '907958364135-s97gpl7c5jmhpap87sueh8kbe6r17ih9.apps.googleusercontent.com';




    const onLoginSuccess = async (res)=> {
        // console.log('suc', res);
        console.log('suc', res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }



    const onLoginFailure = ()=> {
        console.log('fail')
    }



    return (
        <Dialog classes={{paper : classes.dialogPaper}} open={true}>
        

            <Box className={classname.container}>
                <Box className={classname.leftContainer}>
                    <Typography>To use whatsapp in your computer</Typography>
                    
                    <List>
                        <ListItem>1. Open whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu of Setting and select Linked Devices</ListItem>
                        <ListItem>3, Point your phone to this screen to capture the code</ListItem>
                    </List>

                </Box>
                <Box>
                    <img src={qrurl} alt="QR" className={classname.qrCode}/>
                    


                    <GoogleLogin
                        clientId={clientId}
                        buttonText=""
                        isSignedIn={true}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </Box>


            </Box>

        </Dialog>
    )
}

export default withStyles(style)( Login );
