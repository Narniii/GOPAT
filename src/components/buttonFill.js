import { Box, Button, Typography, keyframes } from "@mui/material";
import '../App.css'
const hover = keyframes`
  0% {
    border: solid 1px white;
    border-left: solid 1px #999999;
  }
  25% {
    border: solid 1px white;
    border-left: solid 1px #999999;
  }
  25.02% {
    border: solid 1px white;
    border-left: solid 1px #999999;
    border-bottom: solid 1px #999999;
  }
  50% {
    border: solid 1px white;
    border-left: solid 1px #999999;
    border-bottom: solid 1px #999999;
  }
  50.02% {
    border: solid 1px white;
    border-left: solid 1px #999999;
    border-bottom: solid 1px #999999;
    border-right: solid 1px #999999;
  }
  75% {
    border: solid 1px white;
    border-left: solid 1px #999999;
    border-bottom: solid 1px #999999;
    border-right: solid 1px #999999;
  }
  75.02% {
    border: solid 1px #999999;
  }
`
const ButtonFill = ({ text, action }) => {
  return (<Box
    // id="fill"
    sx={{
      backgroundColor: '#08113b', cursor: 'pointer', color: 'white', boxSizing: 'border-box',
      height: { xs: '50px', md: '60px' }, fontWeight: 500,
      width: 'max-content', px: { xs: '8px', sm: '16px', md: '32px' },
      display: 'flex', alignItems: 'center', textTransform: 'uppercase', transition: '500ms ease',
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

export default ButtonFill;