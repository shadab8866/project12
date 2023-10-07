import React, { useState } from "react";
import {Grid} from "@mui/material";
import {PostItem} from"./PostItem";
import axios from "axios";


export const PostList=()=>{
    const[data,setData]=useState([]);

const getData=async ()=>{
    const result= await axios.get("https://jsonplaceholder.typicode.com/posts")
};

   return(
 <Grid>

 </Grid>
   )

}