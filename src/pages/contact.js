import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";
import contact from '../assets/contact.svg'
import samcenter from '../assets/samcenter.svg'
import avacenter from '../assets/avacenter.svg'
import ButtonWhatsapp from "../components/buttons/buttonWhatsapp";
import ButtonFill from "../components/buttons/buttonFill";
import ButtonWhatsappContact from "../components/buttons/buttonWhatsappContact";
import Header from "../components/header";
const Details = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))
const ContactUs = styled(Box)(({ theme }) => ({
    display: 'flex', width: '100%',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    borderTop: '1px solid #d9d9d9', borderBottom: '1px solid #d9d9d9'
}))
const ImageScroll = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    // height: '100%',
    overflowY: 'hidden',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        background: 'transparent',
        height: '8px',
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        height: '8px',
        width: '8px',
        background: '#08113b',
        color: '#08113b',
        border: 'none',
        borderRadius: '0px'
    },
    '&::-webkit-scrollbar-button': {
        display: 'none'
    },
}))
const Image = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundColor: '#999',
    height: '100%',
    aspectRatio: '1/1'
}))


const Contact = () => {
    return (
        <>
            <Header hideDetailsOnMobile={false} images={[contact, samcenter, avacenter]} title={'Partnerhip Stores'} subtitle={'information'} />

            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',
                gap: { xs: '16px', md: '32px' },
                my: { xs: '16px', md: '32px' },
            }}>

                {/* image section one */}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    justifyContent: 'space-between', boxSizing: 'border-box', px: { xs: '16px', md: '0' },
                }}>

                    <Box sx={{
                        width:  { xs: '100%', md: '70%' },
                        backgroundImage: `url(${samcenter})`,
                        aspectRatio: { xs: '4/3', md: '1/1' },
                        backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                    }} />

                    <Box sx={{
                        padding: { xs: '32px', md: '64px', lg: '64px 128px' }, boxSizing: 'border-box', width: { xs: '100%', md: '50%' },
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { xs: '16px', md: '32px' }
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                            <Typography variant="h4" sx={{
                                whiteSpace: 'nowrap',
                                fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                            }}>
                                NAMI SANATI Perfumery</Typography>
                            <Typography variant="h1" sx={{
                                whiteSpace: 'nowrap', fontWeight: 500,
                                fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                            }}>
                                Sam Center Branch</Typography>
                        </Box>
                        <Typography sx={{
                            color: '#08113B', textAlign: 'center', width: '100%',
                            fontSize: { xs: '14px', md: '16px' }, fontWeight: 500
                        }}>
                            No.14, Floor GF, Sam Center
                            Fereshteh Ave., Tehran, Iran.
                        </Typography>
                    </Box>

                </Box>

                {/* image section two */}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    justifyContent: 'space-between', boxSizing: 'border-box', px: { xs: '16px', md: '0' },
                }}>
                    <Box sx={{
                        width: { xs: '100%', md: '70%' },
                        backgroundImage: `url(${avacenter})`,
                        aspectRatio: { xs: '4/3', md: '1/1' },
                        backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                    }} />
                    <Box sx={{
                        padding: { xs: '32px', md: '64px', lg: '64px 128px' }, boxSizing: 'border-box', width: { xs: '100%', md: '50%' },
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { xs: '16px', md: '32px' }
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                            <Typography variant="h4" sx={{
                                whiteSpace: 'nowrap',
                                fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                            }}>
                                NAMI SANATI Perfumery</Typography>
                            <Typography variant="h1" sx={{
                                whiteSpace: 'nowrap', fontWeight: 500,
                                fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                            }}>
                                Ava Platt Branch</Typography>
                        </Box>
                        <Typography sx={{
                            color: '#08113B', textAlign: 'center', width: '100%',
                            fontSize: { xs: '14px', md: '16px' }, fontWeight: 500
                        }}>
                            No.D16, Floor +1, Ava Platt
                            Movahed Danesh, Aqdasiyeh, Tehran, Iran.
                        </Typography>
                    </Box>
                </Box>

                <ContactUs sx={{
                    py: { xs: '32px', md: '64px' },
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mb: '16px' }}>
                        <Typography variant="h6" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '18px', sm: '22px', md: '24px' }, fontWeight: 500, color: '#08113B'
                        }}>
                            Contact Number</Typography>
                        <Typography variant="p" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                        }}>
                            Whatsapp & Call
                        </Typography>
                    </Box>
                    <ButtonWhatsappContact width={'100%'} maxwidth={'290px'} mb={'8px'} text={'Whatsapp Link'} />
                    <ButtonFill width={'100%'} maxwidth={'290px'} text={'+98 910 674 19 71'} />
                </ContactUs>
            </Box>
        </>
    );
}

export default Contact;