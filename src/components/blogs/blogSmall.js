import styled from "@emotion/styled/macro";
import { Box, Typography } from "@mui/material";
import ButtonOutline from "../buttons/buttonOutline";
import { useNavigate } from "react-router-dom";
const Image = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center', backgroundColor: '#d9d9d9',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
}))
const Details = styled(Box)(({ theme }) => ({
    display: 'flex', boxSizing: 'border-box',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))

const BlogSmall = ({ image, title, id, subtitle, description, date }) => {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'space-between',
            boxSizing: 'border-box', px: { xs: '16px', md: '0' }, width: '100%',
            gap: { xs: '16px', md: '0' }
        }}>
            <Details sx={{
                padding: { xs: '0 32px', md: '16px 32px' }, gap: '16px'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'center' }}>
                    <Typography variant="h1" sx={{
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                    }}>
                        {title}</Typography>
                    <Typography variant="h1" sx={{
                        whiteSpace: 'nowrap', fontWeight: 500,
                        fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                    }}>
                        {subtitle}
                    </Typography>
                </Box>
                <Typography sx={{
                    color: '#999', fontSize: '14px',
                    // width: { xs: '100%', md: '400px' },
                    textAlign: 'center', fontWeight: 500
                }}>
                    {description}
                </Typography>
                <ButtonOutline text={'Read More'} action={() => navigate(`/blog/${id}/${title}`)} />
            </Details>
            <Image sx={{
                aspectRatio: { xs: '4/3', md: '1/1' },
                //  width: { xs: '100%', md: '480px' },
                width: '100%',
                backgroundImage: `url(${image})`,
            }} />
        </Box>
    );
}

export default BlogSmall;