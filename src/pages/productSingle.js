import { Box, Typography, styled } from "@mui/material";
import stars from '../assets/stars.svg'
import boutique from '../assets/boutique.svg'
import hourglass from '../assets/hourglass.svg'
import product from '../assets/product.svg'
import product1 from '../assets/product1.svg'
import product2 from '../assets/product2.svg'
import polish from '../assets/Polishing.svg'
import durable from '../assets/Durable.svg'
import ButtonOutline from "../components/buttonOutline";
import ButtonWhatsapp from "../components/buttonWhatsapp";
import ButtonFillIcon from "../components/buttonFillIcon";
import { MenuTabOpenable } from "../components/menuTab";
import { HourglassBottom, HourglassEmpty, Light, Security, SecurityOutlined, ShieldOutlined, StarBorder } from "@mui/icons-material";
const StarSection = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    width: '100%', boxSizing: 'border-box',
    alignItems: 'center',
}))
const StarImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundImage: `url(${stars})`,
}))
const DesktopImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundColor: '#999',
    width: '100%',
    // height: 'calc(100vh - 188px)',
    height: '840px',
}))
const DesktopImagesScroll = styled(Box)(({ theme }) => ({
    // display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
    boxSizing: 'border-box', gap: '8px',
    width: '100%',
    // height: '100%',
    // height: 'calc(100vh - 188px)',
    height: '840px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
        display: 'none',
    },
    '&::-webkit-scrollbar-button': {
        display: 'none',
    },
}))
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
    justifyContent: 'start', alignItems: 'center', width: 'max-content',
    "@media (max-width: 900px)": {
        width: '100%'
    },

}))
const LineDesktp = styled(Box)(({ theme }) => ({
    height: '1px', backgroundColor: '#b3b3b3'
}))
const DetailsExtra = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
    justifyContent: 'start', alignItems: 'center',
}))
const ExtraImage = styled(Box)(({ theme }) => ({
    borderRadius: '100%', width: '64px', height: '64px', backgroundColor: '#f5f5f5',
    display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', padding: '16px'
}))
const ExtraImageIcon = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
}))
const MobileImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundColor: '#999',
    width: '100vw',
    // height: 'calc(100vh - 188px)',
    height: '100%',
}))
const MobileImagesScroll = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    // height: 'calc(100vh - 70px)',
    overflowY: 'hidden',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        // display: 'none',
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


