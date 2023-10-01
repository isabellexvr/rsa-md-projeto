//sections
import styled, { keyframes } from "styled-components";
import Origin from "./components/origin";
import Method from "./components/method";
import { useInView } from "react-intersection-observer";
import { Element, Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import colors from "../../assets/colors";
import { useNavigate } from "react-router-dom";

export default function Presentation() {
  const { ref: methodRef, inView: methodInView } = useInView({
    threshold: 0.5,
  });

  const navigate = useNavigate();

  return (
    <PageContainer>
      <Element name="origin">
        <div className="origin">
          <Origin />
        </div>
      </Element>
      <Element name="method">
        <div ref={methodRef} className="method">
          <Method />
          {methodInView ? (
        <StartButton onClick={() => navigate("/options")} >PRATICAR</StartButton>
      ) : (
        <Link smooth duration={800} delay={10} to="method">
          <ArrowIcon />
        </Link>
      )}
        </div>
      </Element>

    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > section {
    height: 100vh;
    width: 100%;
  }
  .method {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
const UpAndDown = keyframes`
  0%,100%{
    bottom: 5%;
  }
  50%{
    bottom: 7%;
  }
`;

const ArrowIcon = styled(IoIosArrowDown)`
  color: ${colors.darkPurple};
  font-size: 4.5vw;
  position: fixed;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  animation: ${UpAndDown} 1s linear infinite;
  cursor: pointer;
`;

const StartButton = styled.button`
  all: unset;

  width: 15vw;

  height: 4.2vw;
  border-radius: 1vw;
  background: linear-gradient(90deg, #675683 0.07%, #ab90db 99.92%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Red Hat Mono;
  font-size: 1.35vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, -50%);
`;
