/* eslint-disable react-hooks/exhaustive-deps */
import  {useState, useEffect} from 'react'
import {InfoPokemonProps} from '../../utils/types'
import {buscar} from '../../services/InfoPokemon'
import {ContainerContent,InfoPokemonBox,TextType} from './style'
import {RotatePokeball} from '../rotatePokeball'
import {useBackgroundColor} from '../../hooks/useBackground'


interface PropsInfoPokemon {
  id:string
}


export const InfoPokemon = ({id} : PropsInfoPokemon) =>{
  const [detailPokemon, setDetailPokemon] = useState<InfoPokemonProps>()
  const {getColor} = useBackgroundColor()

  useEffect(() => {
    async function handleInfoPokemon(){
      const response = await buscar(id)
      getColor(response.data)
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
                <TextType color={'--'+infoTypes.type.name} key={Math.random()}>{infoTypes.type.name}</TextType>
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