import { Box, Typography } from '@mui/material';
import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuTabOpenable = ({ text, children }) => {
    const [openTab, setOpenTab] = useState(false)
    function changeButtonClass() {
        var element = document.getElementById("PMbutton");
        // element.classList.remove("pmButton")
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
            transition: '500ms ease', borderBottom: '1px solid #999'
        }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '35px' }}>
                <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>
                    {text}
                </Typography>
                <button id="PMbutton" className="pmButton" onClick={changeButtonClass}>
                    <span></span>
                    <span></span>
                </button>
            </Box>
            {openTab && <>{children}</>}
        </Box>
    );
}



export const MenuTab = ({ text, onClick, link }) => {
    return (
        <Box onClick={onClick}
            sx={{
                display: 'flex', justifyContent: 'start', alignItems: 'center',
                borderBottom: '1px solid #999', height: '35px', width: '100%',
            }}>
            <Link style={{ textDecoration: 'none', color: 'inherit', }}>
                <Typography sx={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    );
}

