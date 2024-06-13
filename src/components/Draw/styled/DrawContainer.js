import styled from "styled-components";

const DrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  width: 100%;

  & .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & h1 {
      font-weight: 500;
    }

    & h3 {
      font-weight: 200;

    }
  }

  & .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 2s ease-in-out;

    & p {
      opacity: 0;
      transition: opacity 2s ease-in-out;
      color: var(--black);
      font-size: 30px;
      font-weight: 500;
    }

    & .fadeIn {
      opacity: 1;
    }

  }
`;

export default DrawContainer;