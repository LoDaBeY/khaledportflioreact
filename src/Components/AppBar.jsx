import {
  AppBar,
  Box,
  IconButton,

  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4Outlined } from "@mui/icons-material";
import  './AppBar.css'

function Appbar() {
  return (
    <div>
      <Box>
        <AppBar className="AppBar" position="static">
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div"  color="black"   sx={{ display: "flex" }}>
              Khaled   <span>Ghonim</span>
            </Typography>


            <IconButton aria-label="Dark Mood">
              <Brightness4Outlined/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Appbar;
