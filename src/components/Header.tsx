import Navigation from "./Navigation";
import Search from "./Search";
import styled from "styled-components";


const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Header = () => {
  return (
    <StyledHeader>
        <img
          src="https://via.placeholder.com/150x80"
          alt=""
          className="img"
        ></img>
        <Navigation />
        <Search />
    </StyledHeader>
  );
};



export default Header;