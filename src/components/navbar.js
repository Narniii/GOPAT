import { Menu } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import '../App.css';
import logo from '../assets/LOGO-01.svg'
import { useState } from "react";
import NavMenu from "./navMenu";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <Box id='navbar' sx={{
                bgcolor: '#08113b',
                height: { xs: '50px', sm: '50px', md: '60px' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: { xs: '0 16px', sm: '0 24px', md: '0 32px' }, boxSizing: 'border-box'
            }}>
                <Menu
                    onClick={() => setOpenMenu(!openMenu)}
                    // onClick={handleClick}

                    sx={{
                        color: 'white', fontSize: { xs: '24px', sm: '24px', md: '32px' },
                        justifySelf: 'start', cursor: 'pointer'
                    }} />
                <Box sx={{
                    width: { xs: '80px', sm: '90px', md: '105px' },
                    height: '40px',
                    backgroundImage: `url(${logo})`,
                    justifySelf: 'center',
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
                <Box />
            </Box>
            <NavMenu open={openMenu} setOpenMenu={setOpenMenu} />

        </>
    );
}

export default Navbar;