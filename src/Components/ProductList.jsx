import  React, { useEffect } from "react"
import { Grid } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";


export const ProductList=()=>{
    const[data,setData]=useState([]);

    const getData=async ()=>{
const result =await axios.get("https://fakestoreapi.com/products")
setData(result.data)
};
 useEffect (()=>{
    getData();},[])
 
    return(
        <Grid container spacing=
            <Card>
                <CardContent>

                </CardContent>
            </Card>

        </Grid>

    )
}