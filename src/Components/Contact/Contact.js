import React, { useState } from 'react'

import "./Contact.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// import ListItemText from "@mui/material/ListItemText";

import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import { db } from "../../Configuration/Firebase";
import { ref, set, push, child } from "firebase/database";


import Form from "react-bootstrap/Form"
import { sub } from 'date-fns';


// Material UI 

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




export const Contact = () => {


    // Material UI Button Panel

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    // States

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState(0)
    const [country, setCountry] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')



    const submit = () => {
        var uid;
        set(ref(db, `contact/user/${uid = push(child(ref(db), 'contact/user/')).key}`), {
            name: name,
            email: email,
            contact: contact,
            country: country,
            subject: subject,
            message: message,
            uid: uid,
        }).then(() => {
            // dispatch({type:"SETUSER",payload:data_user})
            console.log("data send")

        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            console.log(errorMessage)
            console.log(error)
        });
    }


    return (
        <div className="contact-main">
            <div className="contact-main-head">
                <h1>LASER WORLD AESTHETICS</h1>
            </div>
            <div className="contact-main-box-div">
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'white',
                        color: "#7EC23E",
                        // border: 'solid gery !important',
                        // borderColor: "green !important",
                        '&:hover': {
                            // backgroundColor: '#7EC23E',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    className="contact-main-box"
                >
                    <LocationOnIcon sx={{ height: "30%", width: "30%", marginTop: '5%', marginBottom: '5%' }} />
                    <h2>Address</h2>
                    <Typography className="contact-main-box-typo" variant="subtitle2" gutterBottom component="div">D-2/1,Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>

                </Box>
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'white',
                        color: "#7EC23E",
                        // border: 'solid gery !important',
                        // borderColor: "green !important",
                        '&:hover': {
                            // backgroundColor: '#7EC23E',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    className="contact-main-box"
                >
                    <PhoneAndroidOutlinedIcon sx={{ height: "30%", width: "30%", marginTop: '5%', marginBottom: '5%' }} />
                    <h2>Contact</h2>
                    <Typography className="contact-main-box-typo" variant="subtitle2" gutterBottom component="div">0800 54272 (Toll Free) / +92 3002991016</Typography>
                </Box>
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'white',
                        color: "#7EC23E",
                        // border: 'solid gery !important',
                        // borderColor: "green !important",
                        '&:hover': {
                            // backgroundColor: '#7EC23E',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    className="contact-main-box"
                >
                    <EmailOutlinedIcon sx={{ height: "30%", width: "30%", marginTop: '5%', marginBottom: '5%' }} />
                    <h2>Email</h2>
                    <Typography className="contact-main-box-typo" variant="subtitle2" gutterBottom component="div">info@liasc.com</Typography>
                </Box>
            </div>
            <div>
                <Box sx={{ flexGrow: 1, marginLeft: '4%', marginRight: '4%' }}>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={6}>
                            <Item>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label="Karachi" value="1" />
                                                <Tab label="Dubai" value="2" />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <div className="contact-main-tabs-div" >
                                                <div className="contact-main-tabs-div-main">

                                                    <div>

                                                        <LocationOnIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Address</h6>
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital,<br /> Karachi, Pakistan.</Typography>
                                                    </div>
                                                </div>
                                                <div className="contact-main-tabs-div-main">
                                                    <div>

                                                        <LocalPhoneIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Contact Information</h6>
                                                        <Typography variant="body2" gutterBottom>
                                                            0800 54272 (Toll Free)<br />
                                                            +92 (21) 3583-6295<br />
                                                            +92 (21) 3583-6288<br />
                                                            +92 (21) 3583-6242<br />
                                                            +92 300 2991016</Typography>
                                                    </div>
                                                </div>
                                                <div className="contact-main-tabs-div-main">

                                                    <div>

                                                        <WhatsAppIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Whats App</h6>
                                                        <Typography variant="body2" gutterBottom>+92 300-2991016</Typography>
                                                    </div>
                                                </div>
                                                <div className="contact-main-tabs-div-main">

                                                    <div>

                                                        <EmailOutlinedIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Email</h6>
                                                        <Typography variant="body2" gutterBottom>info@liasc.com</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            <div className="contact-main-tabs-div" >
                                                <div className="contact-main-tabs-div-main">

                                                    <div>

                                                        <LocationOnIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Address</h6>
                                                        <Typography variant="body2" gutterBottom>2034 Al-Razi Medical Complex 64, Block F, District 1, Dubai<br /> Health Care City, Dubai, UAE.</Typography>
                                                    </div>
                                                </div>
                                                <div className="contact-main-tabs-div-main">
                                                    <div>

                                                        <LocalPhoneIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Contact Information</h6>
                                                        <Typography variant="body2" gutterBottom>
                                                            +971 4 4494001<br />
                                                            +971551334093<br />
                                                            +971 557233763 (WhatsApp)</Typography>
                                                    </div>
                                                </div>
                                                <div className="contact-main-tabs-div-main">

                                                    <div>

                                                        <EmailOutlinedIcon sx={{ height: "50px", width: "50px" }} />
                                                    </div>
                                                    {/* <ListItemText
                                                    // primaryTypographyProps={{
                                                        //   width: "100%",
                                                        //   lineHeight: "10px",
                                                        // }}
                                                        primary="Address"
                                                        secondary="D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan."
                                                        >
                                                        <Typography variant="body2" gutterBottom>D-2/1, Block-3, Clifton Near South City Hospital, Karachi, Pakistan.</Typography>
                                                    </ListItemText> */}
                                                    <div className="contact-main-tabs-div-divs">
                                                        <h6>Email</h6>
                                                        <Typography variant="body2" gutterBottom>info@tunioaes.com</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <div>
                                    <div>
                                        <h3>Get in Touch with Us</h3>
                                        <Typography variant="body2" gutterBottom>Dr. Zulfiqar H. Tunio and the team are always here to help. If you have any queries for us, Please! feel free to get in touch with us.</Typography>
                                    </div>
                                    <div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                {/* <Form.Label>You</Form.Label> */}
                                                <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                {/* <Form.Label>Email address</Form.Label> */}
                                                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                {/* <Form.Label>Email address</Form.Label> */}
                                                <Form.Control onChange={(e) => setContact(e.target.value)} type="number" placeholder="Contact No." />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                {/* <Form.Label>Email address</Form.Label> */}
                                                <Form.Control onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Your Country" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                {/* <Form.Label>Email address</Form.Label> */}
                                                <Form.Control onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Your Subject" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                {/* <Form.Label>Example textarea</Form.Label> */}
                                                <Form.Control onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" as="textarea" rows={3} />
                                            </Form.Group>
                                            <Stack spacing={2} direction="row">
                                                <Button
                                                    variant="contained"
                                                    // disabled={disable}
                                                    className="btnLog-contact"
                                                    onClick={() => submit()}
                                                >
                                                    Submit
                                                </Button>
                                            </Stack>
                                        </Form>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
