import { Box, Drawer, List, Typography } from "@mui/material";
import { useState } from "react";
import { MenuTab, MenuTabOpenable } from "./menuTab";
import { Link } from "react-router-dom";

const NavMenu = ({ open, setOpenMenu }) => {
    const productsMenu = () => {

    }
    const list = () => (
        <Box
            sx={{
                width: { xs: '100%', md: '500px' }, height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' },
                boxSizing: 'border-box',
                padding: { xs: '8px', sm: '24px', md: '32px' },
                gap: { xs: '8px', sm: '24px', md: '16px' },
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}
            role="presentation"
            // onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
        >
            <MenuTab text={'Home'} />
            <MenuTabOpenable text={'Products'}
                children={
                    <Box sx={{ width: 'max-content', display: 'flex', flexDirection: 'column' }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit', margin: '8px 0' }} to={'/collection/tishtar'}>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#666', '&:hover': {
                                    color: '#08113b'
                                }
                            }}>
                                Tishtar Collection
                            </Typography>
                        </Link>
                    </Box>} />
            <MenuTab text={'About'} />
            <MenuTab text={'Contact'} />
            <MenuTab text={'Gopatron Service'} />
            <MenuTab text={'Blog'} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%' }}>
                <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>
                    English | Farsi
                </Typography>
            </Box>
        </Box>
    );


    return (<Drawer
        PaperProps={{
            sx: {
                width: { xs: '100%', md: '500px' },
                height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' },
                top: { xs: '70px', sm: '80px', md: '120px' },
                transitionDuration: '500ms'
            }
        }}
        anchor='top'
        open={open}
        onClose={() => setOpenMenu(false)}
    >
        {list()}
    </Drawer>
    );
}

export default NavMenu;