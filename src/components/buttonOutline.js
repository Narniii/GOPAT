import { Box, Button } from "@mui/material";

const ButtonOutline = ({ text, action }) => {
    return (<Box
        sx={{ border: '1px solid #f2f2f2', width: 'max-content', padding: '12px', dispay: 'flex', alignItems: 'center' }}
        onClick={action}>
        {text}
    </Box>);
}

export default ButtonOutline;