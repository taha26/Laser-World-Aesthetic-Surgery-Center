import React from 'react'

import "./Services.css"

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router';


import pic from "../../Assets/pic3.jpg"
import doc from "../../Assets/cir2.png"



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




export const FUE = () => {

    const history = useHistory()

    return (
        <div className="services-main">
            <div className="services-main-head">
                <div className="services-main-overlay">
                    <h1>FUE</h1>
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            // disabled={disable}
                            className="btnLogServices"
                            onClick={() => history.push('./Appointment')}
                        >
                            Book Your Appointment Now
                        </Button>
                    </Stack>
                </div>
            </div>
            <div className="services-main-What">
                <h2>What Is FUE</h2>
                <Typography
                    className="services-main-typography"
                    variant="subtitle2" gutterBottom component="div">Laser Inn Aesthetic Surgery Centre (LIASC)
                    was established in the year 2000 with the aim to provide the best services in hair
                    transplant and cosmetic surgery and build new standards in the well-being industry in the
                    region. Currently, LIASC is providing its services in Karachi, and Dubai with plans to expand
                    in the future. The most recent addition of LIASC’s geographic presence is Tunio Aesthetic that
                    is located in Dubai Health Care City in UAE.</Typography>
            </div>
            <div className="About-main">
                {/* <div className="InLahore"> */}

                <div className="About-main-Flag">
                    <img src={pic} alt="Flag" />
                </div>
                <div className="About-main-div">
                    <h1><span>Advantages</span></h1>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">Laser Inn Aesthetic Surgery Centre (LIASC)
                        was established in the year 2000 with the aim to provide the best services in hair
                        transplant and cosmetic surgery and build new standards in the well-being industry in the
                        region. Currently, LIASC is providing its services in Karachi, and Dubai with plans to expand
                        in the future. The most recent addition of LIASC’s geographic presence is Tunio Aesthetic that
                        is located in Dubai Health Care City in UAE.</Typography>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">Our services are trusted everywhere and by listening
                        to the people who experienced them, we’ve grown into one of the regions’ most successful cosmetic
                        surgery service providers. As the way we all live and technology evolves, so do the means for one’s
                        well-being. Laser Inn, the leading hair transplant clinic in Karachi aims to help people in their daily
                        lives. Providing the best results in the cosmetic industry, LIASC is distinctively known for its naturalness
                        and professionalism in aesthetic surgery services..</Typography>
                </div>
                {/* </div> */}
            </div>
            <div className="About-main">
                {/* <div className="InLahore"> */}


                <div className="About-main-div">
                    {/* <h6>OUR TEAM</h6> */}
                    <h1><span>Disadvantages</span></h1>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">The LIASC team of well-qualified experts – led by internationally renowned Dr Zulfiqar Tunio – has worldwide repute for giving the patients wonderful results with scientifically advanced and gentle technique. Its multi-discipline experts specialize in hair transplantation, body sculpture, and skin care and treatment procedures that give you smooth, precise and permanent results.</Typography>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">You can take an appointment through a phone call or an email. Consultations at the LIASC are completely free of cost.</Typography>
                </div>
                <div className="About-main-Flag">
                    <img src={pic} alt="Flag" />
                </div>
            </div>
            <div className="services-main-div-Grid">
                <h2>Laser World Aesthetic</h2>
                <h3>FUE Specialist</h3>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item className="services-main-div-Grid-box-grid-item"><img src={doc} width="100%" alt="doc" /></Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="services-main-div-Grid-box-grid-item">
                                <h3>Dr. ABC FUE Specialist</h3>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">You can take an appointment through a phone call or an email. Consultations at the LIASC are completely free of cost.</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="services-main-div-Grid-box-grid-item">
                                <h3>Description</h3>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">You can take an appointment through a phone call or an email. Consultations at the LIASC are completely free of cost.</Typography>
                            </Item>
                        </Grid>
                        {/* <Grid item xs={6}>
                            <Item className="services-main-div-Grid-box-grid-item">4</Item>
                        </Grid> */}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
