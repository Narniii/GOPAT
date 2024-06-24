import { Box, Button, Typography } from "@mui/material";

const ButtonOutline = ({ text, action }) => {
    return (<Box
        sx={{
            border: '1px solid #999999', cursor: 'pointer', fontStyle: 'normal', fontWeight: 400,
            height: { xs: '50px', md: '60px' },
            width: 'max-content', px: { xs: '8px', sm: '16px', md: '32px' },
            display: 'flex', alignItems: 'center', textTransform: 'uppercase',
        }}
        onClick={action}>
        <Typography>
            {text}
        </Typography>
    </Box>);
}

export default ButtonOutline;