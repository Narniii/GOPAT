import { Box, Typography, styled } from "@mui/material";
const Card = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    width: 'max-content'
}))
const CardImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#999999',
}))

const ProductCard = () => {
    return (
        <Card sx={{ gap: '16px', }}>
            <CardImage sx={{
                width: { xs: '160px', sm: '354px', md: '331px' },
                height: { xs: '160px', sm: '354px', md: '331px' },
            }} />
            <Typography variant='h3' sx={{ mt: '16px', color: 'black', fontWeight: 'bold', fontSize: { xs: '12px', sm: '14px', md: '16px' }, }}>tishtar bangle</Typography>
            <Typography variant="h6" sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999' }}>
                0.07ct D, Silver 950, Unisex
            </Typography>
            <Typography variant="h6" sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#999999' }}>
                14.350.000 T
            </Typography>

        </Card>
    );
}

export default ProductCard;