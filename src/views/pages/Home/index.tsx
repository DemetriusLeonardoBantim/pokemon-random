import React, {useState} from 'react'
import {Container,ContainerContent} from './style'
import pokemonLogo from '../../../assets/logo.png'
import {InfoPokemon} from '../../../components/infoPokemon'
import {getRandomInt} from '../../../utils/getRandomInt'







export const Home = () => {
  const [infoPokemon, setInfokemon] = useState('')


    async function handleGetPokemon(){
      const id = getRandomInt(1,150)
    
      setInfokemon(String(id))
    }





  return(
    <Container>
      <ContainerContent>

        <img src={pokemonLogo} alt="logo"/>

        <button onClick={handleGetPokemon}>Get a random pokemon</button>

        {
          infoPokemon ? 
            <InfoPokemon id={infoPokemon}/> 
            : 
            <section>
              <p>Click on "Get a random pokemon"</p>
            </section>
        }
        



      </ContainerContent>
    </Container>
  )
}