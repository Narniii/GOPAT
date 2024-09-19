import { Box, CircularProgress, Typography, } from "@mui/material";
import styled from "@emotion/styled/macro";
import girl from '../assets/girl.svg'
import ProductCard from '../components/collection/productCard'
import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))

const CollectionSingle = () => {
    const params = useParams()
    const id = params.id
    const [collection, setCollection] = useState(undefined)
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
    useEffect(() => {
        getCollection()
    }, [])

    return (<>
        {/* <Box sx={{
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
        </Box> */}
        {collection && images ? <>
            <Header hideDetailsOnMobile={false} images={images} title={`${collection.name} Collection`} />

            <Box sx={{
                mt: { xs: 'none', md: '60px' },
                display: { xs: 'grid', md: 'flex' },
                flexDirection: 'column', gap: '32px',
                gridTemplateColumns: 'auto auto', rowGap: '16px', columnGap: '8px',
                boxSizing: 'border-box', px: { xs: '16px', sm: '24px', md: '64px', lg: '256px' }, mb: { xs: '50px', md: '60px' }
            }}>
                <ProductCard link={'/product/tishtar-bangle/2'} />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Box>
        </>
            : <CircularProgress />}
    </>);
}

export default CollectionSingle;