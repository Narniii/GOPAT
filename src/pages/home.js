import { Box } from "@mui/material";
import Intro from "../components/homePage/intro";
import Slider from "../components/homePage/slides";
import PicsAndDets from "../components/homePage/picture&detailsSection";

const Home = ({language}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', width: '100%' }}>
            <Intro language={language}/>
            <Slider language={language}/>
            <PicsAndDets language={language}/>
        </Box>
    );
}

export default Home;