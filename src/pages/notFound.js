import { Box } from "@mui/material";

const NotFound = () => {
    return (<Box
        sx={{
            height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' },
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#08113b'
        }}>
        The Page You're Looking For Does Not Exist

    </Box>);
}

export default NotFound;