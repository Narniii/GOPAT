import { Box } from "@mui/material";
import Intro from "../components/homePage/intro";
import Slider from "../components/homePage/slides";
import PicsAndDets from "../components/homePage/picture&detailsSection";

const Home = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: '100%' }}>
            <Intro />
            <Slider />
            <PicsAndDets />
        </Box>
    );
}

export default Home;