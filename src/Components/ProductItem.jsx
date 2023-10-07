import React from "react";
import { Grid } from "@mui/material";
import {Grid,Card,CardContent,Rating}from "@mui/material";


 export const ProductItem=()=>{

    return(
        <Grid item xs={3}>

<Card>
    <CardContent>
        <h4>{item.title.slice (0,25)}...</h4>
        <img.src={item.image}  alt=**/>
        <p>{item.description.slice(0,100)}...</p>
        <Rating value={item.rating.rate}/>
        <h6>{item.category}</h6>
    </CardContent>
</Card>
        </Grid>

    )
}