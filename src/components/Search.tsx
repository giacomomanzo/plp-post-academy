import styled from "styled-components";
import Ripples from 'react-ripples'

type Props = {
  value: string;
  setValue: (value: string) => void;
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height 100%;
  width: 60%;
  align-self: flex-start;
`;

const Label = styled.label`
  color: gray;
  font-weight: normal;
  width: fit-content;
  opacity: 0.75;
  order: 1;
  /*outline: 0;*/
  pointer-events: none;
  text-shadow: none;
  transform-origin: left top;
  transform: scale(1) translate3d(10px, 30px, 0);
  transition: 200ms ease all;
  background-color: white;
`;

const StyledTextField = styled.input`
  height: 65%;
  width: 100%;
  border-radius: 5px;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;
  border: 1px solid rgb(21, 101, 192);
  color: #000;
  order: 2;
  margin-top: -5px;

  &:focus {
    outline: 0;
  }

  &:focus + ${Label} {
    color: #3949ab;
    opacity: 1;
    transform: scale(0.9) translate3d(10px, 5px, 0);
  }

  &:hover {
    border: 1px solid black;
  }

`;

const StyledSearchButton = styled.button`
  padding: 10px;
  background-color: #1976d2;
  color: white;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

const Search: React.FC<Props> = ({ value, setValue }) => {
  return (
    <Container>
      <SearchBoxContainer>
        <StyledTextField
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        ></StyledTextField>
        <Label>search</Label>
      </SearchBoxContainer>
      <Ripples color="white" during={500}>
      <StyledSearchButton
        className="search-button"
        onClick={() => {
          setValue("");
        }}
      >
        RESET
      </StyledSearchButton>
      </Ripples>
    </Container>
  );
};

export default Search;
