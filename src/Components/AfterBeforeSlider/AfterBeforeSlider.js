import React from 'react'
import './AfterBeforeSlider.css'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// import Carousel from 'react-elastic-carousel'



import slide1 from "../../Assets/slide1.png"
import slide2 from "../../Assets/slide2.png"
import slide3 from "../../Assets/slide3.png"


export const AfterBeforeSlider = () => {
    const handleDragStart = (e) => e.preventDefault();

    const items = [

        <img src={slide1} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />,
        <img src={slide2} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />,
        <img src={slide3} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />,
    ]
        // const breakPoints = [
        //     { width: '1', itemsToShow: 1 },
        //     { width: '500', itemsToShow: 3 },
        //     { width: '768' || '1200', itemsToShow: 3 },
        //     // { width: '500', itemsToShow: 1 },
        // ]
        ;


    return (
        <>
            {/* <Carousel breakPoints={breakPoints} autoPlay={true} >
                <img src={slide1} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />
                <img src={slide2} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />
                <img src={slide3} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />
                <img src={slide3} className="AfterBeforeSliderImage" onDragStart={handleDragStart} />
            </Carousel> */}
            <div className="AfterBeforeSliderHeading">
                <h5>The Excellence We Deliver</h5>
                <h1>FUE Hair Transplant Results</h1>
            </div>
            <div className="containerAs">
                <div className="silder"
                    style={{
                        // width: "1200px",
                        // height: "100px" ,
                        // border: '1px solid',
                        marginLeft: "15%",
                        marginRight: "15%",
                    }}
                >
                    <AliceCarousel
                        infinite={true}
                        autoPlayInterval={1800}
                        autoWidth={true}
                        disableButtonsControls={true}
                        autoPlay={true}
                        mouseTracking
                        // disableDotsControls={true}
                        items={items}
                        className="Asilder"
                    />
                </div>
            </div>
        </>
    );
}
