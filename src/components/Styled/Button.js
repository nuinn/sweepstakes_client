import styled from "styled-components";

const StyledButton = styled.div`
  height: 38px;
  width: 200px;
  color: white;
  background-color: var(--green);
  margin: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-weight: 600;
  justify-self: center;
  position: fixed;
  bottom: 20%;
  transition: .2s;
  z-index: 900;

  &:active, &:hover {
    transform: scale(0.95);
  }
`;

export default StyledButton;