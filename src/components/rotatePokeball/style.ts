import styled from "styled-components";

export const Pokeball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    animation: rotatepokeball 1000ms infinite  ;
    height: 40px;
    width: 40px;
    @keyframes rotatepokeball {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(150deg);
    }
  }


}

`