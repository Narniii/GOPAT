import { Box, Typography, } from "@mui/material";
import styled from "@emotion/styled/macro";
import girl from '../assets/girl.svg'
import ProductCard from '../components/collection/productCard'
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))

const CollectionSingle = () => {
    return (<>
        <Box sx={{
            height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
            width: '100%', boxSizing: 'border-box',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            mb: { xs: 'none', md: '60px' }
        }}>
            <Box sx={{
                height: '100%', width: '100%',
                backgroundImage: `url(${girl})`,
                justifySelf: 'center',
                aspectRatio: { xs: '3/4', md: '4/3' },
                backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }} />
            <Details sx={{
                mx: { xs: '32px', md: '100px' },
                my: { xs: '50px', md: '60px' },
                gap: { xs: '8px', sm: '12px', md: '16px' }
            }}>
                <Typography variant="h1" sx={{
                    whiteSpace: 'nowrap',
                    fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                }}>
                    Tishtar Collection</Typography>
            </Details>
        </Box>
        <Box sx={{
            display: { xs: 'grid', md: 'flex' },
            flexDirection: 'column', gap: '32px',
            gridTemplateColumns: 'auto auto', rowGap: '16px', columnGap: '8px',
            boxSizing: 'border-box', px: { xs: '16px', sm: '24px', md: '64px', lg: '256px' }, mb: { xs: '50px', md: '60px' }
        }}>
            <ProductCard link={'/product/bangle/tishtar'} />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Box>

    </>);
}

export default CollectionSingle;