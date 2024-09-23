import { Box, Typography, styled } from "@mui/material";
const Card = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    width: 'max-content'
}))
const CardImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#b3b3b3',
}))

const ProductCard = ({ name, price, details, image }) => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardImage sx={{
                aspectRatio: '1/1',
                // width: { xs: '160px', sm: '354px', md: '331px' },
                // width: '100%',
                // height: { xs: '160px', sm: '354px', md: '331px' },
                backgroundImage: `url(${image})`,

            }} />
            <Typography variant='h3' sx={{
                width: '100%', textAlign: 'center',
                mt: '16px',
                color: '#08113B', fontWeight: '500', fontSize: { xs: '12px', sm: '14px', md: '16px' },
            }}>{name}</Typography>
            <Typography variant="h6" sx={{
                whiteSpace: 'nowrap',
                width: '100%', textAlign: 'center',
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                fontStyle: 'italic', color: '#999999'
            }}>
                {details}
            </Typography>
            <Typography variant="h6"
                sx={{
                    whiteSpace: 'nowrap',
                    width: '100%', textAlign: 'center',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#08113B'
                }}>
                {price} T
            </Typography>

        </Card>
    );
}

export default ProductCard;