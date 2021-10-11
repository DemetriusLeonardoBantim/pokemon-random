import api from '../api'
import {InfoPokemonProps} from '../../utils/types'


export async function buscar(id : string){
  return api.get<InfoPokemonProps>(id)
}