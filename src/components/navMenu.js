import { Box, Drawer, List, Typography } from "@mui/material";
import { useState } from "react";
import { MenuTab, MenuTabOpenable } from "./menuTab";
import { Link, useNavigate } from "react-router-dom";

const NavMenu = ({ open, setOpenMenu }) => {
    const navigate = useNavigate()
    const list = () => (
        <Box
            sx={{
                width: { xs: '100%', md: '500px' },
                height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
                boxSizing: 'border-box',
                padding: { xs: '8px', sm: '24px', md: '32px' },
                gap: { xs: '8px', sm: '16px', md: '16px' },
                display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
            role="presentation"
            // onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
        >
            <MenuTab text={'Home'} link={'/'} onClick={() => {
                navigate('/')
                setOpenMenu(false)
            }} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTabOpenable text={'Products'}
                id={'menu-products'}
                children={
                    <Box sx={{ width: 'max-content', display: 'flex', flexDirection: 'column' }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit', margin: '8px 0' }}
                            onClick={() => setOpenMenu(false)}
                            to={'/collection/tishtar'}>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#666', '&:hover': {
                                    color: '#08113b'
                                }
                            }}>
                                Tishtar Collection
                            </Typography>
                        </Link>
                    </Box>} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'About'} link={'/about-us'} onClick={() => {
                navigate('/about-us')
                setOpenMenu(false)
            }} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'Contact'} link={'/contact-us'} onClick={() => {
                navigate('/contact-us')
                setOpenMenu(false)
            }} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'Gopatron Service'} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'Blog'} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%' }}>
                <Typography sx={{ fontSize: '16px', color: '#08113b', fontWeight: 500 }}>
                    English | Farsi
                </Typography>
            </Box>
        </Box>
    );


    return (<Drawer
        transitionDuration={500}
        PaperProps={{
            sx: {
                width: { xs: '100%', md: '500px' },
                height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
                top: { xs: '50px', sm: '50px', md: '60px' },
            }
        }}
        anchor='left'
        open={open}
        onClose={() => setOpenMenu(false)}
    >
        {list()}
    </Drawer>
    );
}

export default NavMenu;