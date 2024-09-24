import { Box, Typography } from "@mui/material";
import ButtonOutline from "../buttons/buttonOutline";
import jamshid from '../../assets/Persepolis.jpg'
import gopat from '../../assets/Gopat.jpg'
import nader from '../../assets/Nader-Mohaddes.jpg'
import diamond from '../../assets/Diamond.jpg'
import diamondRough from '../../assets/Rough-Diamond.jpg'

const PicsAndDets = () => {
    return (<Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        width: '100%', px: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box', mb: { xs: '50px', md: '60px' },
    }}>
        {/* section one */}
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '16px', md: '32px' },
            width: '100%', justifyContent: { xs: 'unset', sm: 'center' }, boxSizing: 'border-box', px: { sm: '0', lg: '128px' }
        }}>
            <Box sx={{
                // height: { xs: '437px', sm: '421px', md: '700px', lg: '814px' },
                // maxWidth: { xs: '100%', sm: '317px', md: '500px', lg: '610px' },
                width: '100%',
                display: 'block',
                aspectRatio: '1/1',
                mt: { xs: '0', md: '32px' },
                backgroundImage: `url(${gopat})`,
                justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} />
            <Box sx={{
                display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '32px' },
                // width: { xs: '100%', sm: '100%', lg: 'calc(100% - 610px)' },
                // width: { xs: '100%', sm: 'calc(100% - 317px)', md: '100%', md: 'calc(100% - 610px)' },
            }}>
                <Box sx={{
                    // width: { xs: '0', sm: '383px', md: '731px' },
                    // width: { xs: '0', sm: '100%', md: '100%' },
                    // height: { xs: '0', sm: '378px', md: '548px' },
                    width: '100%',
                    aspectRatio: '4/3',
                    display: { xs: 'none', sm: 'block' },
                    backgroundImage: `url(${jamshid})`,
                    justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <Typography variant='h2'
                        sx={{ color: '#08113b', fontWeight: '500', fontSize: { xs: '20px', sm: '22px', md: '24px' }, }}>GOPAT Mythology</Typography>
                    <Typography variant="p" sx={{
                        px: '16px', boxSizing: 'border-box',
                        width: '100%',
                        overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                        textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' },
                        fontStyle: 'italic', color: '#999999'
                    }}>
                        This mythological figure symbolizes the
                        protection and prosperity of livestock, which
                        were vital to the sustenance and economy of
                        early Iranian societies.
                    </Typography>
                    <ButtonOutline text={'READ MORE'} />
                </Box>
            </Box>
        </Box>
        {/* section two */}
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            gap: { xs: '32px', md: '32px' }, mt: { xs: '32px', sm: '50px', md: '60px' }, width: '100%'
        }}>
            <Box sx={{
                width: { xs: '100%', sm: '320px', md: '610px' },
                // height: { xs: '437px', sm: '420px', md: '814px' },
                backgroundImage: `url(${nader})`, aspectRatio: '3/4',
                justifySelf: 'center', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <Typography variant='h2' sx={{
                    color: '#08113b',
                    fontWeight: '500', fontSize: { xs: '20px', sm: '22px', md: '24px' },
                }}>
                    Entrepreneurs</Typography>
                <Typography variant="p" sx={{
                    width: { xs: '100%', md: '320px' },
                    overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                    textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    fontStyle: 'italic', color: '#999999', px: '16px', boxSizing: 'border-box',

                }}>
                    This mythological figure symbolizes the
                    protection and prosperity of livestock, which
                    were vital to the sustenance and economy of
                    early Iranian societies.
                </Typography>
                <ButtonOutline text={'READ MORE'} />
            </Box>
        </Box>

        {/* section three */}
        <Box sx={{
            display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', mt: { xs: '32px', sm: '50px', md: '60px' },
            boxSizing: 'border-box', px: { sm: '0', lg: '128px' }
            // justifyContent: 'center', alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' },
                gap: { xs: '16px', sm: '16px', md: '16px' }
            }}>
                <Box sx={{
                    // width: { xs: '100%', sm: '251px', md: '610px' },
                    // height: { xs: '437px', sm: '335px', md: '649px' },
                    width: { xs: '100%', sm: '50%' },
                    aspectRatio: '3/4',
                    backgroundImage: `url(${diamondRough})`,
                    justifySelf: 'center', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
                <Box sx={{
                    // height: { xs: '248px', sm: '335px', md: '649px' },
                    // width: { xs: '100%', sm: '100%', md: '100%' },
                    width: '100%',
                    aspectRatio: '4/3',
                    backgroundImage: `url(${diamond})`,
                    justifySelf: 'center', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <Typography variant='h2' sx={{
                    color: '#08113b', fontWeight: '500',
                    fontSize: { xs: '20px', sm: '22px', md: '24px' },
                }}>Diamonds</Typography>
                <Typography variant="p" sx={{
                    width: { xs: '100%', md: '320px' },
                    overflowWrap: 'break-word', mb: { xs: '16px', sm: '24px', md: '32px' },
                    px: '16px', boxSizing: 'border-box',
                    textAlign: 'center', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999'
                }}>
                    This mythological figure symbolizes the
                    protection and prosperity of livestock, which
                    were vital to the sustenance and economy of
                    early Iranian societies.
                </Typography>
                <ButtonOutline text={'READ MORE'} />
            </Box>
        </Box>

    </Box >);
}

export default PicsAndDets;