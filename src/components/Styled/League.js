import styled from "styled-components";


const League = styled.div`
  width: 540px;
  height: 440px;
  background-color: #2b2c36;
  background-image: linear-gradient(to right top, #2b2c36, #2e344f, #2d3c69, #244584, #004ea0);
  color: white;
  border-radius: 16px;
  border: 1px solid #f2f2f2;
  margin: 4px;
  padding: 16px;
  font-size: 20px;
  font-weight: 100;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & table {
    width: 100%;
    height: 100%;

    th {
      width: 8%;
      font-weight: 500;
      color: var(--white);
      font-size: 18px;
      vertical-align: top;
    }

    & td {
      width: 10%;
      text-align: center;
      vertical-align: baseline;
    }

    .pos {
      text-align: right;
      padding-right: 11px;
      color: var(--green);
      font-weight: 700;
      width: 0%;
    }

    .name {
      width: 20%;
      text-align: left;
    }

    .one {
      color: var(--yellow);
    }

    .dead {
      color: var(--red);
    }

    .nameData {
      // color: var(--green);
      font-weight: 200;
    }

    .points {
      font-weight: 500;
      color: var(--yellow);
    }
`;

export default League;