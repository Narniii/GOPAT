import { Box, Button, Typography } from "@mui/material";

const ButtonFill = ({ text, action }) => {
    return (<Box
        sx={{
            backgroundColor: '#08113b', cursor: 'pointer', color: 'white', boxSizing: 'border-box',
            height: { xs: '50px', md: '60px' },
            width: 'max-content', px: { xs: '8px', sm: '16px', md: '32px' },
            display: 'flex', alignItems: 'center', textTransform: 'uppercase',
        }}
        onClick={action}>
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px' }, }}>
            {text}
        </Typography>
    </Box>);
}

export default ButtonFill;