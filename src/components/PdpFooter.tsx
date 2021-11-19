import styled from "styled-components";
import PdpFooterForm from "./PdpFooterForm";

const StyledPdpFooter = styled.div`
  min-height: 8vh;
  background-color: black;
  width: 100%;
  display: flex;
`;

const PdpStyledP = styled.p`
  color: white;
  width: 30%;
  padding: 10px;
`;

const StyledPdpFooterContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex
    flex-direction: column;
`;

const StyledLink = styled.a`
  color: white;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-right: 10px;
  text-decoration: underline solid white;
`;

const PdpFooter = () => {
  return (
    <StyledPdpFooter>
      <PdpStyledP>Subscribe to our newsletter</PdpStyledP>
      <StyledPdpFooterContainer>
        <PdpFooterForm />
        <StyledLinkContainer>
          <StyledLink
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </StyledLink>
          <StyledLink
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            facebook
          </StyledLink>
        </StyledLinkContainer>
      </StyledPdpFooterContainer>
    </StyledPdpFooter>
  );
};

export default PdpFooter;
