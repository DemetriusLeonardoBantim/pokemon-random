import React, {useState, useEffect} from 'react'
import {InfoPokemonProps} from '../../utils/types'
import {buscar} from '../../services/InfoPokemon'
import {ContainerContent,InfoPokemonBox,TextType,Container} from './style'
import {RotatePokeball} from '../rotatePokeball'

interface PropsInfoPokemon {
  id:string
}


export const InfoPokemon = ({id} : PropsInfoPokemon) =>{
  const [detailPokemon, setDetailPokemon] = useState<InfoPokemonProps>()




  useEffect(() => {
    async function handleInfoPokemon(){
      const response = await buscar(id)
      setDetailPokemon(response.data)
    }
    handleInfoPokemon()
  }, [id])


      
  return(
    <div>
      {
        detailPokemon ?
        <ContainerContent>
          <div>
            <img src={detailPokemon.sprites.other.dream_world.front_default} alt="img-pokemon"/>
          </div>
          <InfoPokemonBox>
            <p>{detailPokemon.name}</p>
            <div>
              {detailPokemon.types.map((infoTypes) => (
                <TextType color={'--'+infoTypes.type.name}>{infoTypes.type.name}</TextType>
              ))}
            </div>
          </InfoPokemonBox>
        </ContainerContent> 
        : 
        <RotatePokeball/>
      }
    </div>
  )
}