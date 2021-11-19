import styled from "styled-components";

const StyledPdpForm = styled.form`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  gap: 5px;
`;

const StyledPdpFootInput = styled.input`
  height: 4vh;
  width: 15%;
`;

const StyledPdpFootbutton = styled.button`
  padding: 10px;
  background-color: #1976d2;
  color: white;
  border-radius: 5px;
  margin-left: 5px;
`;

const PdpFooterForm = () => {
  return (
    <StyledPdpForm>
      <StyledPdpFootInput type="email" required></StyledPdpFootInput>
      <StyledPdpFootbutton>SIGN UP</StyledPdpFootbutton>
    </StyledPdpForm>
  );
};

export default PdpFooterForm;
