import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { queryBarang, queryKategori, getAllAnime } from '../../api/index'
import { Grid, Typography } from "@mui/material";
import BarangCard from "./BarangCard"

const BarangContainer = (props) => {
    const barangs = useLoaderData()
  //  console.log(barangs);
    
   let content = barangs.rows.data.map((barang) => { 
    return(
      <Grid key={barang.id} item xs={12} sm={6} md={4} lg={3}>
          <BarangCard key={barang.id} {...barang}></BarangCard>
      </Grid>
    )
    
    })
  
  return (
    <div>
     
     <Typography variant="h4" align="center" sx={{ my: 3 }}>
        {props.title}
      </Typography>
      <Grid container spacing={2}>
        {content}
      </Grid>
  </div>
  )
    
}

export default BarangContainer


export const loader = async () => { 
    // const query = await queryBarang();
    const query = await getAllAnime();
    let result = {}

    result.rows = query
    // result.kategoriList = await queryKategori()
    return result
 }