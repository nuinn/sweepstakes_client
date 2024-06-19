import styled from "styled-components";

const Fixture = styled.div`
  width: 540px;
  height: 300px;
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 16px;

  & .matchup {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & .vs {
      font-size: 30px;
    }
  }
`;

export default Fixture;