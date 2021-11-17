import React from "react";
// import "./sale.module.css";
// import "./bestime.module.css";
import Flogo from "../../Assets/Flogo.png";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import DeleteIcon from "@mui/icons-material/Facebook";
// import { Twitter } from "@mui/icons-material";
// import AddShoppingCartIcon from "@mui/icons-material/Instagram";
// import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import './footer.css'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';


export default function Footer() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: 128,
    //       height: 128,
    //     },
    //   }}
    // >
    //   <Paper elevation={0} >

    <div className="containerf">
      <div className="container-f"
        style={{ display: "flex" }}
      >
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: 'center',
            // border: "1px solid",
            margin: '0% 10% 0% 8%'
          }}
        >
          <img width='100%' src={Flogo} alt="logo" />
          {/* <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" color="info">
              <Twitter />
            </IconButton>
            <IconButton color="secondary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </Stack> */}
        </div>
        {/* <div className="main-flink"> */}


        <div className='flink'>
          <h3>RECENT POSTS</h3>
          <ListItemButton>
            {/* <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="Economical FUE Hair Transplant
              in Pakistan
              "
            /> */}
            <Typography variant="subtitle2" gutterBottom component="div">
              Economical FUE Hair Transplant
              in Pakistan
            </Typography>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            {/* <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="Hair Transplant in Karachi"
            /> */}
            <Typography variant="subtitle2" gutterBottom component="div">Hair Transplant in Karachi</Typography>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            {/* <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="A Better Plan for Better Hair!"
            /> */}
            <Typography variant="subtitle2" gutterBottom component="div">A Better Plan for Better Hair!</Typography>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            {/* <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="Beauty is in fact scalp-deep!"
            /> */}
            <Typography variant="subtitle2" gutterBottom component="div">Beauty is in fact scalp-deep!</Typography>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            {/* <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="The Important Role Of Nutritionist!"
            /> */}
            <Typography variant="subtitle2" gutterBottom component="div">The Important Role Of Nutritionist!</Typography>
          </ListItemButton>

        </div>
        {/* <div className='flink'>
          <h1>Company</h1>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="About Us"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Affilate"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Career"
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Contact"
            />
          </ListItemButton>
        </div> */}
        <div className='flink' id="f-link">
          <h3>DON’T BE SHY, SAY HELLO!</h3>
          <ListItemButton>
            <LocationOnIcon sx={{ height: "30px", width: "30px", marginRight: "5px" }} />
            {/* <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="Maze 9 Plot No.27c Street No. 12
              Badar Commercial Area Main Khayaban-eBadar,DHA Phase 5, Karachi."
            /> */}
            <Typography variant="body2" gutterBottom>Maze 9 Plot No.27c Street No. 12
              Badar Commercial Area Main Khayaban-eBadar,DHA Phase 5, Karachi.</Typography>
          </ListItemButton>
          <ListItemButton>
            <LocalPhoneIcon sx={{ height: "30px", width: "30px", marginRight: "5px" }} />
            <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="021-35344411"
            />
          </ListItemButton>
          <ListItemButton>
            <PhoneAndroidOutlinedIcon sx={{ height: "30px", width: "30px", marginRight: "5px" }} />
            <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="0300-9378263"
            />
          </ListItemButton>
          <ListItemButton>
            <EmailOutlinedIcon sx={{ height: "30px", width: "30px", marginRight: "5px" }} />
            <ListItemText
              // primaryTypographyProps={{
              //   width: "100%",
              //   lineHeight: "10px",
              // }}
              primary="laserworldaesthetic@gmail.com"
            />
          </ListItemButton>
        </div>
        {/* </div> */}
      </div>
      <Divider variant="middle" style={{
        marginLeft: "10%",
        marginRight: "10%"
      }}
      />
      <div className="main-end">

        <h4>© | LIASC All Rights Reserved | Design & Developed by Deskworksolution.</h4>
        <div>
          <FacebookIcon sx={{ height: "30px", width: "30px", marginLeft: "5px" }} />
          <TwitterIcon sx={{ height: "30px", width: "30px", marginLeft: "5px" }} />
          <LinkedInIcon sx={{ height: "30px", width: "30px", marginLeft: "5px" }} />
          <PinterestIcon sx={{ height: "30px", width: "30px", marginLeft: "5px" }} />
        </div>
      </div>
    </div >
    //     {/* </Paper> */ }
    // {/* <Paper /> */ }
    // {/* <Paper elevation={3} /> */ }
    // {/* </Box> */ }
  );
}
