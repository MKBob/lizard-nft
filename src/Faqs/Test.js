
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "./Test.css"
import { Fade } from 'react-reveal';
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <section  main_section style={{backgroundColor:'whitesmoke', paddingBottom:'40px'}}>
    <div id='Faqs'>
        <Grid container  justifyContent="center" alignItems={"center"}>
            <Grid item className='section-head' xs={11}  md={10} lg={8}>

        <Grid>
            <section item className='background_faq' style={{backgroundColor:'whitesmoke'}}>
                <Grid container justifyContent="center">
                    <Grid>
                      <div data-aos="fade-up">
                    <h1 className='text'>FREQUENTLY ASKED QUESTIONS</h1>
                    </div>
                    <div data-aos='fade-up'>
                    <Accordion className="faq_container" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h1 className='text_faq'>When Is Minting Live?</h1>         
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-faq' >
          Minting was on 11/11/2021.

             Gico are available on OpenSea’s secondary market here:
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h1 className='text_faq'>Should I Mint A Gico?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className= "text-faq">
          Do you like NFTs and dangerous experiments? Same answer. <br />

          A snapshot of all holders will be taken soon after the mint concludes. What for? The future will tell… Probably some kind of experiment. <br />

          Holding a Gico will make you a part of the community with a voice in the direction of the Gico Lab. The story continues, and you’ll be a part of it. See more in the answer below. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h1 className='text_faq'>What Does Owning A Gico Get Me?</h1>
      
        </AccordionSummary>
        <AccordionDetails>
          <Typography className= "text-faq">
          See our full roadmap above.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="faq_container" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <h1 className='text_faq'>What Is The Lab Tour?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className= "text-faq">
          The Lab Tour is a self-guided tour that you can access in our Discord. <br />
          After <br /> you join and verify, you’ll find a #Lab-Entrance channel in the bottom left. Join the channel, and enjoy your trip through the lab. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="faq_container" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <h1  className='text_faq'>When Tokenomics?</h1>
        </AccordionSummary>
        <AccordionDetails  >
          <Typography className="text-faq" >
          We already have a ton of interesting ideas on how to include Tokenomics into the lab. We’ll work through the specific details after our launch along with the help of our holders when the time is right.

        Launching a token is very simple, and easy to do wrong. If/when we launch a token, it will be done deliberately and mindfully as to bring unique utility to the project while being sustainable long-term.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </Grid>
     </Grid>
      </section>
      </Grid>
      </Grid>
        </Grid>
    </div>
    </section>
  );
}