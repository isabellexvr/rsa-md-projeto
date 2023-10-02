import styled from "styled-components";
import { BiSolidKey } from "react-icons/bi";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import colors from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

export default function Options() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Title>
        <h1>O Que Deseja?</h1>
      </Title>
      <div className="options">
        <div className="option" onClick={() => navigate("/public-key")}>
          <Option>
            <BiSolidKey />
          </Option>
          <h1>Gerar Chave Pública</h1>
        </div>
        <div className="option" onClick={() => navigate("/encrypt")}>
          <Option>
            <HiLockClosed />
          </Option>
          <h1>Encriptar Mensagem</h1>
        </div>
        <div className="option" onClick={() => navigate("/decrypt")}>
          <Option>
            <HiLockOpen />
          </Option>
          <h1>Desencriptar Mensagem</h1>
        </div>
      </div>
      <HomeIcon onClick={() => navigate("/")} >
        <GoHomeFill />
        <h1>Início</h1>
      </HomeIcon>
    </PageContainer>
  );
}

const HomeIcon = styled.div`

  width: 100%;
  height: 6vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  > svg {
    font-size: 4vw;
    color: ${colors.mediumPurple};
    margin-bottom: 0.5vw;
    cursor: pointer;
  }
  > h1 {
    color: ${colors.lightPurple};
    font-family: Red Hat Mono;
    font-size: 1vw;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;

const Title = styled.div`
  height: 10vw;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.darkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  > h1 {
    color: #fff;
    font-family: Red Hat Text;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const PageContainer = styled.div`
  height: 65vh;
  margin-top: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > .options {
    display: flex;
    justify-content: space-around;
    width: 65vw;
    > .option {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      > h1 {
        margin-top: 1vw;
        color: ${colors.lightPurple};
        font-family: Red Hat Mono;
        font-size: 1.5vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
`;

const Option = styled.button`
  all: unset;
  background-color: ${colors.lightPurple};
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > svg {
    font-size: 6vw;
    color: ${colors.black};
  }
`;
