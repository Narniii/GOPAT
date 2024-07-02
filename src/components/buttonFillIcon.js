import { Box, Button, Typography, keyframes } from "@mui/material";

const ButtonFillIcon = ({ text, action, icon, width, maxwidth }) => {
    return (<Box
        // id="fill"
        sx={{
            backgroundColor: '#08113b', cursor: 'pointer', color: 'white', boxSizing: 'border-box',
            height: { xs: '50px', md: '60px' },
            width: width ? width : 'max-content', maxWidth: maxwidth ? maxwidth : 'unset',
            px: { xs: '8px', sm: '16px', md: '32px' },
            display: 'flex', alignItems: 'center', transition: '500ms ease', justifyContent: 'space-between',
            '&:hover': {
                backgroundColor: '#999999',
            }

        }}
        onClick={action}>
        {icon ? <Box sx={{
            backgroundPosition: 'center',
            backgroundImage: `url(${icon})`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
            width: '24px',
            height: '24px',
        }} /> : undefined}
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px' }, }}>
            {text}
        </Typography>
        <Box />
    </Box>);
}

export default ButtonFillIcon;