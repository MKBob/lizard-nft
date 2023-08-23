// import { Grid } from "@mui/material";
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './home.css'
import { Fade } from 'react-reveal'


function Home() {
  return (
    <div id='Home' className='Home'>
        <Grid container className='secOne' justifyContent='center' alignItem='center' >
            <Grid item className= 'secOnehome' xs={11}>
              <Fade bottom>
              <h1>
              Welcome To The <br/>GICO GANG
              </h1>
              </Fade>
              <button className="Homebtn">Available On OpenSea</button>
            </Grid>
        </Grid>
    </div>
  )
}

export default Home