import styled from "styled-components";
import { Title } from "../../styledComponents/index";

export default function Method(){
    return(
        <ComponentContainer>
            <Title>
        RSA: <strong>Método</strong>
      </Title>
      <Info>

      </Info>
        </ComponentContainer>
    )
}

const ComponentContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    align-items: center;
    padding: 6vw;
    box-sizing: border-box;

`;

const Info = styled.div`
    display: flex;

`