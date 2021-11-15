import React from 'react'
import pic1 from "../../Assets/twopicdiv1.jpg"
import pic2 from "../../Assets/twopicdiv2.jpg"

export const TwoPicDiv = () => {
    return (
        <div className="TwoPicDiv-main">
            <div>


                <img src={pic1} />
            </div>
            <div>
                <img src={pic2} />
            </div>
        </div>
    )
}
