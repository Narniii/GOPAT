import { Box, Button, Typography } from "@mui/material";
import '../../App.css'

const ButtonOutline = ({ text, action }) => {
    return (<Box
        id="fill"
        sx={{
            border: '1px solid #999999', cursor: 'pointer', fontStyle: 'normal', fontWeight: 500,
            height: { xs: '50px', md: '60px' },
            width: 'max-content', px: { xs: '16px', sm: '16px', md: '32px' },
            display: 'flex', alignItems: 'center', textTransform: 'uppercase',
        }}
        onClick={action}>
        <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px' }, color: '#08113b' ,fontWeight: 500}}>
            {text}
        </Typography>
    </Box>);
}

export default ButtonOutline;