import { Box, Button } from "@mui/material";

const ButtonFill = ({ text, action }) => {
    return (<Box
        sx={{
            backgroundColor: '#08113b', cursor: 'pointer', color: 'white',
            width: 'max-content', padding: '12px', dispay: 'flex', alignItems: 'center'
        }}
        onClick={action}>
        {text}
    </Box>);
}

export default ButtonFill;