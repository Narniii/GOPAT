import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Card = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    width: 'max-content'
}))
const CardImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#b3b3b3',
    backgroundSize: 'cover'
}))

const ProductCard = ({ name, price, details, image, id, language, nameFa, detailsFa }) => {
    const navigate = useNavigate()
    return (
        <Card sx={{ width: '100%', cursor: 'pointer' }} onClick={() => navigate(`/product/${name}/${id}`)}>
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
            }}>{language == 'en' ? name : nameFa}</Typography>
            <Typography variant="h6" sx={{
                whiteSpace: 'nowrap',
                width: '100%', textAlign: 'center',
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                fontStyle: 'italic', color: '#999999'
            }}>
                {language == 'en' ? details : detailsFa}
            </Typography>
            <Typography variant="h6"
                sx={{
                    whiteSpace: 'nowrap',
                    width: '100%', textAlign: 'center',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#08113B'
                }}>
                {price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : undefined} T
            </Typography>

        </Card>
    );
}

export default ProductCard;