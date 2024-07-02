import styled from "styled-components";

const Fixture = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid white;
  border-radius: 24px;
  // background-image: linear-gradient(to left top, #dbe8f1, #a2c2dd, #6f9bca, #3f74b6, #004ea0);
  // background-image: linear-gradient(to right top, #2b2c36, #2e344f, #2d3c69, #244584, #004ea0);
  color: var(--blue);
  padding: ${props => props.$padding};

  & .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    & .date {
      font-size: 25px;
      font-weight: 200;

    }

    & .round {
      // color: var(--green);
      font-weight: 300;
    }
  }

  & .matchup {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    // gap: 10px;
    box-sizing: border-box;

    & .scoreContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 96px;

      & .pensContainer {
        height: 28%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      & .finalScore {
        height: 44%;
        display: flex;
      }


      & .vs, .score {
        font-size: 30px;
        width: 33%;
        text-align: center;
      }

      & .inPlay {
        color: var(--red);
      }

      & .pens {
        font-size: 14px;
        line-height: 16px;
      }

      & span {
        font-size: 12px;
        vertical-align: super;
        text-align: left;
      }
    }
  }
`;

export default Fixture;