import { Menu } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import '../App.css';

const Navbar = () => {
    function changeButtonClass() {
        var element = document.getElementById("PMbutton");
        // element.classList.remove("pmButton")
        if (element.classList.contains("pmButtonSelected")) {
            element.classList.remove("pmButtonSelected")
        } else {
            element.classList.add("pmButtonSelected")
        }
    }

    return (
        <Box sx={{
            bgcolor: 'darkblue',
            width: '100%',
            height: { xs: '70px', sm: '80px', md: '120px' }, display: 'flex', alignItems: 'center'
        }}>
            <Menu sx={{ color: 'white', fontSize: { xs: '16px', sm: '24px', md: '32px' } }} />
            <button id="PMbutton" className="pmButton" onClick={changeButtonClass}>
                <span></span>
                <span></span>
            </button>

        </Box>
    );
}

export default Navbar;