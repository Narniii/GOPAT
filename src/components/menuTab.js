import { Box, Typography } from '@mui/material';
import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuTabOpenable = ({ text, children, id, py, pb }) => {
    const [openTab, setOpenTab] = useState(false)
    function changeButtonClass() {
        var element = document.getElementById(id);
        if (openTab) {
            element.classList.remove("pmButtonSelected")
            setOpenTab(false)
        } else {
            element.classList.add("pmButtonSelected")
            setOpenTab(true)
        }
    }

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', width: '100%',
            transition: '500ms ease', borderBottom: '1px solid #b3b3b3',
            py: py ? py : 'unset',
        }}>
            <Box
                onClick={changeButtonClass}
                sx={{
                    width: '100%',
                    cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '35px',
                    pb: pb ? pb : 'unset'
                }}>
                <Typography sx={{ fontSize: '16px', color: '#08113b', fontWeight: 500 }}>
                    {text}
                </Typography>
                <button id={id} className="pmButton" >
                    <span></span>
                    <span></span>
                </button>
            </Box>
            {openTab && <>{children}</>}
        </Box>
    );
}



export const MenuTab = ({ text, onClick, link, pb }) => {
    return (
        <Box onClick={onClick}
            sx={{
                cursor: 'pointer',
                display: 'flex', justifyContent: 'start', alignItems: 'center',
                borderBottom: '1px solid #b3b3b3', height: '35px', width: '100%', pb: pb ? pb : 'unset'
            }}>
            <Link style={{ textDecoration: 'none', color: 'inherit', }} to={link}>
                <Typography sx={{ fontSize: '16px', color: '#08113b', fontWeight: 500 }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    );
}