const ProductSingle = () => {
    return (<Box sx={{
        padding: { xs: '0 0 50px', md: '60px 32px' },
        display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: '100%', alignItems: 'center'
    }}>
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            width: '100%', flexWrap: 'nowrap',
            display: 'flex',
        }}>
            <DesktopImagesScroll sx={{
                display: { xs: 'none', md: 'block' }
            }}>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                    boxSizing: 'border-box', gap: '8px',
                    width: '100%',
                }}>
                    <DesktopImage sx={{
                        backgroundImage: `url(${product2})`,
                    }} />
                    <DesktopImage sx={{
                        backgroundImage: `url(${product1})`,
                    }} />
                    <DesktopImage sx={{
                        backgroundImage: `url(${product})`,
                    }} />
                </Box>
            </DesktopImagesScroll>

            <MobileImagesScroll
                sx={{
                    display: { xs: 'block', md: 'none' },
                    // height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)' },
                    height: '420px'
                }}>
                <Box sx={{
                    display: 'flex',
                    height: '100%',
                    boxSizing: 'border-box',
                    width: 'max-content', flexWrap: 'nowrap'
                }}>
                    <MobileImage sx={{
                        backgroundImage: `url(${product2})`,
                    }} />
                    <MobileImage sx={{
                        backgroundImage: `url(${product1})`,
                    }} />
                    <MobileImage sx={{
                        backgroundImage: `url(${product})`,
                    }} />
                </Box>
            </MobileImagesScroll>

            <Details
                sx={{
                    // position: 'sticky', right: '0',
                    padding: { xs: '0px', md: '0px 24px', lg: '0px 32px' }
                }}
            >
                <Details
                    sx={{
                        padding: { xs: '0px 16px', sm: '0px 24px', md: '0px' }
                    }}
                >
                    <Typography variant="h1" sx={{
                        whiteSpace: 'nowrap', mt: '50px',
                        fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500,
                        color: '#08113b'
                    }}>
                        Tishtar Necklace
                    </Typography>
                    <Typography variant="p" sx={{
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '14px', sm: '16px', md: '16px' }, fontWeight: 400,
                        color: '#b3b3b3'
                    }}>
                        0.07ct Diamond, 925 Silver
                    </Typography>
                    <Typography variant="p" sx={{
                        whiteSpace: 'nowrap', my: { xs: '16px', sm: '24px', md: '32px' },
                        fontSize: { xs: '16px', sm: '16px', md: '18px' }, fontWeight: 500,
                        color: '#08113b'
                    }}>
                        16,064,000 T
                    </Typography>
                    <ButtonWhatsapp maxwidth={'290px'} width={'100%'} mb={'8px'} />
                    <ButtonFillIcon maxwidth={'290px'} width={'100%'} icon={boutique} text={'Find A Boutique'} />
                </Details>
                <LineDesktp sx={{ width: '100%', my: '32px' }} />
                <Details
                    sx={{
                        padding: { xs: '0px 16px', sm: '0px 24px', md: '0px' }
                    }}
                >
                    <Box sx={{
                        boxSizing: 'border-box', px: { md: '24px', lg: '32px' },
                        display: 'flex', flexDirection: 'column', mb: '16px',
                        width: '100%', gap: { xs: '8px', sm: '16px', md: '16px' }
                    }}>
                        <Typography variant="p" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '14px', sm: '16px', md: '16px' }, fontWeight: 400,
                            color: '#b3b3b3', borderBottom: '1px solid #b3b3b3',
                            pb: { xs: '16px', sm: '16px', md: '16px' }
                        }}>
                            Craftmanship Info
                        </Typography>
                        <MenuTabOpenable text={'Body'} id={'body-info'} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
                        <MenuTabOpenable text={'Diamond'} id={'diamond-info'} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
                        <MenuTabOpenable text={'Size Chart'} id={'size-info'} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
                        <MenuTabOpenable text={'Typography'} id={'typo-info'} pb={{ xs: '8px', sm: '16px', md: '16px' }} />
                    </Box>
                    <Box sx={{
                        boxSizing: 'border-box', px: { md: '24px', lg: '32px' },
                        display: 'flex', flexDirection: 'row', mb: '16px',
                        width: '100%', gap: '32px', justifyContent: 'center'
                    }}>
                        <DetailsExtra>
                            <ExtraImage>
                                <ExtraImageIcon sx={{ backgroundImage: `url(${hourglass})`, width: '32px', height: '32px' }} />
                            </ExtraImage>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#08113b', overflowWrap: 'break-word', textAlign: 'center'
                            }}>
                                Timeless
                                Design
                            </Typography>
                        </DetailsExtra>
                        <DetailsExtra>
                            <ExtraImage>
                                <ExtraImageIcon sx={{ backgroundImage: `url(${polish})`, width: '32px', height: '32px' }} />
                            </ExtraImage>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#08113b', overflowWrap: 'break-word', textAlign: 'center'
                            }}>
                                Free Polishing
                            </Typography>
                        </DetailsExtra>
                        <DetailsExtra>
                            <ExtraImage>
                                <ExtraImageIcon sx={{ backgroundImage: `url(${durable})`, width: '32px', height: '32px' }} />
                            </ExtraImage>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#08113b', overflowWrap: 'break-word', textAlign: 'center'
                            }}>
                                Durable Material
                            </Typography>
                        </DetailsExtra>
                    </Box>
                </Details>
            </Details>

        </Box>






        <StarSection sx={{
            gap: { xs: '24px', md: '32px' },
            padding: { xs: '64px 16px 0', sm: '128px 24px 0', md: '128px 32px 0' }
        }}>
            <StarImage sx={{
                width: { xs: '100%', sm: '500px', md: '850px' },
                height: { xs: '245px', sm: '430px', md: '680px' }
            }} />
            <Box sx={{
                display: 'flex', flexDirection: 'column', boxSizing: 'border-box',
                alignItems: 'center'
            }}>
                <Typography
                    sx={{ color: '#08113b', fontWeight: '500', fontSize: { xs: '16px', sm: '18px', }, }}>
                    Tishtar Story
                </Typography>
                <Typography sx={{
                    mb: '16px',
                    width: { xs: '100%', sm: '400px' },
                    textAlign: 'center', overflowWrap: 'break-word',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' }, color: '#999999'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    sodhsohvspoujspovsvv
                </Typography>
                <ButtonOutline text={'read more'} />
            </Box>
        </StarSection>

    </Box >);
}

export default ProductSingle;