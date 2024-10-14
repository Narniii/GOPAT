import { Box, CircularProgress, Typography, keyframes, styled } from "@mui/material";
import stars from '../assets/Tishtar-Blog.jpg'
import boutique from '../assets/boutique.svg'
import hourglass from '../assets/hourglass.svg'
import polish from '../assets/Polishing.svg'
import durable from '../assets/Durable.svg'
import { MenuTabOpenable } from "../components/menuTab";
import { HourglassBottom, HourglassEmpty, Light, Security, SecurityOutlined, ShieldOutlined, StarBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import '../App.css'
import ButtonWhatsapp from "../components/buttons/buttonWhatsapp";
import ButtonOutline from "../components/buttons/buttonOutline";
import ButtonFillIcon from "../components/buttons/buttonFillIcon";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const StarSection = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    width: '100%', boxSizing: 'border-box',
    alignItems: 'center',
}))
const StarImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    // backgroundImage: `url(${stars})`,
}))
const DesktopImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundColor: '#999',
    // width: '100%',
    // height: 'calc(100vh - 188px)',
    // height: '840px',
    aspectRatio: '1/1'

}))
const DesktopImagesScroll = styled(Box)(({ theme }) => ({
    flexDirection: 'column',
    // flexWrap: 'nowrap',
    boxSizing: 'border-box', gap: '8px',
    width: '100%',
    // height: 'calc(100vh - 128px)',
    // overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //     display: 'none',
    // },
    // '&::-webkit-scrollbar-thumb': {
    //     display: 'none',
    // },
    // '&::-webkit-scrollbar-button': {
    //     display: 'none',
    // },
}))
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
    justifyContent: 'start', alignItems: 'center', width: 'max-content',
    width: '100%',
    "@media (max-width: 900px)": {
        width: '100%'
    },

}))
const LineDesktp = styled(Box)(({ theme }) => ({
    height: '1px', backgroundColor: '#d9d9d9'
}))
const DetailsExtra = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
    justifyContent: 'start', alignItems: 'center',
}))
const ExtraImage = styled(Box)(({ theme }) => ({
    borderRadius: '100%', width: '64px', height: '64px', backgroundColor: '#f5f5f5',
    display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', padding: '16px',

}))
const ExtraImageIcon = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
    '&:hover': {
        animation: `${zoomout} 3s ease-in infinite`,
    }

}))
const MobileImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundColor: '#999',
    width: '100vw',
    // height: 'calc(100vh - 188px)',
    height: '100%',
    aspectRatio: '1/1'
}))
const MobileImagesScroll = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    // height: 'calc(100vh - 70px)',
    overflowY: 'hidden',
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
const zoomout = keyframes`
  0% {transform: scale(1);}
  50% {transform: scale(0.67);}
  100% {transform: scale(1);}
`

