import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        p: 2, 
        bgcolor: "#555555",
        textAlign: "right", 
        position: "fixed", 
        bottom: 0, 
        left: 0,
        width: "100vw",
      }}
    >
      <Typography variant="caption" color="textSecondary" sx={{ pl: 2 }}>
        <Link 
          href="/terms-of-service" 
          sx={{ 
            mx: 1, 
            textDecoration: "none", 
            color: "yellow",
            "&:hover": { color: "grey.600" } 
          }}
        >
          Terms
        </Link>
        <Link 
          href="/privacy-policy" 
          sx={{ 
            mx: 1, 
            textDecoration: "none", 
            color: "yellow",
            "&:hover": { color: "grey.600" } 
          }}
        >
          Privacy
        </Link>
        <Link 
          href="/find-help" 
          sx={{ 
            mx: 1, 
            textDecoration: "none", 
            color: "yellow",
            "&:hover": { color: "grey.600" } 
          }}
        >
          Help
        </Link>
        <Link 
          href="/report-issue" 
          sx={{ 
            mx: 1, 
            marginRight: 5,
            textDecoration: "none", 
            color: "yellow",
            "&:hover": { color: "grey.600" } 
          }}
        >
          Report
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
