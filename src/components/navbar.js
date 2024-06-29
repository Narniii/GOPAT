import { Menu } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import '../App.css';
import logo from '../assets/LOGO-01.svg'
const Navbar = () => {

    return (
        <Box sx={{
            bgcolor: '#08113b',
            // width: '100%',
            height: { xs: '70px', sm: '80px', md: '120px' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box'
        }}>
            <Menu sx={{ color: 'white', fontSize: { xs: '16px', sm: '24px', md: '32px' }, justifySelf: 'start', cursor: 'pointer' }} />
            <Box sx={{ width: { xs: '105px', md: '185px' }, height: '64px', backgroundImage: `url(${logo})`, justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} />
            <Box />
        </Box>
    );
}

export default Navbar;