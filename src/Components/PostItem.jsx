import React from "react";
import {Grid,Card,CardContent}

const PostItem=()=>{

    return(
        <Grid item xs={12}>
        <Card>
        <CardContent>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
        </CardContent>
        </Card>
        </Grid>


    )
}