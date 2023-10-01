import styled from "styled-components";
import { Title } from "../../styledComponents/index";
import binary from "../../../assets/binary-code.png";
import colors from "../../../assets/colors";


export default function Origin() {

  return (
    <ComponentContainer>
      <BinaryIcon src={binary} />
      <Title>
        RSA: <strong>Origem</strong>
      </Title>
      <Info>
        <img
          src="https://ericplayground.files.wordpress.com/2017/03/rsa-2003.jpg"
          alt="rsa"
        />
        <p>
          O algoritmo RSA (Rivest-Shamir-Adleman) é um dos primeiros e mais
          amplamente usados algoritmos de criptografia assimétrica. Foi
          desenvolvido por três criptógrafos -{" "}
          <strong>Ron Rivest, Adi Shamir e Leonard Adleman</strong> - no final
          dos anos 1970.
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
  padding: 4vw;
  box-sizing: border-box;
`;

const BinaryIcon = styled.img`
  position: absolute;
  z-index: 0;
  left: 0;
  width: 20vw;
  opacity: 0.2;
  top: 50%;
  transform: translateY(-50%);
`;
const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4vw;

  > img {
    width: 37%;
    border-radius: 1.5vw;
    border: 0.2vw solid ${colors.mediumPurple};
    box-sizing: border-box;
  }
  > p {
    width: 40%;
    color: #a5a5a5;
    text-align: justify;
    font-family: Red Hat Mono;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    >strong{
        color: #8D76B4;
    }
  }
`;

