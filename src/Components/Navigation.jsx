import React from "react";
import{Grid,Card,CardContent,Button} from"@mui/material";
import{Link}from "react-router-dom";


export const Navigation=()=>{

    return(
        <Card sx={{bgcolor:'lightblue'}}>
            <CardContent>
                <Grid  container spacing={2}>
<Grid item xs={2}>
    <Link to="/">
<Button color='warning' variant="contained" fullWidth>Home</Button>
</Link>
</Grid>
<Grid item xs={2}>
    <Link to="/Product">
<Button color='warning' variant="contained" fullWidth>Product</Button>
</Link>
</Grid>
<Grid item xs={2}>
    <Link to="/Contact">
<Button color='warning' variant="contained" fullWidth>Contact</Button>
</Link>
</Grid>
<Grid item xs={2}>
    <Link to="/Login">
<Button color='warning' variant="contained" fullWidth>Login</Button>
</Link>
</Grid>


                </Grid>
            </CardContent>
        </Card>
    )
}