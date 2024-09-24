import { Box, CircularProgress, Drawer, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuTab, MenuTabOpenable } from "./menuTab";
import { Link, useNavigate } from "react-router-dom";

const NavMenu = ({ open, setOpenMenu }) => {
    const navigate = useNavigate()
    const [collections, setCollections] = useState(undefined)
    const getCollections = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/collections?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })
        let response = await request.json()
        console.log(response)
        setCollections(response.data)
    }
    useEffect(() => {
        getCollections()
    }, [])

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
                        {collections ? <>
                            {collections.map((collection) => {
                                return (
                                    <Link style={{ textDecoration: 'none', color: 'inherit', margin: '8px 0' }}
                                        onClick={() => setOpenMenu(false)} target="_blank"
                                        to={`/collection/${collection.attributes.name}/${collection.id}`}>
                                        <Typography sx={{
                                            fontSize: '14px',
                                            color: '#666', '&:hover': {
                                                color: '#08113b'
                                            }
                                        }}>
                                            {collection.attributes.name} Collection
                                        </Typography>
                                    </Link>
                                )
                            })}
                        </> :
                            <CircularProgress sx={{ color: '#08113b', fontSize: '16px' }} />}
                    </Box>} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'About'} link={'/about-us'} onClick={() => {
                navigate('/about-us')
                setOpenMenu(false)
            }} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'Contact'} link={'/contact-us'} onClick={() => {
                navigate('/contact-us')
                setOpenMenu(false)
            }} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
            <MenuTab text={'Gopatron Service'} pb={{ xs: '8px', sm: '16px', md: '16px' }}
                link={'/gopatron'} onClick={() => {
                    navigate('/gopatron')
                    setOpenMenu(false)
                }} />
            <MenuTab text={'Blog'} pb={{ xs: '8px', sm: '16px', md: '16px' }}
                link={'/blogs'} onClick={() => {
                    navigate('/blogs')
                    setOpenMenu(false)
                }} />
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