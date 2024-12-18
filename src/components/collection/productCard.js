import { Box, Typography, styled } from "@mui/material";
import ButtonFillRound from "../buttons/buttonFillRound";
import { useNavigate } from "react-router-dom";
const Card = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    width: 'max-content'
}))
const CardImage = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#999999',
    cursor: 'pointer',
    backgroundSize: 'cover'
}))

const ProductCard = ({ name, images, price, details, link, nameFa, detailsFa, language }) => {
    console.log(images)
    let imgs = []
    for (let i = 0; i < images.length; i++) {
        imgs.push((`https://admin.gopatjewelry.com${images[i].attributes.url}`))
    }
    const navigate = useNavigate()
    return (
        <Card sx={{ width: { xs: '100%' } }}>
            <Box sx={{ display: 'flex', gap: '4px', width: '100%' }}>
                <CardImage onClick={() => navigate(link)} sx={{
                    // width: { xs: '160px', sm: '354px', md: '331px' },
                    aspectRatio: '1/1',
                    width: { xs: '100%', md: '50%' },
                    backgroundImage: `url(${imgs[0]})`,
                    // height: { xs: '160px', sm: '354px', md: '331px' },
                }} />
                <CardImage onClick={() => navigate(link)} sx={{
                    aspectRatio: '1/1',
                    display: { xs: 'none', md: 'block' },
                    width: { xs: '100%', md: '50%' },
                    backgroundImage: `url(${imgs[1]})`,
                    // height: { xs: '160px', sm: '354px', md: '331px' },
                }} />
            </Box>
            <Box onClick={() => navigate(link)} sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center',
            }}>
                <Typography
                    variant='h3'
                    sx={{ mt: '16px', color: '#08113B', fontWeight: '500', fontSize: { xs: '12px', sm: '14px', md: '16px' }, }}>
                    {language == 'en' ? name : nameFa}</Typography>
                <Typography
                    variant="h6"
                    sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999' }}>
                    {language == 'en' ? details : detailsFa}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ my: '8px', whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#08113B' }}>
                    {price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : undefined} T
                </Typography>
                <ButtonFillRound action={() => navigate(link)} text={language == 'en' ? 'Order' : 'سفارش'} />
            </Box>
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row', width: '50%',
                justifyContent: 'space-between', alignItems: 'center',
            }}>
                <Box onClick={() => navigate(link)} sx={{
                    flexDirection: 'column', width: '100%',
                    justifyContent: 'center', alignItems: 'center',
                }}>
                    <Typography
                        variant='h3'
                        sx={{ mt: '16px', color: '#08113B', fontWeight: '500', fontSize: { xs: '12px', sm: '14px', md: '16px' }, }}>
                        {language == 'en' ? name : nameFa}</Typography>
                    <Typography
                        variant="h6"
                        sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#08113B' }}>
                        {price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : undefined} T
                    </Typography>
                </Box>
                <ButtonFillRound action={() => navigate(link)} text={language == 'en' ? 'Order' : 'سفارش'} />
            </Box>

        </Card>
    );
}

export default ProductCard;