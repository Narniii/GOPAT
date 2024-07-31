import { Box, Button, Typography, keyframes } from "@mui/material";
import '../../App.css'
const ButtonFillRound = ({ text, action }) => {
  return (<Box
    // id="fill"
    sx={{
      backgroundColor: '#08113b',
      cursor: 'pointer', color: 'white', boxSizing: 'border-box',
      height: { xs: '32px', md: '40px' }, borderRadius: '20px',
      width: 'max-content', px: { xs: '8px', sm: '16px' },
      display: 'flex', alignItems: 'center', transition: '500ms ease',
      '&:hover': {
        backgroundColor: '#999999',
      }

    }}
    onClick={action}>
    <Typography sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px' }, }}>
      {text}
    </Typography>
  </Box>);
}

export default ButtonFillRound;