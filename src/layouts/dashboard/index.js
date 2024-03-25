import { Box, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico"

const DashboardLayout = () => {
  // sx prop is used to pass styles in all the MUI components
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0.25) ",
          height: "100vh",
          width: 100,
        }}
      >
        
        <Box 
        sx={{
          bgcolor: theme.palette.primary.main,
          height: 64,
          width: 64,
          borderRadius:1.5, // 12/8
        }}>
          <img src={Logo} alt="chat app logo "></img>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;

// stack in mui is componet that uses flex property