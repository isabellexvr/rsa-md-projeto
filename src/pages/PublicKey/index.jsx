import styled from "styled-components";
import { BiSolidKey } from "react-icons/bi";
import colors from "../../assets/colors";
import { FaRegCopy } from "react-icons/fa";
import { StartButton } from "../styledComponents";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function PublicKey({ loading, setLoading }) {
  const [form, setForm] = useState({});

  const [publicKey, setPublicKey] = useState(null);
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  

  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const numStr = `${form.p} ${form.q} ${form.e}`;
    console.log(numStr);
    try {
      //https://rsa-back.onrender.com
      //http://localhost:4000/public-key
      axios
        .post("https://rsa-back.onrender.com/public-key", { pqe: numStr })
        .then((answer) => {
          console.log(answer.data);
          setPublicKey(answer.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

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

      <Form onSubmit={sendForm}>
        <div className="inputs">
          <div className="input">
            <SmallInput
              type="number"
              pattern="[0-9]+"
              name="p"
              onChange={handleForm}
              placeholder="p"
              min="11"
            />
            <Line />
          </div>
          <div className="input">
            <SmallInput
              type="number"
              pattern="[0-9]+"
              name="q"
              onChange={handleForm}
              placeholder="q"
              min="11"
            />
            <Line />
          </div>
          <div className="input">
            <SmallInput
              type="number"
              pattern="[0-9]+"
              name="e"
              onChange={handleForm}
              placeholder="e"
            />
            <Line />
          </div>
        </div>
        <EncryptedText>
          {publicKey ? (
            <KeyAnswer>
              <h1>{publicKey}</h1>
              <div className="par-ordenado">
                <h3>n</h3>
                <h3>e</h3>
              </div>
            </KeyAnswer>
          ) : (
            <h2>Sua chave aparecerá aqui.</h2>
          )}
          <CopyToClipboard text={publicKey} onCopy={() => setCopied(true)}>
            <CopyIcon copied={copied} />
          </CopyToClipboard>
        </EncryptedText>
        <StartButton>GERAR CHAVE</StartButton>
      </Form>
    </PageContainer>
  );
}

const KeyAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1,
  h3 {
    color: ${colors.darkPurple};
    text-align: justify;
    font-size: 2vw;
    font-style: normal;
    font-weight: 500;
  }
  > .par-ordenado {
    display: flex;
    width: 100%;
    justify-content: space-around;
    > h3 {
      color: ${colors.grey};
      font-size: 1.7vw;
    }
  }
`;

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
    > svg:first-child {
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

const CopyIcon = styled(FaRegCopy)`
  font-size: 2vw;
  cursor: pointer;
  color: ${(p) => (p.copied ? "green" : colors.mediumPurple)};
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
  font-family: Red Hat Mono;
  > h2 {
    font-size: 1vw;
    color: ${colors.grey};
    width: 50%;
    line-height: 1.3vw;
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
