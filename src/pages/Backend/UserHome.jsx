import { Container } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import BarangContainer from "../../components/Barang/BarangContainer";

const UserHome = () => {
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

export default UserHome;
