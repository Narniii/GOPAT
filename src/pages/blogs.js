import { Box, Typography } from "@mui/material";
import stars from '../assets/stars.svg'
import ButtonOutline from "../components/buttons/buttonOutline";
import styled from "@emotion/styled/macro";
import BlogSmall from "../components/blogs/blogSmall";
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', textAlign: 'center', boxSizing: 'border-box',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))
const ImageScroll = styled(Box)(({ theme }) => ({
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
    aspectRatio: '1/1'
}))

const Blogs = () => {
    const blogs = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <Box sx={{
                // height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
                height: { xs: '100%', md: 'calc(100vh - 60px)' },
                width: '100%', boxSizing: 'border-box',
                display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                // mb: { xs: 'none', md: '60px' }
            }}>
                {/* <ImageScroll sx={{
                    height: { xs: '420px', md: '100%' },
                }}> */}
                <Box sx={{
                    display: 'flex',
                    height: { xs: '420px', md: '100%' },
                    width: '100%',
                    boxSizing: 'border-box',
                    width: '100%', flexWrap: 'nowrap'
                }}>
                    <Image sx={{
                        backgroundImage: `url(${stars})`,
                        width: { xs: '100vw', md: '100%' }
                    }} />
                </Box>
                {/* </ImageScroll> */}
                <Details sx={{
                    mx: { xs: '32px', md: '32px' },
                    py: '32px',
                    gap: '16px',
                    width: { xs: '100%', md: '30%' }
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                        }}>
                            Tishtar Story
                        </Typography>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                        }}>
                            Persian Mythical Stories
                        </Typography>
                    </Box>
                    <Typography sx={{ color: '#999', fontWeight: 500, width: '100%', textAlign: 'center' }}>
                        In Persian mythology, Tishtar, also known as Tishtrya, is revered as the god of rain and fertility, playing a crucial role in the agricultural life of ancient Persia...
                    </Typography>
                    <ButtonOutline text={'read more'} />
                </Details>
            </Box>

            <Box sx={{
                width: '100%', display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
                mt: { xs: '0', md: '50px' }
            }}>

                <Box sx={{
                    borderTop: { xs: '1px solid #d9d9d9', md: 'none' },
                    borderBottom: { xs: '1px solid #d9d9d9', md: 'none' },
                    borderLeft: { xs: 'none', md: '1px solid #d9d9d9' },
                    height: '100px', boxSizing: 'border-box',
                    width: { xs: '100%', md: '30%' },
                    mx: { xs: '0', md: '32px' },
                    my: { xs: '32px', md: '0' },
                    // padding: { xs: '16px', md: '32px' }
                }}></Box>

                <Box sx={{
                    width: '100%', display: 'flex', flexDirection: 'column', gap: '32px'
                }}>
                    {blogs.map((blog) => {
                        return (<BlogSmall image={stars}
                            title={'hahaha'} subtitle={'hohoho'} date={'2024'}
                            description={'sjgduy dssgfd uishdf usdhf uhsd ugsdfug ugasd gsd sd  dgugsugsugi sjgduy dssgfd uishdf usdhf uhsd ugsdfug ugasd gsd sd  dgugsugsugi sjgduy dssgfd uishdf usdhf uhsd ugsdfug ugasd gsd sd  dgugsugsugi sjgduy dssgfd uishdf usdhf uhsd ugsdfug ugasd gsd sd  dgugsugsugi'} />)
                    })}
                </Box>
            </Box>

        </>);
}

export default Blogs;