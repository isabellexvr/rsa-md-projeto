import styled from "styled-components";
import { Title } from "../../styledComponents/index";
import illustration from "../../../assets/key-illustration.png";


export default function Method() {

  return (
    <ComponentContainer>
      <Title>
        RSA: <strong>Método</strong>
      </Title>
      <Info>
        <img src={illustration} alt="key" />
        <p>
          O RSA utiliza um par de chaves: uma chave pública e uma chave privada.
          A <strong>chave pública</strong> é usada para criptografar mensagens,
          enquanto a <strong>chave privada</strong> é usada para
          descriptografá-las. A segurança do RSA é baseada na dificuldade de
          fatorizar números inteiros grandes em seus números primos
          constituentes.
        </p>
      </Info>
    </ComponentContainer>
  );

}

const ComponentContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 6vw;
  box-sizing: border-box;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 15vw;
  }
  > p {
    width: 80%;
    color: #a5a5a5;
    text-align: justify;
    font-family: Red Hat Mono;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    > strong {
      color: #8d76b4;
    }
  }
`;
