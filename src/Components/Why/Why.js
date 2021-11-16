import React from 'react'
import "./Why.css"
import pic from "../../Assets/pic3.jpg"
import cert from "../../Assets/cert.png"
import happy from "../../Assets/happy.png"
import partner from "../../Assets/partner.png"
import award from "../../Assets/award.png"
import cir1 from "../../Assets/cir1.png"
import cir2 from "../../Assets/cir2.png"

import Typography from '@mui/material/Typography';

export const Why = () => {
    return (
        <>
            <div className="Why-main">
                <div className="Why-main-head">
                    <h1>Why Choose Us</h1>
                    <h2><span>Ultimate</span> In FUE Hair <br />Transplant
                    </h2>
                </div>
                <div className="Why-main-items-main">

                    <div className="Why-main-items">
                        <div>

                            <h2>Pioneer In Pakistan</h2>
                            <p>Laser inn Aesthetic is the pioneer of Hair Restorative<br />
                                Services in Pakistan</p>
                        </div>
                        <div>

                            <h2>Unmatched Hair Transplant Results</h2>
                            <p><span>Dr. Riaz</span> (F.R.C.S. Glasgow) has performed over<br />
                                +18,000 Successful Restorative Surgeries, having<br />
                                many satisfied clients across the globe</p>
                        </div>
                        <div>

                            <h2>19 Years Of Excellence</h2>
                            <p><span>Dr. Riaz</span> (F.R.C.S. Glasgow) Possess vast experience<br />
                                of nearly two decades of providing hair<br />
                                Restorative Services.</p>
                        </div>
                        <div>

                            <h2>Safety, Instruments, and Gadgets</h2>
                            <ul>
                                <li>Our state of the art surgical equipment.
                                </li>
                                <li>Most advanced gadgets and instruments meeting<br />
                                    international standards</li>
                                <li>Safe Procedure, Proper Sterilization and Dedicated O.T team.</li>
                            </ul>
                        </div>
                    </div>
                    <img src={pic} className="why-img" />
                </div>
            </div>
            <div className="why-icon-main" >
                <div className="why-icon-main-div">
                    <img src={cert} />
                    <h1>125</h1>
                    <h6>Certificates</h6>
                </div >
                <div className="why-icon-main-div">
                    <img src={happy} />
                    <h1>700+</h1>
                    <h6>Happy Clients</h6>
                </div>
                <div className="why-icon-main-div">
                    <img src={partner} />
                    <h1>15+</h1>
                    <h6>Business Partner</h6>
                </div>
                <div className="why-icon-main-div">
                    <img src={award} />
                    <h1>120</h1>
                    <h6>Award</h6>
                </div>
            </div>
            <div className="why-circle-main">
                <div className="why-circle-main-div">
                    <img src={cir2} />
                    <h1>Hair Transplant In
                        Pakistan
                    </h1>
                    <Typography variant="subtitle2" gutterBottom component="div">Hair transplant is a surgical
                        procedure in which hair follicles
                        are moved from the donor site to
                        the receding hairline facing
                        baldness. </Typography>
                </div>
                <div className="why-circle-main-div">
                    <img src={cir1} />
                    <h1>Liposelection By
                        Vaser In Pakistan
                    </h1>
                    <Typography variant="subtitle2" gutterBottom component="div">The LIASC Body Contouring
                        Centre is an advanced facility to
                        make your body perfect. The
                        Centre offers a range of
                        weight-loss, body-tuning and</Typography>
                </div>
                <div className="why-circle-main-div">
                    <img src={cir2} />
                    <h1>Hair Transplant In
                        Pakistan</h1>
                    <Typography variant="subtitle2" gutterBottom component="div">Hair transplant is a surgical
                        procedure in which hair follicles
                        are moved from the donor site to
                        the receding hairline facing
                        baldness. </Typography>
                </div>
            </div>
        </>
    )
}
