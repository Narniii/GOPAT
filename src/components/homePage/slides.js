import { Box, Skeleton, Typography } from "@mui/material";
import CustomSlider from "../customSlider";
import ProductCard from "./productCard";

const Slider = () => {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
            width: '100%', px: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box', my: '60px'
        }}>
            <Typography variant="h1"
                sx={{ whiteSpace: 'nowrap', fontSize: { xs: '24px', sm: '28px', md: '32px' }, color: '#000', fontWeight: 'bold' }}>
                Iconic Products
            </Typography>
            <Box sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', boxSizing: 'border-box', mt: '60px'
            }}>
                <CustomSlider slidesCount={4}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </CustomSlider>
            </Box>
        </Box>
    );
}

export default Slider;