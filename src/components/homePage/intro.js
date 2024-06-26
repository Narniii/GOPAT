import { Box, Typography, } from "@mui/material";
import ButtonOutline from "../buttonOutline";
import styled from "@emotion/styled/macro";
import bangle from '../../assets/Landing.jpg'
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))
const Intro = () => {
    return (
        <Box sx={{
            borderBottom: { xs: '1px solid #999999', md: 'none' },
            height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' },
            width: '100%', boxSizing: 'border-box',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
        }}>
            <Box sx={{
                height: '100%', width: '100%',
                backgroundImage: `url(${bangle})`,
                justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} />
            <Details sx={{ mx: '60px', my: { xs: '50px', md: '60px' }, gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                <Typography variant="h1" sx={{
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 600, color: '#08113b'
                }}>
                    Tishtar Unisex Bangle</Typography>
                <Typography variant="h6" sx={{
                    // mb: '8px',
                    whiteSpace: 'nowrap', fontSize: { xs: '16px', sm: '18px', md: '18px' }, fontStyle: 'italic', color: '#999999'
                }}>
                    In dialogue with Persepolis</Typography>
                <ButtonOutline text={'Discover More'} />
            </Details>
        </Box>
    );
}

export default Intro;