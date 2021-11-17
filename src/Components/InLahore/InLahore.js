import React from 'react'
import "./InLahore.css"
import Flag from "../../Assets/Flag.png"
import Typography from '@mui/material/Typography';

export const InLahore = () => {
    return (
        <div className="InLahore-main">
            {/* <div className="InLahore"> */}

            <div className="InLahore-main-Flag">
                <img src={Flag} alt="Flag" />
            </div>
            <div className="InLahore-main-div">
                <h1>Hair Transplant In Lahore</h1>
                <Typography
                    className="InLahore-main-div-typography"
                    variant="subtitle2" gutterBottom component="div">Laser Inn offers FUE Hair Transplant in Lahore which helps people
                    gain their confidence back and look younger again. While, losing
                    hair is a common problem as we age, however, in some medical
                    conditions people can lose their hair before time. The good news is
                    that hair restoration has become a common treatment in such
                    conditions and is easily available in Lahore. In addition to this, Laser
                    Inn also provides Body Sculpture and Skin Care treatment
                    procedures. The clinic was established in 2000 and has performed
                    over 18000 successful procedures.</Typography>
                <Typography
                    className="InLahore-main-div-typography"
                    variant="subtitle2" gutterBottom component="div">The team of Laser Inn revolves around internationally renowned Dr.
                    Zulfiqar Tunio and assisted by well qualified experts. Laser Inn offers
                    the best FUE Hair Restoration in Lahore with belief in service quality,
                    innovation, value and satisfactory results. The strength of the clinic
                    is the dedicated team of professionals with vast local and
                    international experience. Importantly, Laser Inn has served some of
                    the most renowned celebrities in the showbiz industry as well. The
                    core aim of Laser Inn clinic is to set international standards for Hair
                    Restoration in Lahore and provide modern facilities at a
                    comparatively lesser cost.</Typography>
            </div>
            {/* </div> */}
        </div>
    )
}
