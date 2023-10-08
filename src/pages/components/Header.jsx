import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";
import colors from "../../assets/colors";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header({ sidebar, setSidebar }) {

  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <BackIcon onClick={() => navigate("/options")} />
      <MenuIcon appear={sidebar}
        onClick={() => {
          setSidebar(!sidebar);
        }}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const MenuIcon = styled(TfiMenu)`
display: ${p => p.appear ? "none" : "initial"};
  position: absolute;
  cursor: pointer;
  font-size: 2vw;
  right: 2vw;
  top: 2vw;
  color: ${colors.mediumPurple};
  z-index: 1;
`;

const BackIcon = styled(BsFillArrowLeftCircleFill)`
    left: 2vw;
  top: 2vw;
  cursor: pointer;
  color: ${colors.mediumPurple};
  z-index: 1;
  position: absolute;
  cursor: pointer;
  font-size: 2vw;
`