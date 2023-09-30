//sections
import styled from "styled-components";
import Origin from "./components/origin";
import Method from "./components/method";


export default function Presentation(){
    return(
        <PageContainer >
            
            <Origin/>
            <Method/>

        </PageContainer>
    )
}

const PageContainer = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
    >section{
        height: 100vh;
        width: 100%;
    }

`

