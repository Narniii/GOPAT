import { Box, Typography, styled } from "@mui/material";
import ButtonFill from "./buttons/buttonFill";
import { Instagram } from "@mui/icons-material";
import '../App.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Foot = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box',
    //  paddingTop: '60px'
}))
const FootDesktop = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box',
    padding: '32px', backgroundColor: '#f2f2f2', gap: '30px', width: '100%'
}))
const FootMobile = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box', width: '100%'
}))
const ExpDesktop = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box',
    paddingRight: '32px', paddingLeft: '32px',
    borderRight: '1px solid #b3b3b3', color: '#666666',
}))
const ExpMobile = styled(Box)(({ theme }) => ({
    flexDirection: 'column', boxSizing: 'border-box',
    borderTop: '1px solid #d9d9d9', color: '#666666', width: '100%',
    padding: '12px'
}))
const Links = styled(Typography)(({ theme }) => ({
    width: 'max-content', transition: '500ms ease',
    color: '#999', '&:hover': {
        color: '#08113b'
    }
}))
const Line = styled(Box)(({ theme }) => ({
    backgroundColor: '#b3b3b3', color: '#666666', height: '20px',
    width: '1px'
}))

const Footer = ({ language, changeLanguage }) => {
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
    const navigate = useNavigate()
    return (
        <Foot sx={{
            paddingTop: window.location.pathname == '/' || window.location.pathname == '/contact-us' ? { xs: '50px', md: '60px' } : 'unset',
            borderTop: window.location.pathname == '/' ? '1px solid #d9d9d9' : 'unset',
        }}>
            {window.location.pathname == '/' || window.location.pathname == '/contact-us' ?
                <>
                    {window.location.pathname == '/contact-us' ?
                        <Typography sx={{
                            textTransform: 'capitalize', whiteSpace: 'nowrap',
                            fontSize: { xs: '18px', sm: '22px', md: '24px' }, fontWeight: 500, color: '#08113B'
                        }}>
                            {language == 'en' ? 'social medias' : 'شبکه های اجتماعی'}
                        </Typography>
                        :
                        <ButtonFill text={language == 'en' ? 'Contact Us' : 'تماس با ما'} action={() => navigate('/contact-us')} />
                    }
                    <Link target="_blank" to={'/instagram.com/gopat.official'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Instagram sx={{
                            color: '#08113b', my: '16px', fontSize: '32px', cursor: 'pointer', transition: '500ms ease',
                            '&:hover': {
                                color: '#999999'
                            }
                        }} />
                    </Link>
                    <Typography sx={{ color: '#666666', fontSize: { xs: '14px', sm: '16px' } }}>{language == 'en' ? 'Follow us on' : 'ما را دنبال کنید'}</Typography>
                    <Typography sx={{ color: '#666666', fontSize: { xs: '14px', sm: '16px' }, mb: { xs: '50px', md: '60px' } }}>@gopat.official</Typography>
                </> : undefined}
            <FootDesktop sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                        <ExpDesktop>
                            <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                                {language == 'en' ? 'About' : 'درباره ما'}
                            </Typography>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' },
                            }}>
                                <Link to={'/about-us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'GOPAT team' : 'تیم گوپت'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/about-us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Diamond And Material' : 'الماس و متریال'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/contact-us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Find A Store' : 'فروش حضوری'}
                                </Link>
                            </Links>
                        </ExpDesktop>
                        <ExpDesktop>
                            <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                                {language == 'en' ? 'Policies' : 'قوانین و ضوابط'}
                            </Typography>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/gopatron#repurchasing'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Return & exchange' : 'بازخرید و تعویض'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/gopatron#deliveries'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Deliveries timeline' : 'زمانبندی ارسال'}
                                </Link>
                            </Links>
                        </ExpDesktop>
                        <ExpDesktop>
                            <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                                {language == 'en' ? 'Customer Service' : 'خدمات مشتریان'}
                            </Typography>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/gopatron#polishing'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Free Polishing' : 'پولیش رایگان'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/gopatron#gifting'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Gifting' : 'هدیه'}
                                </Link>
                            </Links>
                        </ExpDesktop>
                    </Box>
                    <Typography onClick={changeLanguage} variant="p" sx={{
                        fontWeight: '500', cursor: 'pointer',
                        color: '#666666', fontSize: { xs: '12px', sm: '14px' }
                    }}>
                        {language == 'en' ? 'Nation: International (EN) | Iran (FA)' : 'زبان : فارسی | انگلیسی'}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', px: '32px', gap: '24px', boxSizing: 'border-box' }}>
                    <Link target="_blank" style={{ textDecoration: 'none' }}
                        to={'https://www.linkedin.com/in/hana-bayat-853023126/'}>
                        <Typography sx={{ textTransform: 'capitalize', color: '#999999', textAlign: 'center', fontSize: '14px' }}>
                            {language == 'en' ? `design hana bayat` : 'طراحی: هانا بیات'}
                        </Typography>
                    </Link>
                    <Line />
                    <Link target="_blank" style={{ textDecoration: 'none' }}
                        to={'https://www.linkedin.com/in/naarin-ehteshamzade-1b0b48204/'}>
                        <Typography sx={{ textTransform: 'capitalize', color: '#999999', textAlign: 'center', fontSize: '14px' }}>
                            {language == 'en' ? 'developement narin ehteshamzadeh' : 'توسعه: نارین احتشام زاده'}
                        </Typography>
                    </Link>
                </Box>
                <Typography sx={{ color: '#999999', textAlign: 'center', fontSize: '14px' }}>
                    Copyright GOPAT fine jewelry. All rights reserved.
                </Typography>
            </FootDesktop>
            <FootMobile sx={{ display: { xs: 'flex', md: 'none' } }}>
                <ExpMobile>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                            {language == 'en' ? 'Customer Service' : 'خدمات مشتریان'}
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
                                <Link to={'/gopatron#polishing'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Free Polishing' : 'پولیش رایگان'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/gopatron#gifting'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Gifting' : 'هدیه'}
                                </Link>
                            </Links>
                        </Box> : undefined
                    }
                </ExpMobile>
                <ExpMobile>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                            {language == 'en' ? 'Policies' : 'قوانین و ضوابط'}
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
                                <Link to={'/gopatron#repurchasing'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Return & exchange' : 'بازخرید و تعویض'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/gopatron#deliveries'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Deliveries timeline' : 'زمانبندی ارسال'}
                                </Link>
                            </Links>
                        </Box> : undefined
                    }

                </ExpMobile>
                <ExpMobile >
                    <Box
                        onClick={changeAboutOpened}
                        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: { xs: '14px', md: '16px' } }}>
                            {language == 'en' ? 'About' : 'درباره ما'}
                        </Typography>
                        <button id="PMbuttonAbout" className="pmButton" >
                            <span></span>
                            <span></span>
                        </button>
                    </Box>
                    {aboutDetOpened ?
                        <Box id="details-about" sx={{ display: 'flex', flexDirection: 'column', transition: '500ms ease' }}>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/about-us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'GOPAT team' : 'تیم گوپت'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/about-us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Diamond And Material' : 'الماس و متریال'}
                                </Link>
                            </Links>
                            <Links sx={{
                                fontSize: { xs: '12px', md: '14px' }
                            }}>
                                <Link to={'/contact-us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {language == 'en' ? 'Find A Store' : 'فروش حضوری'}
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
                    <Typography sx={{ fontSize: '12px' }}>
                        Copyright GOPAT fine jewelry.
                    </Typography>
                    <Typography sx={{ fontSize: '12px' }}>
                        All rights reserved.
                    </Typography>
                </Box>
            </FootMobile>
        </Foot>
    );
}

export default Footer;