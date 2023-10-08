import styled from "styled-components";
import { useEffect, useState } from "react";
import colors from "../../assets/colors";
import { TfiMenu } from "react-icons/tfi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";

export default function Sidebar({
  sidebar,
  setSidebar,
  keys,
  setKeys,
  encrypted,
  setEncrypted,
  decrypted,
  setDecrypted,
  loading,
  setLoading
}) {

  useEffect(() => {
    const keys = JSON.parse(localStorage.getItem("keys") || "[]");
    const encrypted = JSON.parse(
      localStorage.getItem("encrypted") || "[]"
    );
    const decrypted = JSON.parse(
      localStorage.getItem("decrypted") || "[]"
    );
    setKeys(keys);
    setEncrypted(encrypted);
    setDecrypted(decrypted);
  }, [sidebar, loading]);
  //console.log(encrypted);
  
  return (
    <>
      {sidebar && (
        <SideBarContainer>
          <LeftSide onClick={() => setSidebar(!sidebar)}></LeftSide>
          <RightSide>
            {" "}
            <HistoryContainer>
              <MenuIcon onClick={() => setSidebar(!sidebar)} />
              <Title>Seu Histórico</Title>
              <Section>
                {keys.length > 0 ? (
                  <Chaves>
                    <h1>Chaves:</h1>
                    {keys.map((k, i) => (
                      <Chave key={i}>
                        <h2>
                          {" "}
                          {i + 1}. <strong>{k}</strong>
                        </h2>
                        <CopyToClipboard
                          text={k}
                        >
                          <CopyIcon />
                        </CopyToClipboard>
                      </Chave>
                    ))}
                  </Chaves>
                ) : (
                  <h1>Você ainda não possui chaves registradas.</h1>
                )}
              </Section>
              <Section>
                {encrypted.length > 0 ? (
                  <Chaves>
                    <h1>Mensagens Encriptadas:</h1>
                    {encrypted.map((k, i) => (
                      <Chave key={i}>
                        <h2>
                          {" "}
                          {i + 1}. <strong>{k}</strong>
                        </h2>
                        <CopyToClipboard
                          text={k}
  
                        >
                          <CopyIcon  />
                        </CopyToClipboard>
                      </Chave>
                    ))}
                  </Chaves>
                ) : (
                  <h1>Você ainda não possui mensagens encriptadas.</h1>
                )}
              </Section>
              <Section>
                {decrypted.length > 0 ? (
                  <Chaves>
                    <h1>Mensagens Desencriptadas:</h1>
                    {decrypted.map((k, i) => (
                      <Chave key={i}>
                        <h2>
                          {" "}
                          {i + 1}. <strong>{k}</strong>
                        </h2>
                        <CopyToClipboard
                          text={k}
                        >
                          <CopyIcon  />
                        </CopyToClipboard>
                      </Chave>
                    ))}
                  </Chaves>
                ) : (
                  <h1>Você ainda não possui mensagens desencriptadas.</h1>
                )}
              </Section>
            </HistoryContainer>
          </RightSide>
        </SideBarContainer>
      )}
    </>
  );
}

const Chaves = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {

    color: ${colors.black};
    text-align: center;
    margin-bottom: 0.6vw;
    font-size: 1.27vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 80%;
  }
`;

const Chave = styled.div`
  display: flex;
  padding: 0.15vw;
  align-items: flex-start;
width: 85%;
justify-content: space-around;

  > h2 {
    text-align: left;
    width: 90%;
    height: fit-content;
    line-height: 1.35vw;

    > strong {
      font-weight: 500;
      color: ${colors.mediumPurple};
    }
  }
`;

const CopyIcon = styled(FaRegCopy)`
width: 10%;
font-size: 1.25vw;
  cursor: pointer;
  color: ${(p) => (p.copied ? "green" : colors.mediumPurple)};
`;

const MenuIcon = styled(TfiMenu)`
  position: absolute;
  cursor: pointer;
  font-size: 2vw;
  left: 1.5vw;
  top: 1.5vw;
  cursor: pointer;
  color: ${colors.black};
`;

const SideBarContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const RightSide = styled.div`
  width: 30vw;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  position: relative;
`;

const LeftSide = styled.div`
  cursor: pointer;
  width: 70vw;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Section = styled.div`
  background-color: white;
  border-radius: 1vw;
  width: 80%;
  height: 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw;
  box-sizing: border-box;
  font-family: Red Hat Text;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Red Hat Text;
  font-size: 3vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  > strong {
    color: #8d76b4;
  }
`;

const HistoryContainer = styled.div`
  height: 100vh;
  width: 35vw;
  background-color: ${colors.lightPurple};
  padding: 2vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
