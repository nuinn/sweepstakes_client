import styled from "styled-components";

const PlayerCard = styled.div`
  width: 420px;
  height: 160px;
  background-color: #2b2c36;
  background-image: linear-gradient(to right top, #2b2c36, #2e344f, #2d3c69, #244584, #004ea0);
  color: var(--white);
  border-radius: 16px;
  border: 1px solid #f2f2f2;
  // border: 1px solid #004ea0;
  margin: 4px;
  padding: 16px;
  font-size: 20px;
  font-weight: 100;
  display: flex;
  align-items: center;
  transition-duration: .8s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.78,.13,.15,.86);
  &:hover{
    transform: scale(1.05);
    transform-origin: center center 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  & table {
    width: 100%;
    height: 100%;

    & .wildcard, .out {
      color: var(--red);
    }

    & .emptyRow {
      visibility: hidden;
    }

    & img {
      width: 24px;
      height: 18px;
    }

    tr {
      height: 17%;
    }

    td {
      width: 8%;
      text-align: center;
      vertical-align: baseline;
    }

    th {
      width: 7%;
      font-weight: 500;
      color: var(--white);
      font-size: 16px;
    }

    .teamName {
      width: 26%;
      text-align: left;
    }

    .points {
      font-weight: 500;
    }

    .nameRow {
      height: 32%;
      color: var(--yellow);

      & td {
        font-size: 26px;
      }

      & .playerName {
        text-align: left;
        font-size: 36px;
        font-weight: 500;
        color: var(--yellow);
      }
    }


  }





`;

export default PlayerCard