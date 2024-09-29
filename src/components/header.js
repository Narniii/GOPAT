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
        '@media (max-width: 900px)': {
            display: 'none',
        },
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
    // display: 'flex'
}))
const ProgressLine = styled(Box)(({ theme }) => ({
    height: '8px',
    background: '#08113b',
    color: '#08113b',
    border: 'none',
    borderRadius: '0px',
    transition: '500ms ease'

}))

const Header = ({ images, title, subtitle, description, hideDetailsOnMobile }) => {
    const [slide, setSlide] = useState(0)
    let slides = []
    for (let i = 0; i < images.length; i++) {
        slides.push({ image: images[i], id: `num${i}` })
    }
    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            if (slide >= slides.length - 1) {
                setSlide(0)
                let parent = window.document.getElementById('scrollable')
                let child = window.document.getElementById(slides[0].id)
                var childLeft = child.offsetLeft;
                parent.scrollLeft = childLeft
            }
            else {
                setSlide(slide + 1)
                let parent = window.document.getElementById('scrollable')
                let child = window.document.getElementById(slides[slide + 1].id)
                var childLeft = child.offsetLeft;
                parent.scrollLeft = childLeft
            }
        }, 5000)
        return () => clearInterval(intervalId); //This is important
    }, [slide, slides])

    const [scrolledLeft, setScrolledLeft] = useState(0)
    const onScroll = () => {
        const scrollable = window.document.getElementById('scrollable')
        const winScroll = scrollable.scrollLeft;
        const width = scrollable.scrollWidth - scrollable.clientWidth
        const scrolled = (winScroll / width) * 100;
        setScrolledLeft(scrolled);
        const newSlide = slides.find((slide) => window.document.getElementById(slide.id).offsetLeft >= winScroll)
        const index = slides.indexOf(newSlide)
        if (index == -1) { setSlide(slides.length + 1) } else { setSlide(index) }
    };
    useEffect(() => {
        // Fires when the document view has been scrolled
        window.document.getElementById('scrollable').addEventListener("scroll", onScroll);

        // 
        // return () => window.document.getElementById('scrollable').removeEventListener("scroll", onScroll);
    }, []);


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
                    height: '100%', width: 'max-content',
                    boxSizing: 'border-box',
                    flexWrap: 'nowrap'
                }}>
                    {slides.map((slide) => {
                        return (
                            <Image className={slide.id} id={slide.id} sx={{
                                backgroundImage: `url(${slide.image})`,
                                width: { xs: '100vw', md: 'calc(100vw - 420px)' },
                                aspectRatio: { xs: '1/1', md: '4/3' },

                            }} />
                        )
                    })}
                </Box>
            </ImageScroll>
            <ProgressLineWrapper sx={{ display: { xs: 'flex', md: 'none' } }}>
                <ProgressLine sx={{
                    // width: `${scrolledLeft}%`
                    width: `${((slide + 1) / slides.length) * 100}%`
                }} />
            </ProgressLineWrapper>
            <Details sx={{
                minWidth: { xs: 'unset', md: '400px !important' },
                width: { xs: 'unset', md: '400px !important' },
                display: { xs: hideDetailsOnMobile ? 'none' : 'flex', md: 'flex' },
                px: { xs: '32px', md: '32px' },
                my: { xs: '50px', md: '60px' },
                gap: { xs: '8px', sm: '12px', md: '16px' },
                boxSizing: 'border-box'
            }}>
                <Typography variant="h1" sx={{
                    // whiteSpace: 'nowrap',
                    textAlign:'center',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                }}>
                    {title}</Typography>
                <Typography variant="h1" sx={{
                    textAlign:'center',
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