const ProductSingle = ({ language }) => {

    // const listenScrollEvent = e => {
    //     let insidePanel = window.document.getElementById('scrollable-inside')
    //     let outsidePanel = window.document.getElementById('scrollable-outside')
    //     if (insidePanel.scrollTop === (insidePanel.scrollHeight - insidePanel.offsetHeight)) {
    //         outsidePanel.classList.remove("non-scrollable")
    //         outsidePanel.classList.add("scrollable")
    //     } else {
    //         outsidePanel.classList.add("non-scrollable")
    //         outsidePanel.classList.remove("scrollable")
    //     }
    // }

    // useEffect(() => {
    //     if (window.document.getElementById("scrollable-outside") && window.document.getElementById("scrollable-inside")) {
    //         window.document.getElementById("scrollable-outside").addEventListener('scroll', listenScrollEvent)
    //         window.document.getElementById("scrollable-inside").addEventListener('scroll', listenScrollEvent)
    //     }
    // }, [window.document.getElementById("scrollable-outside"), window.document.getElementById("scrollable-inside")])
    const params = useParams()
    const id = params.id
    const [product, setProduct] = useState(undefined)
    const [images, setImages] = useState(undefined)
    const [blog, setBlog] = useState(undefined)
    const [err, setErr] = useState(undefined)
    const navigate = useNavigate()
    const getProduct = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/products/${id}?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })

        let response = await request.json()
        console.log(response)
        if (response.data) {
            setProduct(response.data.attributes)
            let imgs = []
            for (let i = 0; i < response.data.attributes.medias.data.length; i++) {
                imgs.push(`https://admin.gopatjewelry.com${response.data.attributes.medias.data[i].attributes.url}`)
            }
            setImages(imgs)

        } else {
            if (response.error.status == 404) {
                setErr('Product Not Found')
            }
        }
    }
    const getBlog = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/blogs/1?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })

        let response = await request.json()
        console.log(response)
        if (response.data) {
            setBlog(response.data)
        } else {
        }
    }

    useEffect(() => {
        getProduct()
        getBlog()
    }, [])

    // useEffect(() => {
    //     if (product && images) {
    //         const body = document.getElementById("body-inner");
    //         body.innerHTML = product.body
    //         const diamond = document.getElementById("diamond-inner");
    //         diamond.innerHTML = product.diamond
    //         const sizes = document.getElementById("sizes-inner");
    //         sizes.innerHTML = product.sizes
    //         const typo = document.getElementById("typo-inner");
    //         typo.innerHTML = product.typo
    //     }
    // }, [product, images])
    const [slide, setSlide] = useState(0)
    const [scrolledLeft, setScrolledLeft] = useState(0)
    const onScroll = () => {
        const scrollable = window.document.getElementById('scrollable')
        const winScroll = scrollable.scrollLeft;
        const width = scrollable.scrollWidth - scrollable.clientWidth
        const scrolled = (winScroll / width) * 100;
        setScrolledLeft(scrolled)
        const newSlide = images.find((slide) => 100 + window.document.getElementById(images.indexOf(slide)).offsetLeft >= winScroll)
        const index = images.indexOf(newSlide)
        if (index == -1) { setSlide(images.length + 1) } else { setSlide(index) }

    };
    useEffect(() => {
        // Fires when the document view has been scrolled
        if (product && images && window.document.getElementById('scrollable')) {

            window.document.getElementById('scrollable').addEventListener("scroll", onScroll);

            // 
            // return () => window.document.getElementById('scrollable').removeEventListener("scroll", onScroll);
        }
    }, [product, images]);


    return (<Box
        // id="scrollable-outside"
        sx={{
            padding: { xs: '0 0 50px', md: '32px' },
            // height: { xs: 'unset', md: 'calc(100vh - 128px)' },
            display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: '100%', alignItems: 'center',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
                display: 'none'
            },
            '&::-webkit-scrollbar-button': {
                display: 'none'
            },

        }}>
        {product && images ?
            <Box
                // id="scrollable-inside" 
                sx={{
                    // position: 'relative',
                    display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                    width: '100%', flexWrap: 'nowrap',
                    height: { xs: 'unset', md: 'calc(100vh - 128px)' },
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        display: 'none'
                    },
                    '&::-webkit-scrollbar-button': {
                        display: 'none'
                    },

                }}>
                <DesktopImagesScroll sx={{
                    display: { xs: 'none', md: 'block' },
                    // position: 'relative',
                }}>
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                        boxSizing: 'border-box', gap: '8px',
                        // height: '100%',
                        width: '100%',
                    }}>
                        {images.map((image, index) => {
                            return (
                                <DesktopImage key={index} sx={{
                                    backgroundImage: `url(${image})`,
                                    height: 'calc(100vh - 128px)'
                                }} />
                            )
                        })}
                    </Box>
                </DesktopImagesScroll>

                <MobileImagesScroll
                    id="scrollable"
                    sx={{
                        display: { xs: 'block', md: 'none' }, flexDirection: 'column',
                        // height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)' },
                        height: '420px'
                    }}>
                    <Box sx={{
                        display: 'flex',
                        height: '100%',
                        boxSizing: 'border-box',
                        width: 'max-content', flexWrap: 'nowrap'
                    }}>
                        {images.map((image, index) => {
                            return (
                                <MobileImage id={index} key={index} sx={{
                                    backgroundImage: `url(${image})`,
                                }} />
                            )
                        })}
                    </Box>
                </MobileImagesScroll>
                <ProgressLineWrapper sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <ProgressLine sx={{
                        // width: `${scrolledLeft}%`
                        width: `${((slide + 1) / images.length) * 100}%`
                    }} />
                </ProgressLineWrapper>

                <Details
                    sx={{
                        position: { xs: 'unset', md: 'sticky' }, right: '0', top: '0',
                        padding: { xs: '0px', md: '0px 24px', lg: '0px 32px' },
                        width: '100%', height: '100%',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            display: 'none'
                        },
                        '&::-webkit-scrollbar-button': {
                            display: 'none'
                        },
                    }}
                >
                    <Details
                        sx={{
                            padding: { xs: '0px 16px', sm: '0px 24px', md: '0px' }
                        }}
                    >
                        <Typography variant="h1" sx={{
                            mt: '50px',
                            fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500,
                            color: '#08113b'
                        }}>
                            {language == 'en' ? product.name : product.nameFa}
                        </Typography>
                        <Typography variant="p" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '14px', sm: '16px', md: '16px' }, fontWeight: 400,
                            color: '#b3b3b3'
                        }}>
                            {language == 'en' ? product.details : product.detailsFa}
                        </Typography>
                        <Typography variant="p" sx={{
                            whiteSpace: 'nowrap', my: { xs: '16px', sm: '16px', md: '16px' },
                            fontSize: { xs: '16px', sm: '16px', md: '18px' }, fontWeight: 500,
                            color: '#08113b'
                        }}>
                            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} T
                        </Typography>
                        <ButtonWhatsapp maxwidth={'290px'} width={'100%'} mb={'8px'} text={language == 'en' ? 'Order Via Whatsapp' : 'سفارش در واتساپ'} />
                        <ButtonFillIcon maxwidth={'290px'} width={'100%'} icon={boutique} text={language == 'en' ? 'Find A Boutique' : 'نزدیک ترین فروشگاه'} action={() => navigate('/contact-us')} />
                    </Details>
                    <LineDesktp sx={{ width: '100%', my: '32px' }} />
                    <Details
                        sx={{
                            padding: { xs: '0px 16px', sm: '0px 24px', md: '0px' }
                        }}
                    >
                        <Box sx={{
                            boxSizing: 'border-box', px: { md: '24px', lg: '32px' },
                            display: 'flex', flexDirection: 'column', mb: '8px',
                            width: '100%', gap: { xs: '8px', sm: '8px', md: '8px' }
                        }}>
                            <Typography variant="p" sx={{
                                whiteSpace: 'nowrap',
                                fontSize: { xs: '14px', sm: '16px', md: '16px' }, fontWeight: 400,
                                color: '#b3b3b3', borderBottom: '1px solid #d9d9d9',
                                pb: { xs: '8px', sm: '8px', md: '8px' }
                            }}>
                                {language == 'en' ? 'Craftmanship Info' : 'استادکاری'}
                            </Typography>
                            <MenuTabOpenable
                                text={language == 'en' ? 'Body' : 'بدنه'} id={'body-info'} pb={{ xs: '8px', sm: '8px', md: '8px' }}
                                children={<div id="body-inner" style={{ width: '100%', color: '#666', fontWeight: 500 }} >
                                    {language == 'en' ? product.body : product.bodyFa}
                                </div>}
                            />
                            <MenuTabOpenable text={language == 'en' ? 'Stone' : 'سنگ'} id={'diamond-info'} pb={{ xs: '8px', sm: '8px', md: '8px' }}
                                children={<div id="diamond-inner" style={{ width: '100%', color: '#666', fontWeight: 500 }} >
                                    {language == 'en' ? product.diamond : product.diamondFa}
                                </div>}
                            />
                            <MenuTabOpenable text={language == 'en' ? 'Size Chart' : 'راهنمای اندازه'} id={'size-info'} pb={{ xs: '8px', sm: '8px', md: '8px' }}
                                children={<div id="sizes-inner" style={{ width: '100%', color: '#666', fontWeight: 500 }} >
                                    {language == 'en' ? product.sizes : product.sizesFa}
                                </div>}
                            />
                            <MenuTabOpenable text={language == 'en' ? 'Typography' : 'تایپوگرافی'} id={'typo-info'} pb={{ xs: '8px', sm: '8px', md: '8px' }}
                                children={<div id="typo-inner" style={{ width: '100%', color: '#666', fontWeight: 500 }} >
                                    {language == 'en' ? product.typo : product.typoFa}
                                </div>}
                            />
                        </Box>
                        <Box sx={{
                            mt: '8px',
                            boxSizing: 'border-box', px: { md: '24px', lg: '32px' },
                            display: 'flex', flexDirection: 'row', mb: '16px',
                            width: '100%', gap: '32px', justifyContent: 'center'
                        }}>
                            <DetailsExtra>
                                <ExtraImage>
                                    <ExtraImageIcon sx={{ backgroundImage: `url(${hourglass})`, width: '32px', height: '32px' }} />
                                </ExtraImage>
                                <Typography sx={{
                                    fontSize: '14px',
                                    color: '#08113b', overflowWrap: 'break-word', textAlign: 'center'
                                }}>
                                    {language == 'en' ?
                                        'Timeless Design' : 'طراحی بی زمان'}
                                </Typography>
                            </DetailsExtra>
                            <DetailsExtra>
                                <ExtraImage>
                                    <ExtraImageIcon sx={{ backgroundImage: `url(${polish})`, width: '32px', height: '32px' }} />
                                </ExtraImage>
                                <Typography sx={{
                                    fontSize: '14px',
                                    color: '#08113b', overflowWrap: 'break-word', textAlign: 'center'
                                }}>
                                    {language == 'en' ? 'Free Polishing' : 'پولیش رایگان'}
                                </Typography>
                            </DetailsExtra>
                            <DetailsExtra>
                                <ExtraImage>
                                    <ExtraImageIcon sx={{ backgroundImage: `url(${durable})`, width: '32px', height: '32px' }} />
                                </ExtraImage>
                                <Typography sx={{
                                    fontSize: '14px',
                                    color: '#08113b', overflowWrap: 'break-word', textAlign: 'center'
                                }}>
                                    {language == 'en' ? 'Durable Material' : 'کیفیت پایدار'}
                                </Typography>
                            </DetailsExtra>
                        </Box>
                    </Details>
                </Details>
            </Box>
            : err ? <Typography sx={{ color: "#08113b", fontWeight: 500, fontSize: '20px', mt: '64px' }}>{err}</Typography> :
                <CircularProgress sx={{ color: '#08113b' }} />}


        {blog ?
            <StarSection sx={{
                gap: { xs: '24px', md: '32px' },
                padding: { xs: '64px 16px 0', sm: '128px 24px 0', md: '128px 32px 0' },

            }}>
                <StarImage sx={{
                    width: { xs: '100%', sm: '500px', md: '850px' },
                    height: { xs: '245px', sm: '430px', md: '680px' },
                    backgroundImage: `url('https://admin.gopatjewelry.com${blog.attributes.coverimage.data[0].attributes.url}')`
                }} />
                <Box sx={{
                    display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
                    alignItems: 'center'
                }}>
                    <Typography
                        sx={{ color: '#08113b', fontWeight: '500', fontSize: { xs: '16px', sm: '18px', }, }}>
                        {language == 'en' ? blog.attributes.title : blog.attributes.titleFa}
                    </Typography>
                    <Typography sx={{
                        mb: '16px',
                        width: { xs: '100%', sm: '400px' },
                        textAlign: 'center', overflowWrap: 'break-word',
                        fontSize: { xs: '14px', sm: '16px', md: '18px' }, color: '#999999'
                    }}>
                        {language == 'en' ? blog.attributes.description : blog.attributes.descriptionFa}
                    </Typography>
                    <ButtonOutline text={language == 'en' ? 'read more' : 'بیشتر بخوانید'} action={() => navigate(`/blog/${blog.id}/${blog.attributes.title}`)} />
                </Box>
            </StarSection>
            : <CircularProgress sx={{ color: '#08113b' }} />}

    </Box >);
}

export default ProductSingle;