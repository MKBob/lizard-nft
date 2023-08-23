import React from 'react'
import "./Roadmap.css"
import Grid from '@material-ui/core/Grid';


function Roadmap() {
  return (
    <div id='Roadmap'>
        <section className='roadmap'>
            <Grid container  justifyContent='space-evenly'>
                <Grid item   xs={11} md={10} lg={9}>
                <div className='roadmapHeader'>
                    <h1>OUR ROADMAP</h1>
                    <div data-aos="fade-up">
                    <p>A CSS hover animation occurs when a user hovers over an element, and the element responds with motion or another transition effect. It's used to highlight key items on a web page and it's an effective way to enhance your site's interactivity.</p>
                    </div>
                </div>
                <div className="roadmapContainer">
                    <div className='roadmapTitle'>
                        <div className='roadmapTitles'><h1>01</h1></div>
                        <div className='roadmapDasheds'></div>
                        <div className='roadmapDasheds'></div>
                        <div className='roadmapDashed'></div>
                        <div className='roadmapDash'></div>
                        <div className='roadmapDash'></div>
                    </div>
                    <div className='roadmapText'>
                        <h2>HEADING</h2>
                        <ul>
                        <div data-aos="fade-up" duration={3000}>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</p></li>
                        </div>
                        </ul>
                    </div>
                </div>
                <div className="roadmapContainer">
                    <div className='roadmapTitle'>
                        <div className='roadmapTitles'><h1>02</h1></div>
                        <div className='roadmapDasheds'></div>
                        <div className='roadmapDasheds'></div>
                        <div className='roadmapDashed'></div>
                        <div className='roadmapDash'></div>
                        <div className='roadmapDash'></div>
                    </div>
                    <div className='roadmapText'>
                        <h2>HEADING 2</h2>
                        
                        <ul>
                        <div data-aos="fade-up" duration={3000}>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</p></li>
                        </div>
                        </ul>
                    </div>
                </div>
                <div className="roadmapContainer">
                    <div className='roadmapTitle'>
                        <div className='roadmapTitles'><h1>03</h1></div>
                        <div className='roadmapDasheds'></div>
                        <div className='roadmapDasheds'></div>
                        <div className='roadmapDashed'></div>
                        <div className='roadmapDash'></div>
                        <div className='roadmapDash'></div>
                    </div>
                    <div className='roadmapText'>
                        <h2>HEADING 3</h2>
                        
                        <ul>
                        <div data-aos="fade-up" duration={3000}>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</p></li>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</p></li>
                        </div>
                        </ul>
                    </div>
                </div>
                </Grid>
            </Grid>
        </section>
    </div>
  )
}

export default Roadmap