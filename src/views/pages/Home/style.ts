import styled  from "styled-components";
import {shade} from 'polished'

export const Container = styled.div`
  height: 100vh;
  background-color: #CBD5E0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:var(${props => props.color});
`

export const ContainerContent = styled.div`
  height: 450px;
  width: 400px;
  display: flex;
  flex-direction: column;

  section{
    align-self: flex-end;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 50px;
    background-color: #FFFFFF;
    border-radius: 10px;
  }

  button{
    padding: 10px;
    height: 3rem;
    width: 15rem;
    align-self: center;
    margin: 2rem;
    color: #FFFFFF;
    background-color:#2B6CB0 ;
    border: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.2s;

    &:hover{
      cursor: pointer;
      background-color: ${shade(0.2, '#2b6cb0')};
    }
  
  }
`