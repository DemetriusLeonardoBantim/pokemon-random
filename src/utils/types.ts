export interface TypesPokemonProps{
  type: {
    name:string
  }
}

export interface InfoPokemonProps {
  name:string
  types: TypesPokemonProps[]
  sprites: {
    other:{
      dream_world:{
        front_default:string
      }
    }
  }
}