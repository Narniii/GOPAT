import { Box, Typography, keyframes, } from "@mui/material";
import ButtonOutline from "../buttons/buttonOutline";
import styled from "@emotion/styled/macro";
import bangle from '../../assets/Landing.jpg'
import necklace from '../../assets/product2.svg'
import IntroSlider from "../introSlider";
import { useEffect, useState } from "react";
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))

const zoomout = keyframes`
  0% {transform: scale(1);}
  50% {transform: scale(0.67);}
  100% {transform: scale(1);}
`

const ImagesScroll = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    overflowY: 'hidden',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        // display: 'none',
        background: 'transparent',
        height: '8px',
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        height: '8px',
        width: '8px',
        background: '#08113b',
        color: '#08113b',
        border: 'none',
        borderRadius: '0px'
    },
    '&::-webkit-scrollbar-button': {
        display: 'none'
    },
}))
const fade = keyframes`
  0% {
    opacity:1;
  }
  50% {
    opacity:0;
  }
  100% {
    opacity:1;
  }

`
const grow = keyframes`
  0% {
    width:0px;
  }
  100% {
    width:100%;
  }
`
const ProgressLineWrapper = styled(Box)(({ theme }) => ({
    background: 'transparent',
    height: '8px',
    width: '100%',
    display: 'flex'
}))
const ProgressLine = styled(Box)(({ theme }) => ({
    height: '8px',
    background: '#08113b',
    color: '#08113b',
    border: 'none',
    borderRadius: '0px',
    transition: '500ms ease'

}))

const Intro = () => {
    const [slide, setSlide] = useState(0)
    const [slideChanges, setSlideChanges] = useState(false)
    const slides = [
        { image: bangle, name: 'tishtar bangle', animation: fade },
        { image: necklace, name: 'tishtar necklace', animation: fade }
    ]
    const pgwidth = (slide + 1 / slides.length) / (1 / 100)
    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            if (slide >= slides.length - 1) {
                setSlide(0)
            }
            else {
                setSlide(slide + 1)
            }
        }, 5000)

        return () => clearInterval(intervalId); //This is important
    }, [slide, slides])
    // useEffect(() => {
    //     if (slide) {
    //         setSlideChanges(!slideChanges)
    //     }
    // }, [slide])
    return (
        <Box sx={{
            borderBottom: { xs: '1px solid #b3b3b3', md: 'none' },
            height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            width: '100%', boxSizing: 'border-box',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', }}>
                <Box sx={{
                    height: '100%', width: { xs: '100vw', md: 'calc(100vw - 400px)' },
                    aspectRatio: '4/3', transition: '500ms ease',
                    backgroundImage: `url(${slides[slide].image})`,
                    justifySelf: 'center', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                    animation: slideChanges ? `${grow} 1s ease-in 1` : undefined,

                }} />
                <ProgressLineWrapper>
                    <ProgressLine sx={{ width: `${pgwidth}%` }} />
                </ProgressLineWrapper>
            </Box>

            <Details sx={{
                minWidth: { xs: 'unset', md: '400px !important' },
                // width: { xs: 'unset', md: '400px !important' },
                px: '60px', py: { xs: '50px', md: '60px' },
                transition: '500ms ease', boxSizing: 'border-box',
                animation: slideChanges ? `${slides[slide].animation} 1s ease-in 1` : undefined,
            }}>
                <Typography variant="h1" sx={{
                    whiteSpace: 'nowrap', transition: '500ms ease',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113b'
                }}>
                    {slides[slide].name}
                </Typography>
                <Typography variant="h6" sx={{
                    mb: '16px',
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '16px', sm: '18px', md: '18px' }, fontStyle: 'italic', color: '#999999'
                }}>
                    In dialogue with Persepolis</Typography>
                <ButtonOutline text={'Discover More'} />
            </Details>
        </Box>

    );
}

export default Intro;