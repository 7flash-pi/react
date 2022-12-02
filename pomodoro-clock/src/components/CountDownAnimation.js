import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountDownAnimation = ({key ,timer ,animate ,children }) => {
  return (
    <CountdownCircleTimer
    key={key} 
    isPlaying={animate}
    duration={timer * 60}
    colors={['#189605', '#cc1d02']}
    trailStrokeWidth={6}
    trailColor='#151932s'>
        {children}
    </CountdownCircleTimer>
    
  )
}

export default CountDownAnimation
