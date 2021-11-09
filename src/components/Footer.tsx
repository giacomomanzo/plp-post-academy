import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: rgb(189, 189, 189);
  width: 100%;
  min-height: 8vh;
`;

const ButtonGroup = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-self: center;
  color: #1976d2;
`

const Link = styled.button`
  background-color: unset;
  color: rgb(21, 101, 192);
`

const Footer = () => {
  return (
    <FooterContainer>
      <ButtonGroup>
        <Link className="footer-link-container-t">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            TWITTER
          </a>
        </Link>
        <Link className="footer-link-container-f">
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            FACEBOOK
          </a>
        </Link>
      </ButtonGroup>
    </FooterContainer>
  );
};

export default Footer;
