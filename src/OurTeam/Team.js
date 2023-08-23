import React from 'react'
import './Team.css'
import { useSpring, animated, config } from 'react-spring'
import { Fade } from 'react-reveal'




const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Team = () => {
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 200, friction: 50} }))
  return (
    <div id='our team'>
      <div className='bg-all'>
      <div className='main-hd'>
        <h2>our team</h2>
      </div>
    <div className='main-div'>
    <div>
      <div data-aos="fade-up">
      <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
          <img className='img1' src='./Assets/1.png' />
          <h2>Henry</h2>
          <h4>General of the Army</h4>
      </animated.div>
      </div>
    </div>
    <div>
      <div data-aos="fade-up">
      <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
          <img className='img1' src='./Assets/2.png' />
          <h2>Ryan</h2>
          <h4>General of the Army</h4>
      </animated.div>
      </div>
    </div>
    <div>
      <div data-aos="fade-up">
      <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
          <img className='img1' src='./Assets/3.png' />
          <h2>Genasis</h2>
          <h4>Lieutinent General</h4>
      </animated.div>
      </div>
    </div>
    <div>
      <div data-aos="fade-up">
      <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
          <img className='img1' src='./Assets/4.png' />
          <h2>LOUIE</h2>
          <h4>Lieutinent General</h4>
      </animated.div>
      </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default Team
