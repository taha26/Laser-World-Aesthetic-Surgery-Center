import React from 'react'

import { Slider } from "../Slider/Slider"
import { TwoPicDiv } from "../TwoPicDiv/TwoPicDiv"
import { AfterBeforeSlider } from "../AfterBeforeSlider/AfterBeforeSlider"
import { Why } from "../Why/Why"
import { InLahore } from "../InLahore/InLahore"
import { FAQ } from "../FAQ/FAQ"

export const Home = () => {
    return (
        <div>
            <Slider />
            <TwoPicDiv />
            <AfterBeforeSlider />
            <Why />
            <InLahore />
            <FAQ />
        </div>
    )
}
