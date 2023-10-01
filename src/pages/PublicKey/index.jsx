import styled from "styled-components";
import { BiSolidKey } from "react-icons/bi";
import colors from "../../assets/colors";
import { FaRegCopy } from "react-icons/fa";
import { StartButton } from "../styledComponents";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function PublicKey() {
    const navigate = useNavigate();
  return (
    <PageContainer>
        
      <div className="top">
      <BsFillArrowLeftCircleFill onClick={() => navigate("/options")} />
        <BiSolidKey />
        <h1>
          Chave <strong>Pública</strong>
        </h1>
        <h3>
          É necessário criar a chave pública antes de encriptar ou desencriptar.
        </h3>
      </div>

      <Form>
        <div className="inputs">
          <div className="input">
            <SmallInput placeholder="p" />
            <Line />
          </div>
          <div className="input">
            <SmallInput placeholder="q" />
            <Line />
          </div>
          <div className="input">
            <SmallInput placeholder="e" />
            <Line />
          </div>
        </div>
        <EncryptedText>
          <h1>132, 7</h1>
          <FaRegCopy />
        </EncryptedText>
        <StartButton>DESENCRIPTAR</StartButton>
      </Form>
    </PageContainer>
  );
}

/* const Background = styled.div`
    position: absolute;
` */

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60vw;
  height: 100vh;
  padding: 5vw;
  box-sizing: border-box;
  position: relative;
  > .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    >svg:first-child{
        position: absolute;
        font-size: 2vw;
        left: 12vw;
        top: 5vw;
        cursor: pointer;
    }
    > svg {
      font-size: 5vw;
      color: ${colors.mediumPurple};
    }
    > h1 {
      color: #fff;
      text-align: center;
      font-family: Red Hat Text;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      > strong {
        color: #8d76b4;
      }
    }
    > h3 {
      color: ${colors.grey};
      text-align: center;
      font-family: Red Hat Text;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      width: 70%;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > .textarea {
    font-family: Red Hat Mono;
    position: relative;
    > textarea {
      all: unset;
      width: 100%;
      height: 100%;
      color: white;
      font-size: 1.6vw;
      height: 7vw;
      width: 35vw;
    }
  }
  > .inputs {
    display: flex;
    justify-content: space-around;
    width: 35vw;
    margin-bottom: 4.5vw;
    margin-top: 3vw;

    > .input {
      font-family: Red Hat Mono;
      position: relative;
      //margin-right: 3vw;
    }
  }
`;

const EncryptedText = styled.div`
  width: 20vw;
  height: 7vw;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;
  border-radius: 1.7vw;
  border: 0.15vw solid ${colors.mediumPurple};
  margin-bottom: 4vw;
  > h1 {
    color: ${colors.black};
    text-align: justify;
    font-family: Red Hat Mono;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  > svg {
    font-size: 2vw;
    cursor: pointer;
    color: ${colors.darkPurple};
  }
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 0.15vw;
  background-color: ${colors.mediumPurple};
  bottom: 0;
`;

const SmallInput = styled.input`
  color: white;
  all: unset;
  width: 50%;
  height: 100%;
  color: white;
  font-size: 1.2vw;
  height: 5vw;
  width: 7vw;
`;
