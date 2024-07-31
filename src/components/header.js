import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";

const Details = styled(Box)(({ theme }) => ({
    // display: 'flex',
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

const Header = ({ images, title, subtitle, description, hideDetailsOnMobile }) => {
    return (
        <Box sx={{
            // height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            height: { xs: '100%', md: 'calc(100vh - 60px)' },
            width: '100%', boxSizing: 'border-box',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            // mb: { xs: 'none', md: '60px' }
        }}>
            <ImageScroll sx={{
                height: { xs: '420px', md: '100%' },
            }}>
                <Box sx={{
                    display: 'flex',
                    height: '100%', width: '100%',
                    boxSizing: 'border-box',
                    width: 'max-content', flexWrap: 'nowrap'
                }}>
                    {images.map((image) => {
                        return (
                            <Image sx={{
                                backgroundImage: `url(${image})`,
                                width: { xs: '100vw', md: '100%' }
                            }} />
                        )
                    })}
                </Box>
            </ImageScroll>
            <Details sx={{
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