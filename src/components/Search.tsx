import styled from "styled-components";
import Ripples from "react-ripples";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setValue } from "../features/search/searchTermSlice";

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
  padding-left: 4px;
  padding-right: 4px;
  opacity: 0.75;
  order: 1;
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
  text-indent: 15px;
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
  margin-left: 20px;
`;

const ActiveLabel = styled(Label)`
  color: #3949ab;
  opacity: 1;
  transform: scale(0.9) translate3d(10px, 5px, 0);
`;

const Search = () => {
  const searchTerm = useAppSelector((state) => state.searchTerm.value);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <SearchBoxContainer>
        <StyledTextField
          type="text"
          value={searchTerm}
          onChange={(e) => dispatch(setValue(e.target.value.toLowerCase()))}
        ></StyledTextField>
        {searchTerm === "" ? <Label>search</Label> : <ActiveLabel>search</ActiveLabel>}
      </SearchBoxContainer>
      <Ripples color="white" during={500}>
        <StyledSearchButton
          className="search-button"
          onClick={() => {
            dispatch(setValue(""));
          }}
        >
          RESET
        </StyledSearchButton>
      </Ripples>
    </Container>
  );
};

export default Search;