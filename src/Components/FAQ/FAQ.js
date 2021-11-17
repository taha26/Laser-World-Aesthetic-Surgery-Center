import React, { useState } from 'react'
import "./FAQ.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from '@mui/material/Divider';
import faq from "../../Assets/faq.png"

export const FAQ = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    return (
        <div className="faq">
            <h1>SOME FAQs</h1>
            <Divider variant="middle" style={{
                marginLeft: "42%",
                marginRight: "45%",
                // fontWeight: "bolder",
                color: "#7EC23E",
                // padding: "10px !important"
                // fontSize: "22px"
            }} />
            <div className="faq-Main">
                <div className="faq-main">
                    <div className="faq-main-head">
                        {/* <h1>Why Choose Us</h1> */}
                        <h2><span>Simple Guidelines For A</span><br />Rewarding Experience
                        </h2>
                    </div>
                    <div className="faq-main-items-main">

                        <div className="faq-main-items">
                            <div>

                                <h2 onClick={() => setShow(!show)} style={{ cursor: "pointer" }} ><ArrowForwardIosIcon /> What kind Of Technology Does It Use?</h2>
                                {

                                    show ? <p>Laser inn Aesthetic is the pioneer of Hair Restorative<br />
                                        Services in Pakistan</p> : null
                                }
                            </div>
                            <div>

                                <h2 onClick={() => setShow1(!show1)} style={{ cursor: "pointer" }}><ArrowForwardIosIcon /> Unmatched Hair Transplant Results</h2>
                                {

                                    show1 ? <p><span>Dr. Riaz</span> (F.R.C.S. Glasgow) has performed over<br />
                                        +18,000 Successful Restorative Surgeries, having<br />
                                        many satisfied clients across the globe</p> : null
                                }
                            </div>
                            <div>

                                <h2 onClick={() => setShow2(!show2)} style={{ cursor: "pointer" }}><ArrowForwardIosIcon /> What Is The Cause Of Hair Loss?</h2>
                                {

                                    show2 ? <p><span>Dr. Riaz</span> (F.R.C.S. Glasgow) Possess vast experience<br />
                                        of nearly two decades of providing hair<br />
                                        Restorative Services.</p> : null
                                }
                            </div>
                            {/* <div>

                                <h2>Are There Any Side Effects Of This Surgery?</h2>
                                <ul>
                                    <li>Our state of the art surgical equipment.
                                    </li>
                                    <li>Most advanced gadgets and instruments meeting<br />
                                        international standards</li>
                                    <li>Safe Procedure, Proper Sterilization and Dedicated O.T team.</li>
                                </ul>
                            </div> */}
                        </div>
                        <img src={faq} className="faq-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
