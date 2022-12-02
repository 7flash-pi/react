import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useGlobalContext } from '../context/SettingContext';

const CountDownAnimation = ({key ,timer ,animate ,children }) => {

  const { stopTimer }=useGlobalContext();

  return (
    <CountdownCircleTimer
    key={key} 
    isPlaying={animate}
    duration={timer * 60}
    colors={['#189605', '#cc1d02']}
    trailStrokeWidth={6}
    trailColor='#151932s'
    onComplete={stopTimer}>
        {children}
    </CountdownCircleTimer>
    
  )
}

export default CountDownAnimation
