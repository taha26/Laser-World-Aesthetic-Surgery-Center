import React from 'react'
import "./About.moduel.css"
import Flag from "../../Assets/Flag.png"
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Icon from '../../Assets/award.png'
import exap from '../../Assets/slide-1.jpg'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    // border: 'none'
}));


export const About = () => {
    return (
        <>
            <div className="About-main">
                {/* <div className="InLahore"> */}

                <div className="About-main-Flag">
                    <img src={Flag} alt="Flag" />
                </div>
                <div className="About-main-div">
                    <h1>Hair Transplant Clinic in Karachi</h1>
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
                    <h6>OUR TEAM</h6>
                    <h1>Our Expert Team Puts <span>More Care Into Healthcare</span></h1>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">The LIASC team of well-qualified experts – led by internationally renowned Dr Zulfiqar Tunio – has worldwide repute for giving the patients wonderful results with scientifically advanced and gentle technique. Its multi-discipline experts specialize in hair transplantation, body sculpture, and skin care and treatment procedures that give you smooth, precise and permanent results.</Typography>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">You can take an appointment through a phone call or an email. Consultations at the LIASC are completely free of cost.</Typography>
                </div>
                <div className="About-main-Flag">
                    <img src={Flag} alt="Flag" />
                </div>
                {/* </div> */}
            </div>
            <div className="About-main">
                {/* <div className="InLahore"> */}
                <div className="About-main-Flag">
                    <img src={Flag} alt="Flag" />
                </div>

                <div className="About-main-div">
                    <h6>QUALITY & CARE</h6>
                    <h1>Quality is Not Expensive, <span>It’s Priceless.</span></h1>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">LIASC’s commitment to excellence in service quality, innovation, value and results is backed not only by years of achievement, but by the full technological resources and the exceptional and most trained team. In addition to delivering quality services, as a leading cosmetic surgery center, LIASC provides a unique, customer-focused and single-source solution for the complete personality transformation.</Typography>
                    <Typography
                        className="About-main-div-typography"
                        variant="subtitle2" gutterBottom component="div">The strength of our hair transplant clinic in Karachi is our team of dedicated professionals who are ready to deliver the highest level of customer care & service and natural results known to the industry. Your safety and comfort are our number one priority. We perform procedures in our on-site state of the art surgery Centre which has the most modern equipment available.</Typography>
                </div>

                {/* </div> */}
            </div>
            <div className="About-main-div-Grid">
                <Box sx={{
                    width: '100%',
                    // outline: "0px solid transparent",
                    // boxBorder: "none",
                    // marginRight: "2%",
                    // marginLeft: "2%",
                }}
                    className="About-main-div-Grid-box"
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className="About-main-div-Grid-box-grid" item xs={6}>
                            <Item className="About-main-div-Grid-box-grid-item">
                                <div className="About-main-div-Grid-div">
                                    <img src={Icon} alt="Icon" />
                                    <h6>LIASC SKIN CENTRE</h6>
                                </div>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">This is an advanced skin care center where qualified aesthetician and dermal therapists offer an amazing range of dermatology and cosmetology treatments from skin rejuvenation programs to removing skin blemishes, wrinkles, broken capillaries and age spots. The advanced laser hair removal program let you be “hair-free where you want to be”.</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="About-main-div-Grid-box-grid-item">
                                <div className="About-main-div-Grid-div">
                                    <img src={Icon} alt="Icon" />
                                    <h6>HAIR TRANSPLANT</h6>
                                </div>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">At LIASC, our strength is our Hair Transplant facilities. We have adapted to modern techniques like FUE hair transplant to provide our clients with the best hair transplant facilities in Pakistan. Our Benchmark is that we have set international standards for our Hair Transplant facilities at our hair transplant clinic in Karachi to provide our customers with modern facilities at a lesser cost comparatively.</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="About-main-div-Grid-box-grid-item">
                                <div className="About-main-div-Grid-div">
                                    <img src={Icon} alt="Icon" />
                                    <h6>LIASC BODY CONTOURING CENTRE</h6>
                                </div>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">The LIASC Body Contouring Centre emphasizes on advanced use of its facility and procedures to shape your body in its perfect form. LIASC’s Body Contouring services offer a wide range of body-tuning, weight-loss fixes and contouring possibilities to improve and revert back to the natural shape your body deserves. The advanced facility utilizes the most effective combination of state-of-the-art technologies under careful supervision of highly qualified experts in the field of surgery and nutrition.</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="About-main-div-Grid-box-grid-item">
                                <div className="About-main-div-Grid-div">
                                    <img src={Icon} alt="Icon" />
                                    <h6>OUR SERVICES</h6>
                                </div>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">Laser Inn Aesthetic Surgery Centre has focused and purpose-built centers to enable our patients in choosing the best “State-of-the-Art” cosmetic treatments that would accomplish goals with outstanding results. LIAS Claims not only to roll back the clock but wants to provide the best possible personality options. The moment you step into any of LIASC’s center, you will find yourself in the very capable hands of one of the best cosmetic plastic surgeons.</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="About-main-div-Grid-box-grid-item">
                                <div className="About-main-div-Grid-div">
                                    <img src={Icon} alt="Icon" />
                                    <h6>OUR VALUES</h6>
                                </div>
                                <Typography
                                    className="About-main-div-typography"
                                    variant="subtitle2" gutterBottom component="div">LIASC, the leading hair transplant clinic in Karachi drives its business with a foundation of Core Values which include Great Service, Integrity, Best Team, Innovation, and Truth. At LIASC, we live these values every day. These values are and will continue to be the foundation of our company. Visit LIASC the best hair transplant clinic in Karachi.</Typography>

                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item className="About-main-div-Grid-box-grid-item">
                                <img src={exap} className="About-main-div-Grid-div-img" />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
