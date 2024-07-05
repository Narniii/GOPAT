import { Box, Typography, styled } from "@mui/material";
import ButtonFillRound from "../buttonFillRound";
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
    cursor: 'pointer'
}))

const ProductCard = ({ link }) => {
    const navigate = useNavigate()
    return (
        <Card sx={{ width: { xs: '100%' } }}>
            <Box sx={{ display: 'flex', gap: '4px', width: '100%' }}>
                <CardImage onClick={() => navigate(link)} sx={{
                    // width: { xs: '160px', sm: '354px', md: '331px' },
                    aspectRatio: '1/1',
                    width: { xs: '100%', md: '50%' },
                    // height: { xs: '160px', sm: '354px', md: '331px' },
                }} />
                <CardImage onClick={() => navigate(link)} sx={{
                    aspectRatio: '1/1',
                    display: { xs: 'none', md: 'block' },
                    width: { xs: '100%', md: '50%' },
                    // height: { xs: '160px', sm: '354px', md: '331px' },
                }} />
            </Box>
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center',
            }}>
                <Typography
                    variant='h3'
                    sx={{ mt: '16px', color: '#08113B', fontWeight: '500', fontSize: { xs: '12px', sm: '14px', md: '16px' }, }}>
                    tishtar bangle</Typography>
                <Typography
                    variant="h6"
                    sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, fontStyle: 'italic', color: '#999999' }}>
                    0.07ct D, Silver 950, Unisex
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ my: '8px', whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#08113B' }}>
                    14.350.000 T
                </Typography>
                <ButtonFillRound onClick={() => navigate(link)} text={'Order'} />
            </Box>
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row', width: '50%',
                justifyContent: 'space-between', alignItems: 'center',
            }}>
                <Box sx={{
                    flexDirection: 'column', width: '100%',
                    justifyContent: 'center', alignItems: 'center',
                }}>
                    <Typography
                        variant='h3'
                        sx={{ mt: '16px', color: '#08113B', fontWeight: '500', fontSize: { xs: '12px', sm: '14px', md: '16px' }, }}>
                        tishtar bangle</Typography>
                    <Typography
                        variant="h6"
                        sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#08113B' }}>
                        14.350.000 T
                    </Typography>
                </Box>
                <ButtonFillRound onClick={() => navigate(link)} text={'Order'} />
            </Box>

        </Card>
    );
}

export default ProductCard;