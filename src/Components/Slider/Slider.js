import React from 'react'

import { BookNow } from "../BookNow/BookNow"

import Carousel from "react-bootstrap/Carousel"

import Slide1 from "../../Assets/slide-1.jpg"

export const Slider = () => {
    return (
        <>
            <div>
                <Carousel
                // style={{
                //     // height: 100
                //     // ,
                //     border: "1px solid green"
                // }} 
                >
                    <Carousel.Item
                        style={{
                            height: "25em"
                        }}
                    >
                        <img
                            className="d-block w-100"
                            src={Slide1}
                            alt="First slide"
                        // width="100%"
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item
                        style={{
                            height: "25em"
                        }}
                    >
                        <img
                            className="d-block w-100"
                            src={Slide1}
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item
                        style={{
                            height: "25em"
                        }}
                    >
                        <img
                            className="d-block w-100"
                            src={Slide1}
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div >
            <BookNow />
        </>
    )
}
