import styled from "styled-components";
import colors from "../../assets/colors";
import binary from "../../assets/binary-code.png";

export default function Decryptation() {
  return (
    <PageContainer>
      <Title>
        <h1>Encriptação</h1>
      </Title>
      <RightContainer>
        <img src={binary}/>
      </RightContainer>

    </PageContainer>
  );
}

const PageContainer = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Title = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: ${colors.darkPurple};
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
`;

const RightContainer = styled.div`
    background-color: ${colors.black};

`