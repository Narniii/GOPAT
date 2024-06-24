import { Box, Typography } from "@mui/material";
import ButtonOutline from "../buttonOutline";
import jamshid from '../../assets/Persepolis.jpg'
import gopat from '../../assets/Gopat.jpg'
import nader from '../../assets/Nader-Mohaddes.jpg'
import diamond from '../../assets/Diamond.jpg'
import diamondRough from '../../assets/Rough-Diamond.jpg'

const PicsAndDets = () => {
    return (<Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        width: '100%', px: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box', my: '60px',
    }}>
        {/* section one */}
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: '32px',
            width: '100%', justifyContent: { xs: 'unset', sm: 'center' }
        }}>
            <Box sx={{
                height: { xs: '437px', sm: '421px', md: '814px' },
                width: { xs: '100%', sm: '320px !important', md: '610px !important' }, mt: '32px',
                backgroundImage: `url(${gopat})`,
                justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} />
            <Box sx={{
                display: 'flex', flexDirection: 'column', gap: { xs: '24px', md: '60px' },
                width: { xs: '100%', sm: '100%', lg: 'calc(100% - 610px)' }
            }}>
                <Box sx={{
                    // width: { xs: '0', sm: '383px', md: '731px' },
                    width: { xs: '0', sm: '100%', md: '100%' },
                    height: { xs: '0', sm: '378px', md: '548px' },
                    display: { xs: 'none', sm: 'block' },
                    backgroundImage: `url(${jamshid})`,
                    justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Typography variant='h2' sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: '24px', sm: '28px', md: '32px' }, }}>GOPAT Mythology</Typography>
                    <Typography variant="p" sx={{
                        width: '320px',
                        overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                        textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999'
                    }}>
                        This mythological figure symbolizes the
                        protection and prosperity of livestock, which
                        were vital to the sustenance and economy of
                        early Iranian societies.
                    </Typography>
                    <ButtonOutline text={'Read More'} />
                </Box>
            </Box>
        </Box>
        {/* section two */}
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            gap: { xs: '24px', md: '60px' }, mt: { xs: '24px', sm: '32px', md: '60px' }, width: '100%'
        }}>
            <Box sx={{
                width: { xs: '100%', sm: '320px', md: '610px' },
                height: { xs: '437px', sm: '420px', md: '814px' },
                backgroundImage: `url(${nader})`,
                justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography variant='h2' sx={{
                    color: 'black',
                    fontWeight: 'bold', fontSize: { xs: '24px', sm: '28px', md: '32px' },
                }}>
                    Entrepreneurs</Typography>
                <Typography variant="p" sx={{
                    width: '320px', overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                    textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    fontStyle: 'italic', color: '#999999'
                }}>
                    This mythological figure symbolizes the
                    protection and prosperity of livestock, which
                    were vital to the sustenance and economy of
                    early Iranian societies.
                </Typography>
                <ButtonOutline text={'Read More'} />
            </Box>
        </Box>

        {/* section three */}
        <Box sx={{
            display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', mt: { xs: '24px', sm: '32px', md: '60px' }
            // justifyContent: 'center', alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' },
                gap: { xs: '16px', sm: '24px', md: '32px' }
            }}>
                <Box sx={{
                    width: { xs: '100%', sm: '251px', md: '610px' },
                    height: { xs: '437px', sm: '335px', md: '649px' },
                    backgroundImage: `url(${diamondRough})`,
                    justifySelf: 'center', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
                <Box sx={{
                    height: { xs: '248px', sm: '335px', md: '649px' },
                    width: { xs: '100%', sm: '100%', md: '100%' },
                    backgroundImage: `url(${diamond})`,
                    justifySelf: 'center', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Typography variant='h2' sx={{
                    color: 'black', fontWeight: 'bold',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' },
                }}>Diamonds</Typography>
                <Typography variant="p" sx={{
                    width: '320px', overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                    textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999'
                }}>
                    This mythological figure symbolizes the
                    protection and prosperity of livestock, which
                    were vital to the sustenance and economy of
                    early Iranian societies.
                </Typography>
                <ButtonOutline text={'Read More'} />
            </Box>
        </Box>

    </Box >);
}

export default PicsAndDets;