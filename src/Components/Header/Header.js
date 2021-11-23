import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import NavDropdown from "react-bootstrap/NavDropdown"

import Logo from "../../Assets/logo.png"


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


import { useHistory } from "react-router";

export const Header = () => {


    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const history = useHistory();

    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static">
        //         <Toolbar>
        //             <IconButton
        //                 size="large"
        //                 edge="start"
        //                 color="inherit"
        //                 aria-label="menu"
        //                 sx={{ mr: 2 }}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //                 News
        //             </Typography>
        //             <Button color="inherit">Login</Button>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
        <Navbar className="header-navbar" bg="light" expand="lg">
            {/* <Container className="header-container"> */}
            <Navbar.Brand className="header-container-img" href="#home">
                <img alt="logo" width="60%" src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle className="abc" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="header-link" onClick={() => history.push('/')}>Home</Nav.Link>
                    <Nav.Link className="header-link" >About</Nav.Link>
                    <NavDropdown className="header-link" title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item className="header-dropdown" href="#action/3.1">FUE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="header-dropdown" href="#action/3.2">PRP</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {/* <NavDropdown.Item 
                        className="header-dropdown"
                         href="#action/3.3"> */}
                        {/* Dremotrology & Transmotology */}
                        <List className="header-dropdown">
                            <ListItemButton onClick={handleClick}>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon> */}
                                {/* <ListItemText className="header-dropdown" primary="Dremotrology & Transmotology" /> */}
                                <NavDropdown.Item
                                    className="header-dropdown"
                                    id="header-nested-dropdown"
                                    href="#action/3.2">Dremotrology & Transmotology</NavDropdown.Item>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton >
                                        {/* <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon> */}
                                        <ListItemText primary="Microneedling" />
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemText primary="Hydrofacial" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="PRP Hair" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Face & Scalp" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Chemical Peels" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Whitening Injections" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Acne Treatment" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Filler" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Botox" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Electro" />
                                    </ListItemButton>
                                    <ListItemButton>

                                        <ListItemText primary="Absorbtion" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        {/* </NavDropdown.Item> */}
                        {/* <NavDropdown.Item className="header-dropdown" href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link onClick={() => history.push('./Appointment')} className="header-link" >Appointment</Nav.Link>
                    <Nav.Link onClick={() => history.push('./Contact')} className="header-link" >Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
}