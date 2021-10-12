import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';

interface BackgroundColorProps{
  color:string
}

interface BackgroundColorProviderProps{
  children: ReactNode;
}

interface BackgroundContextData{
  color: string
  getColor: (value: any) => void
}

const BackgroundColorContext = createContext<BackgroundContextData>({} as BackgroundContextData )


export function BackgroundProvider({children}: BackgroundColorProviderProps){
  const [color, setColor] = useState<any>()

  function getColor(value: any){
    setColor(value.types[0].type.name)
    console.log(color)
  }


  return(
    <BackgroundColorContext.Provider value={{color, getColor}}>
      {children}
    </BackgroundColorContext.Provider>
  )
}

export function useBackgroundColor(){
  const context = useContext(BackgroundColorContext)
  return context
}

