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

const Blog = () => {
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
    return (
        <> {
            blog && images ?
                <>
                    <Header hideDetailsOnMobile={false} images={images}
                        title={blog.title} subtitle={blog.subtitle} />

                    <Box sx={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',
                        gap: { xs: '16px', md: '32px' },
                        my: { xs: '16px', md: '64px' },
                        boxSizing: 'border-box',
                        px: { xs: '32px', md: '128px', lg: '180px' }
                    }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                            }}>
                            {blog.text1}
                        </Typography>
                        <Box sx={{
                            width: { xs: '100%', sm: '450px', md: '550px' },
                            backgroundImage: `url(${images[1]})`,
                            aspectRatio: { xs: '1/1', md: '3/4' },
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                            }}>
                            {blog.text2}
                        </Typography>
                        <Box sx={{
                            width: { xs: '100%', sm: '450px', md: '550px' },
                            backgroundImage: `url(${images[2]})`,
                            aspectRatio: { xs: '1/1', md: '3/4' },
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />
                        <Typography
                            sx={{
                                fontSize: { xs: '14px', md: '16px' }, fontWeight: 500, color: '#08113B', textAlign: 'center'
                            }}>
                            {blog.text3}
                        </Typography>

                    </Box>
                </> : <CircularProgress sx={{ color: '#08113b' }} />
        }
        </>
    );
}

export default Blog;