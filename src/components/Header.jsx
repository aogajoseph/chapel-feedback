import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar 
    position="static" 
    sx={{ backgroundColor: "#555555" }}
    elevation={1}
  >
      <Toolbar>
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
