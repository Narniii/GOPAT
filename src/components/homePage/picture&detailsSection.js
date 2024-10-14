import { Box, CircularProgress, Typography } from "@mui/material";
import ButtonOutline from "../buttons/buttonOutline";
import jamshid from '../../assets/Persepolis.jpg'
import gopat from '../../assets/Gopat.jpg'
import nader from '../../assets/Nader-Mohaddes.jpg'
import stars from '../../assets/Tishtar-Blog.jpg'
import diamond from '../../assets/Diamond.jpg'
import diamondRough from '../../assets/Rough-Diamond.jpg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PicsAndDets = ({ language }) => {
    const [blogs, setBlogs] = useState(undefined)
    const navigate = useNavigate()
    const getBlogs = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/blogs?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })

        let response = await request.json()
        console.log(response)
        if (response.data) {
            setBlogs(response.data)
        } else {
            setBlogs(undefined)
        }
    }
    useEffect(() => {
        getBlogs()
    }, [])


    return (
        <>{
            blogs ?
                <Box sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                    width: '100%', px: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box', mb: { xs: '50px', md: '60px' },
                }}>
                    {/* section one */}
                    <Box sx={{
                        display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '16px', md: '32px' },
                        width: '100%', justifyContent: { xs: 'unset', sm: 'center' }, boxSizing: 'border-box', px: { sm: '0', lg: '128px' }
                    }}>
                        <Box sx={{
                            // height: { xs: '437px', sm: '421px', md: '700px', lg: '814px' },
                            // maxWidth: { xs: '100%', sm: '317px', md: '500px', lg: '610px' },
                            width: '100%',
                            display: 'block',
                            aspectRatio: '1/1',
                            mt: { xs: '0', md: '32px' },
                            backgroundImage: `url(${gopat})`,
                            justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />
                        <Box sx={{
                            display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '32px' },
                            // width: { xs: '100%', sm: '100%', lg: 'calc(100% - 610px)' },
                            // width: { xs: '100%', sm: 'calc(100% - 317px)', md: '100%', md: 'calc(100% - 610px)' },
                        }}>
                            <Box sx={{
                                // width: { xs: '0', sm: '383px', md: '731px' },
                                // width: { xs: '0', sm: '100%', md: '100%' },
                                // height: { xs: '0', sm: '378px', md: '548px' },
                                width: '100%',
                                aspectRatio: '4/3',
                                display: { xs: 'none', sm: 'block' },
                                backgroundImage: `url(${jamshid})`,
                                justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                            }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                <Typography variant='h2'
                                    sx={{ color: '#08113b', fontWeight: '500', fontSize: { xs: '20px', sm: '22px', md: '24px' }, }}>
                                    {language == 'en' ? blogs.find((blog) => blog.id == 3).attributes.title : blogs.find((blog) => blog.id == 3).attributes.titleFa}
                                </Typography>
                                <Typography variant="p" sx={{
                                    px: '16px', boxSizing: 'border-box',
                                    width: { xs: '100%', sm: '320px', md: '420px' },
                                    overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                                    textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                    fontStyle: 'italic', color: '#999999'
                                }}>
                                    {language == 'en' ? blogs.find((blog) => blog.id == 3).attributes.description : blogs.find((blog) => blog.id == 3).attributes.descriptionFa}
                                </Typography>
                                <ButtonOutline text={language == 'en' ? 'READ MORE' : 'بیشتر بخوانید'}
                                    action={() => navigate(`/blog/${blogs.find((blog) => blog.id == 3).id}/${blogs.find((blog) => blog.id == 3).attributes.title}`)}
                                />
                            </Box>
                        </Box>
                    </Box>
                    {/* section two */}
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                        gap: { xs: '32px', md: '32px' }, mt: { xs: '32px', sm: '50px', md: '60px' }, width: '100%'
                    }}>
                        <Box sx={{
                            width: { xs: '100%', sm: '320px', md: '610px' },
                            // height: { xs: '437px', sm: '420px', md: '814px' },
                            backgroundImage: `url(${stars})`, aspectRatio: '3/4',
                            justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                            <Typography variant='h2' sx={{
                                color: '#08113b',
                                fontWeight: '500', fontSize: { xs: '20px', sm: '22px', md: '24px' },
                            }}>
                                {language == 'en' ? blogs.find((blog) => blog.id == 1).attributes.title : blogs.find((blog) => blog.id == 1).attributes.titleFa}
                            </Typography>
                            <Typography variant="p" sx={{
                                width: { xs: '100%', md: '320px' },
                                overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                                textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                fontStyle: 'italic', color: '#999999', px: '16px', boxSizing: 'border-box',

                            }}>
                                {language == 'en' ? blogs.find((blog) => blog.id == 1).attributes.description : blogs.find((blog) => blog.id == 1).attributes.descriptionFa}
                            </Typography>
                            <ButtonOutline text={language == 'en' ? 'READ MORE' : 'بیشتر بخوانید'}
                                action={() => navigate(`/blog/${blogs.find((blog) => blog.id == 1).id}/${blogs.find((blog) => blog.id == 1).attributes.title}`)} />
                        </Box>
                    </Box>

                    {/* section three */}
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', mt: { xs: '32px', sm: '50px', md: '60px' },
                        boxSizing: 'border-box', px: { sm: '0', lg: '128px' }
                        // justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Box sx={{
                            display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' },
                            gap: { xs: '16px', sm: '16px', md: '16px' }
                        }}>
                            <Box sx={{
                                // width: { xs: '100%', sm: '251px', md: '610px' },
                                // height: { xs: '437px', sm: '335px', md: '649px' },
                                width: { xs: '100%', sm: '50%' },
                                aspectRatio: '3/4',
                                backgroundImage: `url(${diamondRough})`,
                                justifySelf: 'center', backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                            }} />
                            <Box sx={{
                                // height: { xs: '248px', sm: '335px', md: '649px' },
                                // width: { xs: '100%', sm: '100%', md: '100%' },
                                width: '100%',
                                aspectRatio: '4/3',
                                backgroundImage: `url(${diamond})`,
                                justifySelf: 'center', backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                            }} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                            <Typography variant='h2' sx={{
                                color: '#08113b', fontWeight: '500',
                                fontSize: { xs: '20px', sm: '22px', md: '24px' },
                            }}> {language == 'en' ? 'Diamonds' : 'الماس'}</Typography>
                            <Typography variant="p" sx={{
                                width: { xs: '100%', md: '320px' },
                                overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                                px: '16px', boxSizing: 'border-box',
                                textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999'
                            }}>

                                {language == 'en' ? blogs.find((blog) => blog.id == 2).attributes.description : blogs.find((blog) => blog.id == 2).attributes.descriptionFa}
                            </Typography>
                            <ButtonOutline text={language == 'en' ? 'READ MORE' : 'بیشتر بخوانید'}
                                action={() => navigate(`/blog/${blogs.find((blog) => blog.id == 2).id}/${blogs.find((blog) => blog.id == 2).attributes.title}`)}
                            />
                        </Box>
                    </Box>

                </Box > :
                <Box sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                    width: '100%', px: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box', mb: { xs: '50px', md: '60px' },
                }}>
                    <CircularProgress sx={{ color: '#08113b' }} />
                </Box>}
        </>);
}

export default PicsAndDets;