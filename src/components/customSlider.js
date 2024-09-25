import React from 'react'
import Slider from "react-slick";
import { Box } from '@mui/material';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import { ArrowBack, ArrowBackIos, ArrowBackIosNew, ArrowForward, ArrowForwardIos, ArrowRight } from '@mui/icons-material';
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <Box
            sx={{
                display: "flex",
                background: '#999',
                width: 'max-content',
                height: 'max-content',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white', position: 'absolute', right: 0,
                cursor: 'pointer'
                , zIndex: 999,
                // transform: 'translateY(-100%)',
                top: { xs: '30%', sm: '35%', lg: '40%' },
                p: '5px',
                opacity: '0.7'
            }}
            onClick={onClick}
        >
            <ArrowForwardIos sx={{ color: 'white', fontSize: { xs: '16px', sm: '24px', md: '32px' } }} />
        </Box>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <Box
            sx={{
                display: "flex",
                background: '#999',
                width: 'max-content',
                height: 'max-content',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white', position: 'absolute', left: 0,
                cursor: 'pointer'
                , zIndex: 999,
                // transform: 'translateY(-100%)',
                top: { xs: '30%', sm: '35%', lg: '40%' },
                p: '5px',
                opacity: '0.7'
            }}
            onClick={onClick}
        >
            <ArrowBackIosNew sx={{ color: 'white', fontSize: { xs: '16px', sm: '24px', md: '32px' } }} />
        </Box>
    );
}
export default function CustomSlider({ children, slidesCount, slidesCountTablet, items, theme }) {
    const settings = {
        infinite: false,
        dots: false,
        slidesToShow: slidesCount ? slidesCount : 4,
        slidesToScroll: slidesCount ? slidesCount : 4,
        // slidesToShow: children.length < 5 ? children.length + 1 : slidesCount ? slidesCount : 4,
        // slidesToScroll: children.length < 5 ? children.length + 1 : slidesCount ? slidesCount : 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: false,
        arrows: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    // slidesToShow: children.length < 2 ? children.length : 2,
                    // slidesToScroll: children.length < 2 ? children.length : 2,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: children.length < 2 ? children.length : 2,
                    slidesToScroll: children.length < 2 ? children.length : 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: children.length < 2 ? children.length : 2,
                    slidesToScroll: children.length < 2 ? children.length : 2,
                }
            }
        ]

    };
    return (
        <>
            {/* <div className=""> */}
            <Slider className='p-0' {...settings}>
                {children}
            </Slider>
            {/* </div> */}
        </>
    )

}
