import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";
import { useEffect, useState } from "react";

const Details = styled(Box)(({ theme }) => ({
    // display: 'flex',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))
const ImageScroll = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    boxSizing: 'border-box',
    width: '100%',
    // height: '100%',
    overflowY: 'hidden',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
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
const Image = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center', backgroundColor: '#d9d9d9',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    height: '100%',
    // aspectRatio: '1/1'
}))
const ProgressLineWrapper = styled(Box)(({ theme }) => ({
    background: 'transparent',
    height: '8px',
    width: '100%',

}))
const ProgressLine = styled(Box)(({ theme }) => ({
    height: '8px',
    width: '8px',
    background: '#08113b',
    color: '#08113b',
    border: 'none',
    borderRadius: '0px'

}))


const Header = ({ images, title, subtitle, description, hideDetailsOnMobile }) => {
    const [slide, setSlide] = useState(0)

    const slides = [
        { image: images[0], id: 'one' },
        { image: images[1], id: 'two' },
        { image: images[2], id: 'three' },
    ]

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
    useEffect(() => {

        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            let parent = window.document.getElementById('scrollable')
            let child = window.document.getElementById(slides[slide].id)
            var childLeft = child.offsetLeft;
            parent.scrollLeft = childLeft
        }, 5000)

        return () => clearInterval(intervalId); //This is important

    }, [slide])

    return (
        <Box sx={{
            // height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            height: { xs: '100%', md: 'calc(100vh - 60px)' },
            width: '100%', boxSizing: 'border-box',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            // mb: { xs: 'none', md: '60px' }
        }}>
            <ImageScroll id="scrollable" sx={{
                height: { xs: '420px', md: '100%' },
            }}>
                <Box sx={{
                    display: 'flex',
                    height: '100%', width: { xs: 'max-content' },
                    boxSizing: 'border-box',
                    flexWrap: 'nowrap'
                }}>
                    {slides.map((slide) => {
                        return (
                            <Image className={slide.id} id={slide.id} sx={{
                                backgroundImage: `url(${slide.image})`,
                                width: { xs: '100vw', md: 'calc(100vw - 400px)' },
                                aspectRatio: { xs: '1/1', md: '4/3' },

                            }} />
                        )
                    })}
                    {/* <Image sx={{
                        backgroundImage: `url(${slides[slide].image})`,
                        width: { xs: '100vw', md: '100%' },
                        aspectRatio: { xs: '1/1', md: '4/3' },

                    }} /> */}

                </Box>
                {/* <ProgressLineWrapper>
                    <ProgressLine />
                </ProgressLineWrapper> */}
            </ImageScroll>
            <Details sx={{
                width: { xs: 'unset', md: '400px' },
                display: { xs: hideDetailsOnMobile ? 'none' : 'flex', md: 'flex' },
                mx: { xs: '32px', md: '100px' },
                my: { xs: '50px', md: '60px' },
                gap: { xs: '8px', sm: '12px', md: '16px' }
            }}>
                <Typography variant="h1" sx={{
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                }}>
                    {title}</Typography>
                <Typography variant="h1" sx={{
                    whiteSpace: 'nowrap', fontWeight: 500,
                    fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                }}>
                    {subtitle}
                </Typography>
            </Details>
        </Box>

    );
}

export default Header;