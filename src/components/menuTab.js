import { Box, Typography } from '@mui/material';
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuTabOpenable = ({ text, children, id, py, pb }) => {
    const [openTab, setOpenTab] = useState(false)
    const [height, setHeight] = useState(0); // Track height of the content
    const contentRef = useRef(null); // Reference to the content box

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
    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.clientHeight); // Set height to the full content height
        }
    }, [children]); // Recalculate height if content changes

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', width: '100%',
            borderBottom: '1px solid #d9d9d9',
            height: openTab ? `${height}px` : '35px',
            // overflow: 'hidden',
            transition: '500ms ease',
            py: py ? py : 'unset',
            pb: pb ? pb : 'unset'
        }}
            ref={contentRef}>
            <Box
                onClick={changeButtonClass}
                sx={{
                    width: '100%', transition: '500ms ease',
                    cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '35px',
                }}>
                <Typography sx={{ fontSize: '16px', color: '#08113b', fontWeight: 500 }}>
                    {text}
                </Typography>
                <button id={id} className="pmButton" >
                    <span></span>
                    <span></span>
                </button>
            </Box>
            {openTab && <Box sx={{
                height: openTab ? `auto` : '0',
                transition: 'height 500ms ease',
            }} >
                {children}</Box>}
        </Box>
    );
}



export const MenuTab = ({ text, onClick, link, pb }) => {
    return (
        <Box onClick={onClick}
            sx={{
                cursor: 'pointer',
                display: 'flex', justifyContent: 'start', alignItems: 'center',
                borderBottom: '1px solid #d9d9d9', height: '35px', width: '100%', pb: pb ? pb : 'unset'
            }}>
            <Link style={{ textDecoration: 'none', color: 'inherit', }} to={link}>
                <Typography sx={{ fontSize: '16px', color: '#08113b', fontWeight: 500 }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    );
}

