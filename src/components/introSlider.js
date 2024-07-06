import React from 'react'
import Slider from "react-slick";
import { Box } from '@mui/material';
// import '../introSlider.css'
export default function IntroSlider({ children, slidesCount, slidesCountTablet, items, theme }) {
    const settings = {
        infinite: false,
        // dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,

    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )

}
