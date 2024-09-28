import { Box, Skeleton, Typography } from "@mui/material";
import CustomSlider from "../customSlider";
import ProductCard from "./productCard";
import { useEffect, useState } from "react";

const Slider = ({ language }) => {
    const [products, setProducts] = useState(undefined)
    const getProducts = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/products?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })
        let response = await request.json()
        console.log(response)
        setProducts(response.data)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
            width: '100%', px: { xs: '16px', sm: '24px', md: '32px' }, boxSizing: 'border-box', my: { xs: '50px', md: '60px' },
        }}>
            <Typography variant="h1"
                sx={{ whiteSpace: 'nowrap', fontSize: { xs: '24px', sm: '28px', md: '32px' }, color: '#08113b', fontWeight: '500' }}>
                {language == 'en' ? 'Iconic Products' : 'محصولات'}
            </Typography>
            <Box sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', boxSizing: 'border-box', mt: '60px'
            }}>
                {products ?
                    <CustomSlider slidesCount={4}>
                        {products.map((product) => {
                            return (
                                <ProductCard
                                    language={language}
                                    nameFa={product.attributes.nameFa}
                                    detailsFa={product.attributes.detailsFa}
                                    id={product.id} name={product.attributes.name}
                                    price={product.attributes.price}
                                    details={product.attributes.details}
                                    image={`https://admin.gopatjewelry.com${product.attributes.medias.data[0].attributes.url}`}
                                />
                            )
                        })}
                    </CustomSlider>
                    :
                    <CustomSlider slidesCount={4}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </CustomSlider>
                }
            </Box>
        </Box>
    );
}

export default Slider;