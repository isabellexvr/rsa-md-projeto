import styled from "styled-components";
import colors from "../../assets/colors";
import binary from "../../assets/binary-code.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaRegCopy } from "react-icons/fa";
import { StartButton } from "../styledComponents";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Decryptation({ loading, setLoading }) {
  const [form, setForm] = useState({});
  const [copied, setCopied] = useState(false);
  const [decryptedText, setDecryptedText] = useState(null);

  const navigate = useNavigate();

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //https://rsa-back.onrender.com
      //http://localhost:4000/desencriptar
      axios
        .post("https://rsa-back.onrender.com/desencriptar", form)
        .then((answer) => {
          setDecryptedText(answer.data);
          toast.success('Mensagem Desencriptada com Sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
        .catch((err) => {
          toast.error("Algo deu errado.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageContainer>
      <Title>
        <BsFillArrowLeftCircleFill onClick={() => navigate("/options")} />
        <h1>
          Desen<strong>cript</strong>ação
        </h1>
      </Title>
      <RightContainer>
        <img src={binary} />
        <Form onSubmit={sendForm}>
          <div className="textarea">
            <textarea
              onChange={handleForm}
              name="encryptedStr"
              placeholder="Mensagem Encriptada"
              wrap="hard"
              rows="4"
              cols="40"
            ></textarea>
            <Line />
          </div>
          <div className="inputs">
            <div className="input">
              <SmallInput
                onChange={handleForm}
                type="number"
                name="p"
                placeholder="p"
              />
              <Line />
            </div>
            <div className="input">
              <SmallInput
                onChange={handleForm}
                type="number"
                name="q"
                placeholder="q"
              />
              <Line />
            </div>
            <div className="input">
              <SmallInput
                onChange={handleForm}
                type="number"
                name="e"
                placeholder="e"
              />
              <Line />
            </div>
          </div>
          <EncryptedText>
            {decryptedText ? (
              <KeyAnswer>
                <h1>{decryptedText}</h1>
              </KeyAnswer>
            ) : (
              <h2>O texto encriptado aparecerá aqui.</h2>
            )}
            <div className="copy">
              <CopyToClipboard
                text={decryptedText}
                onCopy={() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 3000);
                }}
              >
                <CopyIcon copied={copied} />
              </CopyToClipboard>
              {copied && <CopiedMessage>Copiado!</CopiedMessage>}
            </div>
          </EncryptedText>
          <StartButton type="submit">DESENCRIPTAR</StartButton>
        </Form>
      </RightContainer>
      <ToastContainer/>
    </PageContainer>
  );
}

const CopiedMessage = styled.h1`
  font-size: 0.7vw;
  color: green;
  position: absolute;
  bottom: 0;
`;

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
  > svg {
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
  height: 8vw;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;
  border-radius: 1.7vw;
  border: 0.15vw solid ${colors.mediumPurple};
  margin-bottom: 4vw;
  font-family: Red Hat Mono;
  > h2 {
    font-size: 1.2vw;
    color: ${colors.grey};
    width: 60%;
    line-height: 1.3vw;
  }
  > .copy {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1vw;
    width: 10%;
    justify-content: center;
  }
`;

const CopyIcon = styled(FaRegCopy)`
  font-size: 2vw;
  cursor: pointer;
  color: ${(p) => (p.copied ? "green" : colors.mediumPurple)};
`;

const KeyAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1,
  h3 {
    width: 100%;
    line-height: 1.8vw;
    color: ${colors.darkPurple};
    text-align: justify;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 500;
  }
`;
