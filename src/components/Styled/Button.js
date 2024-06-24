import styled from "styled-components";

const StyledButton = styled.div`
  height: 38px;
  width: 200px;
  color: white;
  background-color: ${props => props.$bgcolor || "var(--green)"};
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-weight: 600;
  justify-self: center;
  // position: fixed;
  // bottom: 10px;
  transition: .2s;
  z-index: 10;
  padding: 0px 16px;

  &:active, &:hover {
    transform: scale(0.95);
  }
`;

export default StyledButton;