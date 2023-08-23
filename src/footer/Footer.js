import React from 'react'
import "./Footer.css"
import Grid from "@material-ui/core/Grid";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";




function Footer() {
  return (
    <div>
       <section className="last-section">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6} lg={3}>
            <img className="last-img" src="./assets/logo.png" alt="" />
            <Grid item>
              <div className="icon-top">
                
                <InstagramIcon style={{marginLeft:'10px'}} className="last-icon1" />
                <TwitterIcon style={{marginLeft:'15px'}} className="last-icon2" />
               
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div className="border-line">
          <h6 className="text-type">© The GICO GANG . All Rights Received</h6>
         
        </div>
      </section>
    </div>
  )
}

export default Footer;