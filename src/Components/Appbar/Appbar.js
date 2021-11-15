import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import './Appbar.css'


export const Appbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: "#7EC23E" }} id="app-bar" position="static">
                {/* <Toolbar > */}
                <div className="appbar-div">

                    <div className="appbar-div-1">

                        {/* <div> */}
                        <EmailOutlinedIcon />
                        <span>laserworldaesthetic@gmail.com </span>
                        <PhoneAndroidOutlinedIcon />
                        <span>0300-9378263 </span>
                        {/* </div> */}
                    </div>
                    <div className="appbar-div-2">
                        <FacebookIcon className="appbar-div-2-icons" />
                        <WhatsAppIcon className="appbar-div-2-icons" />
                        <TwitterIcon className="appbar-div-2-icons" />
                        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                        <span>

                            {/* <h4> */}
                            FAQs
                            {/* </h4> */}
                        </span>
                    </div>
                </div>
                {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography> */}
                {/* <Button color="inherit">Login</Button> */}
                {/* </Toolbar> */}
            </AppBar>
        </Box>
    );
}
