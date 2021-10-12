import styled,{createGlobalStyle} from "styled-components";

export const Container = styled.body`
  background-color: red;
`


export const ContainerContent = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  position: relative;
  width: 400px;
  height: 350px;
  max-height: 400px;
  background-color:#FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    height: 200px;
    max-height: 300px;
    width: 10rem;
    margin-top: 4rem;
  }
`


export const InfoPokemonBox = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  > p {
    margin-right: 60px;
  }
  div{
    flex: 1;
    display: flex;
    > p{
      margin-right: 10px;
    }
  }
`

export const TextType = styled.p`
  background-color: var(${props => props.color});
  padding: 1px 20px;
  border-radius: 5px;
`
