import { Box, Button, Typography, keyframes } from "@mui/material";
import shoppingBag from '../assets/shoppingBag.svg'

const ButtonWhatsapp = ({ text, action, icon, width, mb, maxwidth }) => {
    return (<Box
        // id="fill"
        sx={{
            backgroundColor: '#25D366', cursor: 'pointer', color: 'white', boxSizing: 'border-box',
            height: { xs: '50px', md: '45px' }, mb: mb ? mb : '0',
            width: width ? width : 'max-content', maxWidth: maxwidth ? maxwidth : 'unset',
            px: { xs: '8px', sm: '16px', md: '32px' }, gap: '8px',
            display: 'flex', alignItems: 'center', transition: '500ms ease', justifyContent: 'space-between',
            '&:hover': {
                backgroundColor: '#999999',
            }

        }}
        onClick={action}>
        <Box sx={{
            backgroundPosition: 'center',
            backgroundImage: `url(${shoppingBag})`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
            width: '24px',
            height: '24px',
        }} />
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px' }, }}>
            Order Via Whatsapp
        </Typography>
        <Box />
    </Box>);
}

export default ButtonWhatsapp;