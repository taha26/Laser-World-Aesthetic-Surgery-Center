import React from 'react'
import pic1 from "../../Assets/twopicdiv1.jpg"
import pic2 from "../../Assets/twopicdiv2.jpg"
import Divider from '@mui/material/Divider';
// import fade1 from "../../Assets/fade1.PNG"
// import fade2 from "../../Assets/fade2.PNG"
import "./TwoPicDiv.css"

export const TwoPicDiv = () => {
    return (
        <div className="TwoPicDiv-main">
            <div className="image">


                <img src={pic1}
                    className="image__img"
                // className="TwoPicDiv-img"
                // onMouseOver={e => (e.currentTarget.src = fade1)}
                // onMouseOut={e => (e.currentTarget.src = pic1)}
                />
                <div className="image__overlay image__overlay--primary">
                    <div className="image__title">Hair
                        Transplant</div>
                    {/* <p className="image__description"> */}
                    {/* Here we have a brick wall. */}

                    {/* <Divider variant="middle"
                        //  style={{
                        //     marginLeft: "10%",
                        //     marginRight: "10%"
                        // }}
                        /> */}
                    {/* </p> */}
                    {/* <hr /> */}
                </div>
            </div>
            <div className="image">


                <img src={pic2}
                    className="image__img"
                // className="TwoPicDiv-img"
                // onMouseOver={e => (e.currentTarget.src = fade1)}
                // onMouseOut={e => (e.currentTarget.src = pic1)}
                />
                <div className="image__overlay image__overlay--primary">
                    <div className="image__title">Dremotrology &
                        Transmotology
                    </div>
                    {/* <p className="image__description">
                        Here we have a brick wall.
                    </p> */}
                </div>
            </div>
            {/* <div>
                <img src={pic2} className="TwoPicDiv-img"
                // onMouseOver={e => (e.currentTarget.src = fade2)}
                // onMouseOut={e => (e.currentTarget.src = pic2)}
                />
            </div> */}
        </div>
    )
}
