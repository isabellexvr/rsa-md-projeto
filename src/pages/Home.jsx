import styled from "styled-components";
import illustration from "../assets/illustration.png";
import { useNavigate } from "react-router-dom";
import { useKeys } from "../contexts/keysContext";
import { useEncrypted } from "../contexts/encryptedContext";
import { useDecrypted } from "../contexts/decryptedContext";

export default function Home() {
  const navigate = useNavigate();

  const { setKeys } = useKeys();
  const { setEncrypted } = useEncrypted();
  const { setDecrypted } = useDecrypted();

  const firstTime = JSON.parse(localStorage.getItem("keys") || "[]");
  if (!firstTime) {
    const emptyArr = [];
    localStorage.setItem("keys", JSON.stringify(emptyArr));
    localStorage.setItem("encrypted", JSON.stringify(emptyArr));
    localStorage.setItem("decrypted", JSON.stringify(emptyArr));
  } else {
    setKeys(firstTime);
    const encrypted = JSON.parse(localStorage.getItem("encrypted") || "[]");
    const decrypted = JSON.parse(localStorage.getItem("decrypted") || "[]");
    setEncrypted(encrypted);
    setDecrypted(decrypted);
  }

  return (
    <HomeContainer>
      <LeftContainer>
        <div className="text">
          <h1>
            Criptografia <strong>RSA</strong>
          </h1>
          <p>
            Gere chaves de criptação públicas, encripte e desencripte mensagens.
          </p>
        </div>

        <div className="buttons">
          <StartButton onClick={() => navigate("/options")}>
            COMECE AQUI
          </StartButton>
          <PresentationButton onClick={() => navigate("/about")}>
            COMO FUNCIONA?
            <div className="line"></div>
          </PresentationButton>
        </div>
      </LeftContainer>
      <RightContainer>
        <img alt="logo" src={illustration} />
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
  justify-content: center;
  //align-items: center;
  flex-direction: column;
  width: 48vw;
  padding-left: 6%;
  box-sizing: border-box;
  height: 60vh;
  > .text {
    > h1 {
      color: #fff;
      font-family: Red Hat Text;
      font-size: 4.7vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      > strong {
        color: #8d76b4;
      }
    }
    > p {
      padding-top: 1vw;
      color: #a5a5a5;
      font-family: Red Hat Mono;
      font-size: 2vw;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  > .buttons {
    padding-top: 5vw;
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
  > img {
    position: absolute;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StartButton = styled.button`
  all: unset;
  //width: 243px;
  width: 15vw;
  //height: 59px;
  height: 4.2vw;
  border-radius: 1vw;
  background: linear-gradient(90deg, #675683 0.07%, #ab90db 99.92%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Red Hat Mono;
  font-size: 1.35vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PresentationButton = styled.button`
  all: unset;
  color: #fff;
  font-family: Red Hat Mono;
  font-size: 1.35vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  position: relative;
  height: 4.2vw;
  > .line {
    background-color: #ab90db;
    height: 0.2vw;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
