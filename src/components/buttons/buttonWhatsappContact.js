import { Box, Button, Typography, keyframes } from "@mui/material";
import shoppingBag from '../../assets/shoppingBag.svg'

const ButtonWhatsappContact = ({ text, action, icon, width, mb, maxwidth }) => {
    return (<Box
        sx={{
            backgroundColor: '#25D366', cursor: 'pointer', color: 'white', boxSizing: 'border-box',
            height: { xs: '50px', md: '60px' }, fontWeight: 500,
            width: width ? width : 'max-content', maxWidth: maxwidth ? maxwidth : 'unset',
            px: { xs: '8px', sm: '16px', md: '32px' }, mb: mb ? mb : 'unset',
            display: 'flex', alignItems: 'center', textTransform: 'capitalize', transition: '500ms ease',
            '&:hover': {
                backgroundColor: '#999999',
            }

        }}
        onClick={action}>
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px' }, width: '100%', textAlign: 'center' }}>
            {text}
        </Typography>
    </Box>);
}

export default ButtonWhatsappContact;