import React from 'react'
import {Pokeball} from './style'
import pokeball from '../../assets/pokeball.png'


export const RotatePokeball = () => {
  return (
    <Pokeball>
      <img src={pokeball} alt="ball"/>
    </Pokeball>
  )
}