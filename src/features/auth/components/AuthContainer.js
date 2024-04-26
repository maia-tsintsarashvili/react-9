import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { Link } from "../../../components/atoms";
import LogoImage from '../../../assets/images/logo.jpg'



export const AuthContainer = ({ children }) => {
  return (
    <StyledContainer>
      <Link to ="/">
     <img src ={LogoImage} width ={250} height = {250} alt ="logo"/>
      </Link>
      <StyledStack>{children}</StyledStack>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px 24px 24px 24px",
  [theme.breakpoints]:{
    padding:"24px 16px",
  },
}));

const StyledStack = styled(Stack)(({theme}) => ({
  width: 500,
  padding: "12px 12px",
  borderRadius: 16,
  border: "2px solid #FFFFFF",
  backdropFilter: "blur(20px)",
  background: "rgba(255,255,255,037)",
  boxShadow: "0px 60px 180px rgba(0,0,0,0.15)",
  [theme.breakpoints] :{
    width: "100%",
  },
}));

