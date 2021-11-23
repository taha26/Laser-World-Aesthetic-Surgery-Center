import * as React from 'react';

import "./BookNow.css"

import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router';


export const BookNow = () => {

    const history = useHistory()

    return (
        <Box
            sx={{
                width: 350,
                height: 350,
                // backgroundColor: 'primary.dark',
                borderRadius: "2%",
                // opacity: [0.9, 0.8, 0.7],
                '&:hover': {
                    // backgroundColor: 'gray',
                    // opacity: 'none',
                },
            }}
            className="booknow-box"
        >
            <h1>GET AMAZING RESULTS NOW</h1>
            <h4>One of the Best Hair Transplant Surgery<br />
                Centre in Pakistan.</h4>
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    // disabled={disable}
                    className="btnLogBookNow"
                    onClick={() => history.push('./Appointment')}
                >
                    Book Now
                </Button>
            </Stack>
        </Box>
    );
}