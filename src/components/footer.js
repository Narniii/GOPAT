import { Box, Typography, styled } from "@mui/material";
import ButtonFill from "./buttonFill";
import { Instagram } from "@mui/icons-material";
import '../App.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const Foot = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    borderTop: '1px solid #999999',
    justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box',
    //  paddingTop: '60px'
}))
const FootDesktop = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box', padding: '32px', backgroundColor: '#f2f2f2', gap: '60px', width: '100%'
}))
const FootMobile = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box', width: '100%'
}))
const ExpDesktop = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box',
    paddingRight: '32px', paddingLeft: '32px',
    borderRight: '1px solid #999999', color: '#666666',
}))
const ExpMobile = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box',
    borderTop: '1px solid #999999', color: '#666666', width: '100%',
    padding: '12px'
}))
const Links = styled(Typography)(({ theme }) => ({
    width: 'max-content',
    color: '#666666', '&:hover': {
        color: '#08113b'
    }
}))

const Footer = () => {
    const [csDetOpened, setCSDetOpened] = useState(false)
    const [policiesDetOpened, setpoliciesDetOpened] = useState(false)
    const [aboutDetOpened, setAboutDetOpened] = useState(false)
    function changeCSOpened(e) {
        e.preventDefault()
        var element = document.getElementById("PMbuttoncs");
        if (csDetOpened || element.classList.contains("pmButtonSelected")) {
            setCSDetOpened(false)
            element.classList.remove("pmButtonSelected")
        } else {
            setCSDetOpened(true)
            element.classList.add("pmButtonSelected")
        }
    }
    function changeAboutOpened(e) {
        e.preventDefault()
        var element = document.getElementById("PMbuttonAbout");
        if (aboutDetOpened || element.classList.contains("pmButtonSelected")) {
            setAboutDetOpened(false)
            element.classList.remove("pmButtonSelected")
        } else {
            setAboutDetOpened(true)
            element.classList.add("pmButtonSelected")
        }
    }
    function changePoliciesOpened(e) {
        e.preventDefault()
        var element = document.getElementById("PMbuttonpc");
        if (policiesDetOpened || element.classList.contains("pmButtonSelected")) {
            setpoliciesDetOpened(false)
            element.classList.remove("pmButtonSelected")
        } else {
            setpoliciesDetOpened(true)
            element.classList.add("pmButtonSelected")
        }
    }

    return (
        <Foot sx={{ paddingTop: { xs: '50px', md: '60px' } }}>
            <ButtonFill text={'Contact Us'} />
            <Instagram sx={{
                color: '#08113b', my: '32px', fontSize: '32px', cursor: 'pointer', transition: '500ms ease',
                '&:hover': {
                    color: '#999999'
                }
            }} />
            <Typography sx={{ color: '#666666', fontSize: { xs: '14px', sm: '16px' } }}>Follow us on</Typography>
            <Typography sx={{ color: '#666666', fontSize: { xs: '14px', sm: '16px' }, mb: { xs: '50px', md: '60px' } }}>@gopat.official</Typography>
            <FootDesktop sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                        <ExpDesktop>
                            <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                                About
                            </Typography>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' },
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    GOPAT team
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Diamond And Material
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Find A Store
                                </Link>
                            </Links>
                        </ExpDesktop>
                        <ExpDesktop>
                            <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                                Policies
                            </Typography>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Return & exchange
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Deliveries timeline
                                </Link>
                            </Links>
                        </ExpDesktop>
                        <ExpDesktop>
                            <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                                Customer Service
                            </Typography>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Free Polishing
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Gifting
                                </Link>
                            </Links>
                        </ExpDesktop>
                    </Box>
                    <Typography variant="p" sx={{
                        fontWeight: '500',
                        color: '#666666', fontSize: { xs: '12px', sm: '14px' }
                    }}>
                        Nation: International (EN) | Iran (FA)
                    </Typography>
                </Box>
                <Typography sx={{ color: '#999999', textAlign: 'center' }}>
                    Copyright GOPAT fine jewelry. All rights reserved.
                </Typography>
            </FootDesktop>
            <FootMobile sx={{ display: { xs: 'flex', md: 'none' } }}>
                <ExpMobile>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                            Customer Service
                        </Typography>
                        <button id="PMbuttoncs" className="pmButton" onClick={changeCSOpened}>
                            <span></span>
                            <span></span>
                        </button>

                    </Box>
                    {csDetOpened ?
                        <Box id="details-cs" sx={{ display: 'flex', flexDirection: 'column', transition: '500ms ease' }}>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Free Polishing
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Gifting
                                </Link>
                            </Links>
                        </Box> : undefined
                    }
                </ExpMobile>
                <ExpMobile>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                            Policies
                        </Typography>
                        <button id="PMbuttonpc" className="pmButton" onClick={changePoliciesOpened}>
                            <span></span>
                            <span></span>
                        </button>
                    </Box>
                    {policiesDetOpened ?
                        <Box id="details-policies" sx={{ display: 'flex', flexDirection: 'column', transition: '500ms ease' }}>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Return & Exchange
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Deliveries Timeline
                                </Link>
                            </Links>
                        </Box> : undefined
                    }

                </ExpMobile>
                <ExpMobile>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                            About
                        </Typography>
                        <button id="PMbuttonAbout" className="pmButton" onClick={changeAboutOpened}>
                            <span></span>
                            <span></span>
                        </button>
                    </Box>
                    {aboutDetOpened ?
                        <Box id="details-about" sx={{ display: 'flex', flexDirection: 'column', transition: '500ms ease' }}>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    GOPAT team
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Diamond And Material
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Find A Store
                                </Link>
                            </Links>
                        </Box> : undefined
                    }
                </ExpMobile>
                <Box sx={{
                    width: '100%', color: '#999999', backgroundColor: '#f2f2f2',
                    padding: '16px', boxSizing: 'border-box',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', textAlign: 'center'
                }}>
                    <Typography>
                        Copyright GOPAT fine jewelry.
                    </Typography>
                    <Typography>
                        All rights reserved.
                    </Typography>
                </Box>
            </FootMobile>
        </Foot>
    );
}

export default Footer;