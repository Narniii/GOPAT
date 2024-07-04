import { Box } from "@mui/material";

const NotFound = () => {
    return (<Box
        sx={{
            height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#08113b'
        }}>
        The Page You're Looking For Does Not Exist

    </Box>);
}

export default NotFound;