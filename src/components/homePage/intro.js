import { Box, Skeleton, Typography, keyframes, } from "@mui/material";
import ButtonOutline from "../buttons/buttonOutline";
import styled from "@emotion/styled/macro";
import IntroSlider from "../introSlider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
const ImageScroll = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    boxSizing: 'border-box',
    // width: '100%',
    // height: '100%',
    overflowY: 'hidden',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none',
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

const Intro = ({ language }) => {
    const [slide, setSlide] = useState(0)
    const [slideChanges, setSlideChanges] = useState(false)
    const [slides, setSlides] = useState(undefined)
    const [images, setImages] = useState(undefined)
    useEffect(() => {
        if (slides) {

            const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
                if (slide >= slides.length - 1) {
                    setSlide(0)
                    let parent = window.document.getElementById('scrollable')
                    let child = window.document.getElementById(images[0].id)
                    var childLeft = child.offsetLeft;
                    parent.scrollLeft = childLeft
                }
                else {
                    setSlide(slide + 1)
                    let parent = window.document.getElementById('scrollable')
                    let child = window.document.getElementById(images[slide + 1].id)
                    var childLeft = child.offsetLeft;
                    parent.scrollLeft = childLeft
                }
            }, 5000)

            return () => clearInterval(intervalId); //This is important
        }
    }, [slide, slides])
    const getSlides = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/landing-products?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })
        let response = await request.json()
        console.log(response)
        let tempslides = []
        let tempImages = []
        for (let i = 0; i < response.data.length; i++) {
            tempslides.push({
                image: `https://admin.gopatjewelry.com${response.data[i].attributes.media.data.attributes.url}`,
                name: response.data[i].attributes.title,
                subtitle: response.data[i].attributes.subtitle,
                nameFa: response.data[i].attributes.titleFa,
                subtitleFa: response.data[i].attributes.subtitleFa,
                pID: response.data[i].attributes.pID
            })
            tempImages.push({
                image: `https://admin.gopatjewelry.com${response.data[i].attributes.media.data.attributes.url}`,
                id: `num${i}`
            })
        }
        setSlides(tempslides)
        setImages(tempImages)
        console.log(tempslides)
    }
    useEffect(() => {
        getSlides()
    }, [])
    const [scrolledLeft, setScrolledLeft] = useState(0)
    const onScroll = () => {
        const scrollable = window.document.getElementById('scrollable')
        const winScroll = scrollable.scrollLeft;
        const width = scrollable.scrollWidth - scrollable.clientWidth
        const scrolled = (winScroll / width) * 100;
        setScrolledLeft(scrolled);
        const newSlide = images.find((slide) => 100 + window.document.getElementById(slide.id).offsetLeft >= winScroll)
        const index = images.indexOf(newSlide)
        console.log(index)
        if (index == -1 || index >= slides.length) { setSlide(slides.length - 1) } else { setSlide(index) }
    };
    useEffect(() => {
        if (window.document.getElementById('scrollable'))
            // Fires when the document view has been scrolled
            window.document.getElementById('scrollable').addEventListener("scroll", onScroll);

        // 
        // return () => window.document.getElementById('scrollable').removeEventListener("scroll", onScroll);
    }, [window.document.getElementById('scrollable')]);


    const navigate = useNavigate()
    return (
        <Box sx={{
            borderBottom: { xs: '1px solid #b3b3b3', md: 'none' },
            height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            width: '100%', boxSizing: 'border-box',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
        }}>{slides && images ? <>
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                width: { xs: '100%', md: 'calc(100% - 400px)' }, height: '100%',
            }}>
                <ImageScroll id="scrollable" sx={{
                    height: { xs: '100%', md: '100%' },
                    width: '100%',

                }}>
                    <Box sx={{
                        display: 'flex',
                        height: '100%', width: 'max-content',
                        boxSizing: 'border-box',
                        flexWrap: 'nowrap'
                    }}>
                        {images.map((image) => {
                            return (
                                <Image className={image.id} id={image.id} sx={{
                                    backgroundImage: `url(${image.image})`,
                                    width: { xs: '100vw', md: 'calc(100vw - 400px)' },
                                    aspectRatio: '4/3',

                                }} />
                            )
                        })}
                    </Box>
                </ImageScroll>

                <ProgressLineWrapper>
                    <ProgressLine sx={{ width: `${((slide + 1) / slides.length) * 100}%` }} />
                </ProgressLineWrapper>
            </Box>

            <Details sx={{
                minWidth: { xs: 'unset', md: '400px !important' },
                width: { xs: 'unset', md: '400px !important' },
                px: '60px', py: { xs: '50px', md: '60px' },
                transition: '500ms ease', boxSizing: 'border-box',
                animation: slideChanges ? `${slides[slide].animation} 1s ease-in 1` : undefined,
            }}>
                <Typography variant="h1" sx={{
                    whiteSpace: 'nowrap', transition: '500ms ease',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113b'
                }}>
                    {language == 'en' ? slides[slide].name : slides[slide].nameFa}
                </Typography>
                <Typography variant="h6" sx={{
                    mb: '16px',
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '16px', sm: '18px', md: '18px' }, fontStyle: 'italic', color: '#999999'
                }}>
                    {language == 'en' ? slides[slide].subtitle : slides[slide].subtitleFa}
                </Typography>
                <ButtonOutline text={language == 'en' ? 'Discover More' : 'بیشتر ببینید'} action={() => navigate(`/product/${slides[slide].name}/${slides[slide].pID}`)} />
            </Details>
        </> : <Skeleton width={'100vw'} height={'100%'} />
            }

        </Box >

    );
}

export default Intro;