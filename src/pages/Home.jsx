import { Container } from "@mui/system";
import React from "react";
import BarangContainer from "../components/Barang/BarangContainer";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h5" sx={{ my: 3 }} align="center">
          Our Products
        </Typography>
        <BarangContainer></BarangContainer>
      </Container>
    </div>
  );
};

export default Home;
