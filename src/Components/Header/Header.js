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

export const Header = () => {
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
                <img alt="logo" width="100%" src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle className="abc" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="header-link" href="#home">Home</Nav.Link>
                    <Nav.Link className="header-link" href="#link">About</Nav.Link>
                    <NavDropdown className="header-link" title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item className="header-dropdown" href="#action/3.1">FUE</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="header-dropdown" href="#action/3.2">PRP</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="header-dropdown" href="#action/3.3">Dremotrology & Transmotology</NavDropdown.Item>
                        {/* <NavDropdown.Item className="header-dropdown" href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link className="header-link" href="#link">Appointment</Nav.Link>
                    <Nav.Link className="header-link" href="#link">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
}