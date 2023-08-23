import { Grid } from '@material-ui/core';
import React from 'react'
import "./About.css"
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div id='About'>
      <div className='about-bg'>
      <Grid className="second-about" container justifyContent="space-evenly">
        <Grid item xs={11} md={10} lg={10}>
          <Grid container className="aboutPara">
            <Grid item lg={6} className="aboutText">
              <div data-aos="fade-up">
              <h1 className='text-m' color='#F3982D'>
                Meet The GICO GANG
              </h1>
              </div>
              <div data-aos="fade-up" duration={3000}>
              <p className='text_one'>
              Every Gico is unique and outfitted with a variety of attributes, including the background, foreground, head, back, nose, neck, eyes, mouth, and more, with millions of unique possibilities.
              </p>
              </div>
              <br />
              <div data-aos="fade-up" duration={3000}>
              <p className='text_one'>
              In The Gico Lab, you’ll explore the story of famed scientist [REDACTED], who went missing after a catastrophic incident in 1985. 
              </p>
              </div>
              <br />
              <div data-aos="fade-up" duration={3000}>
              <p className='text_one'>
              You’ll enter the unstable mind of the scientist through an exploratory storytelling journey through the lab, where details are found non-linearly through notes, journal entries, and more.
              </p>
              </div>
              <br />
              <div data-aos="fade-up" duration={3000}>
              <p className='text_one'>
                By traversing through a series of puzzles, players will get to explore [REDACTED]’s memories which will help them piece together events from his past and discover the secrets of the lab.
                </p>
                </div>
            </Grid>
            <Grid item >
              <div className='aboutImages' >
                <div data-aos="flip-left">
                <img className='img_sec' src="./assets/5.png" />
                <img className='img_sec' src="./assets/9.png" />
                </div>
              </div>
              <div className='aboutImages'>
                <div data-aos="flip-left">
                <img className='img_sec' src="./assets/8.png" />
                <img className='img_sec' src="./assets/7.png" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default About;

