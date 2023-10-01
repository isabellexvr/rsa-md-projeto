import styled from "styled-components";
import colors from "../../assets/colors";
import binary from "../../assets/binary-code.png";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { StartButton } from "../styledComponents";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

export default function Encryptation() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      console.log("kk");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PageContainer>
      <Title>
        <BsFillArrowLeftCircleFill onClick={() => navigate("/options")} />
        <h1>
          En<strong>cript</strong>ação
        </h1>
      </Title>
      <RightContainer>
        <img src={binary} />
        <Form>
          <div className="textarea">
            <textarea
              placeholder="Mensagem"
              wrap="hard"
              rows="4"
              cols="40"
            ></textarea>
            <Line />
          </div>
          <div className="inputs">
            <div className="input">
              <SmallInput placeholder="n (p*q)" />
              <Line />
            </div>
            <div className="input">
              <SmallInput placeholder="e" />
              <Line />
            </div>
          </div>
          <EncryptedText>
            <h1>43 23 45 29 99 32 123 43</h1>
            <FaRegCopy />
          </EncryptedText>
          <StartButton>ENCRIPTAR</StartButton>
        </Form>
      </RightContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  width: 100vw;

  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: ${colors.darkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  >svg{
    position: absolute;
    top: 1vw;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.2vw;
    color: ${colors.lightPurple};
    cursor: pointer;
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
      color: ${colors.lightPurple};
    }
  }
`;

const RightContainer = styled.div`
  background-color: ${colors.black};
  width: 70vw;
  position: relative;
  > img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.2;
  }
`;

const Form = styled.form`
  height: 80vh;
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
    justify-content: flex-start;
    width: 35vw;

    > .input {
      font-family: Red Hat Mono;
      position: relative;
      margin-right: 3vw;
    }
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

const EncryptedText = styled.div`
  width: 35vw;
  height: 10vw;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;
  border-radius: 1.7vw;
  border: 0.15vw solid ${colors.mediumPurple};
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
    font-size: 2.7vw;
    cursor: pointer;
    color: ${colors.darkPurple};
  }
`;
