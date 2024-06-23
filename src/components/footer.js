import { Box, styled } from "@mui/material";
const Foot = styled(Box)(({ theme }) => ({
    display: 'flex', flexDirection: 'column',
    borderTop: '1px solid #999999',
    justifyContent: 'center', alignItems: 'center',
}))

const Footer = () => {
    return (
        <Foot>

        </Foot>
    );
}

export default Footer;