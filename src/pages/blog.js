import { Box, CircularProgress, styled, Typography } from "@mui/material";
import Header from "../components/header";
import contact from '../assets/Tishtar-unisex-bangle.jpg'
import samcenter from '../assets/Sam-Center.jpg'
import avacenter from '../assets/Ava-Platt.jpg'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = styled(Box)(({ theme }) => ({
    display: 'flex', textAlign: 'center', boxSizing: 'border-box',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))

const Blog = ({ language }) => {
    const params = useParams()
    const id = params.id

    const [blog, setBlog] = useState(undefined)
    const [images, setImages] = useState(undefined)
    const getBlog = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/blogs/${id}?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })

        let response = await request.json()
        console.log(response)
        setBlog(response.data.attributes)
        let imgs = []
        for (let i = 0; i < response.data.attributes.medias.data.length; i++) {
            imgs.push(`https://admin.gopatjewelry.com${response.data.attributes.medias.data[i].attributes.url}`)
        }
        setImages(imgs)
    }
    useEffect(() => {
        getBlog()
    }, [])
    useEffect(() => {
        if (blog) {
            if (language == 'en') {
                const text1 = document.getElementById("text1");
                text1.innerHTML = blog.text1
                const text2 = document.getElementById("text2");
                text2.innerHTML = blog.text2
                const text3 = document.getElementById("text3");
                text3.innerHTML = blog.text3
            } else {
                const text1Fa = document.getElementById("text1Fa");
                text1Fa.innerHTML = blog.text1Fa
                const text2Fa = document.getElementById("text2Fa");
                text2Fa.innerHTML = blog.text2Fa
                const text3Fa = document.getElementById("text3Fa");
                text3Fa.innerHTML = blog.text3Fa
            }
        }
    }, [blog, language])
    return (
        <> {
            blog && images ?
                <>
                    <Header hideDetailsOnMobile={false} images={images}
                        title={language == 'en' ? blog.title : blog.titleFa}
                        subtitle={language == 'en' ? blog.subtitle : blog.subtitleFa} />

                    <Box sx={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',
                        gap: { xs: '16px', md: '32px' },
                        my: { xs: '16px', md: '64px' },
                        boxSizing: 'border-box',
                        px: { xs: '32px', md: '128px', lg: '180px' }
                    }}>
                        {language == 'en' ?
                            <Typography
                                id='text1'
                                sx={{
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                                }}>
                            </Typography>
                            :
                            <Typography
                                id='text1Fa'
                                sx={{
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                                }}>
                            </Typography>
                        }
                        <Box sx={{
                            width: { xs: '100%', sm: '450px', md: '550px' },
                            backgroundImage: `url(${images[1]})`,
                            aspectRatio: { xs: '3/4', md: '3/4' },
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />
                        {language == 'en' ?
                            <Typography
                                id='text2'
                                sx={{
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                                }}>
                            </Typography>
                            :
                            <Typography
                                id='text2Fa'
                                sx={{
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                                }}>
                            </Typography>
                        }
                        <Box sx={{
                            width: { xs: '100%', sm: '450px', md: '550px' },
                            backgroundImage: `url(${images[2]})`,
                            aspectRatio: { xs: '3/4', md: '3/4' },
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />
                        {language == 'en' ?
                            <Typography
                                id='text3'
                                sx={{
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                                }}>
                            </Typography>
                            :
                            <Typography
                                id='text3Fa'
                                sx={{
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                                }}>
                            </Typography>
                        }
                        <Box sx={{
                            width: { xs: '100%', sm: '450px', md: '550px' },
                            backgroundImage: `url(${images[3]})`,
                            aspectRatio: { xs: '3/4', md: '3/4' },
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />

                    </Box>
                </> : <CircularProgress sx={{ color: '#08113b' }} />
        }
        </>
    );
}

export default Blog;