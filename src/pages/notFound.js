import { Box } from "@mui/material";

const NotFound = ({ language }) => {
    return (<Box
        sx={{
            height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#08113b'
        }}>
        {language == 'en' ?
            `The Page You're Looking For Does Not Exist` : 'صفحه ی مورد نظر یافت نشد'
        }

    </Box>);
}

export default NotFound;