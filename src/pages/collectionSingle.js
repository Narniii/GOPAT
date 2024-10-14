import { Box, CircularProgress, Typography, } from "@mui/material";
import styled from "@emotion/styled/macro";
import ProductCard from '../components/collection/productCard'
import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))

const CollectionSingle = ({ language }) => {
    const params = useParams()
    const id = params.id
    const [collection, setCollection] = useState(undefined)
    const [products, setProducts] = useState(undefined)
    const [images, setImages] = useState(undefined)
    const getCollection = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/collections/${id}?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })

        let response = await request.json()
        console.log(response)
        setCollection(response.data.attributes)
        let imgs = []
        for (let i = 0; i < response.data.attributes.images.data.length; i++) {
            imgs.push(`https://admin.gopatjewelry.com${response.data.attributes.images.data[i].attributes.url}`)
        }
        setImages(imgs)
    }
    const getProducts = async () => {
        let request = await fetch(`https://admin.gopatjewelry.com/api/collections/${id}?populate[products][populate]=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 210f4fdc9cfc30870e2f3ca17b2d4f410d6ae5ce2afaf1445b6118731abaf524c008c11a503bf8b3d7a4fdff7887a67578791c89077bb18c23df8b1a672c01df203eb28a3bbbf2f68867a683f12ba03ac070acdbaa08bc5b970f51334fdb102bc1154e6009e3d3c00d6f80a6dbb58b0dbe1691f560e5f582dde5c65f5ded68c9`,
            }
        })

        let response = await request.json()
        console.log(response)
        setProducts(response.data.attributes.products.data)

    }

    useEffect(() => {
        getCollection()
        getProducts()
    }, [])

    return (<>
        {collection && images ? <>
            <Header hideDetailsOnMobile={false} images={images} title={language == 'en' ? `${collection.name} Collection` : `مجموعه ${collection.nameFa}`} />

            <Box sx={{
                mt: { xs: 'none', md: '60px' },
                display: { xs: 'grid', md: 'flex' },
                flexDirection: 'column', gap: '32px',
                gridTemplateColumns: '1fr 1fr', rowGap: '16px', columnGap: '8px',
                boxSizing: 'border-box', px: { xs: '16px', sm: '24px', md: '64px', lg: '256px' }, mb: { xs: '50px', md: '60px' }
            }}>
                {products ? <>
                    {products.length > 0 ? <>
                        {products.map((product) => {
                            return (
                                <ProductCard name={product.attributes.name} price={product.attributes.price}
                                    details={product.attributes.details} nameFa={product.attributes.nameFa}
                                    detailsFa={product.attributes.detailsFa} language={language}
                                    images={product.attributes.medias.data} link={`/product/${product.attributes.name}/${product.id}`} />
                            )
                        })}
                    </> : <Typography
                        sx={{ textTransform: 'capitalize', color: '#08113B', textAlign: 'center', fontWeight: 500 }}>
                        {language == 'en' ? 'There Are No Products in this collection yet' : 'محصولی در این مجموعه یافت نشد'}</Typography>}
                </> : <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress sx={{ color: '#08113b' }} />
                </Box>}
            </Box>
        </>
            : <Box sx={{ display: 'flex', width: '100%', height: '500px', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress sx={{ color: '#08113b' }} />
            </Box>}
    </>);
}

export default CollectionSingle;