import styled from "styled-components";
import Ripples from "react-ripples";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { setFilter } from "../features/search/filter/filterSlice";

const StyledButtonGroup = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const StyledButtonLeft = styled.button`
  width: fit-content;
  border: 1px solid rgb(21, 101, 192);
  padding: 10px;
  background-color: white;
  color: rgb(21, 101, 192);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &.active {
    background-color: rgb(21, 101, 192);
    color: white;
  }
  &.active:hover {
    background-color: rgb(17, 80, 151);
    color: white;
  }

  &:hover {
    background-color: rgba(173, 204, 240, 0.226);
    transition: 1s;
  }

`;
const StyledButtonRight = styled.button`
  width: max-content;
  border: 1px solid rgb(21, 101, 192);
  padding: 10px;
  background-color: white;
  color: rgb(21, 101, 192);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &.active {
    background-color: rgb(21, 101, 192);
    color: white;
  }
  &.active:hover {
    background-color: rgb(17, 80, 151);
    color: white;
  }

  &:hover {
    background-color: rgba(173, 204, 240, 0.226);
    transition: 1s;
  }

`;

const Navigation = () => {
  const filter = useAppSelector((state) => state.filter.value)
  const dispatch = useAppDispatch()
  return (
    <StyledButtonGroup>
      <Ripples color="white" during={500}>
        <StyledButtonLeft
          className={filter === true ? "active" : undefined}
          onClick={() => {dispatch(setFilter(filter === undefined ? true : undefined))}}
        >
          IN STOCK
        </StyledButtonLeft>
      </Ripples>
      <Ripples color="white" during={500}>
        <StyledButtonRight
          className={filter === false ? "active" : undefined}
          onClick={() => {dispatch(setFilter(filter === undefined ? false : undefined))}}
        >
          OUT OF STOCK
        </StyledButtonRight>
      </Ripples>
    </StyledButtonGroup>
  );
};

export default Navigation;
