import styled from "styled-components";
import illustration from "../assets/illustration.png"

export default function Home() {
  return (
    <HomeContainer>
      <LeftContainer>
        <h1>
          Criptografia <strong>RSA</strong>
        </h1>
        <p>
          Gere chaves de criptação públicas, encripte e desencripte mensagens.
        </p>
        <div className="buttons">
          <StartButton>COMECE AQUI</StartButton>
          <PresentationButton>
            COMO FUNCIONA?
            <div className="line"></div>
          </PresentationButton>
        </div>
      </LeftContainer>
      <RightContainer >
        <img alt="logo" src={illustration}/>
      </RightContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  //align-items: center;
  flex-direction: column;
  width: 48vw;
  padding-left: 6%;
  box-sizing: border-box;
  height: 60vh;
  > h1 {
    color: #fff;
    font-family: Red Hat Text;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    > strong {
      color: #8d76b4;
    }
  }
  > p {
    color: #a5a5a5;
    font-family: Red Hat Mono;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  > .buttons {
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    //background-color: yellow;
  }
`;

const RightContainer = styled.div`
  width: 48vw;

  height: 60vh;
  position: relative;
  >img{
    position: absolute;
    width: 50vw;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  }
`;

const StartButton = styled.button`
  all: unset;
  width: 243px;
  height: 59px;
  border-radius: 17px;
  background: linear-gradient(90deg, #675683 0.07%, #ab90db 99.92%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Red Hat Mono;
  font-size: 1.35em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PresentationButton = styled.button`
  all: unset;
  color: #fff;
  font-family: Red Hat Mono;
  font-size: 1.35em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  position: relative;
  height: 59px;
  >.line{
    background-color: #AB90DB;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
