import React from "react";
import{Grid,Card,CardContent} from"@mui/material

export const UserItem=({item})=>{

    return(
        <Grid item xs={4}>
<Card>
    <CardContent>
        <h4>{item.name}</h4>
        <h4>{item.email}</h4>
    </CardContent>
</Card>

        </Grid>


    )
}