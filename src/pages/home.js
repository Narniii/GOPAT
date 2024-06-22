import { Box } from "@mui/material";
import Intro from "../components/homePage/intro";

const Home = () => {
    return (
        <Box sx={{ display: 'flex', boxSizing: 'border-box', width: '100%' }}>
            <Intro />
        </Box>
    );
}

export default Home;