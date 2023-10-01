import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";
import colors from "../../assets/colors";

export default function Header({ sidebar, setSidebar }) {
  return (
    <HeaderContainer>
      <MenuIcon
        onClick={() => {
          setSidebar(!sidebar);
          console.log(sidebar);
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
  position: absolute;
  cursor: pointer;
  font-size: 2vw;
  right: 2vw;
  top: 2vw;
  cursor: pointer;
  color: ${colors.mediumPurple};
`;
