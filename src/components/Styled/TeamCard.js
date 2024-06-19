import styled from "styled-components";

const TeamCard = styled.div`
  display: flex;
  align-items: center;
  // gap: 20px;
  width: 220px;
  height: 80px;
  // background-image: ${ props => props.$bgimage || 'linear-gradient(to right top, #2b2c36, #2e344f, #2d3c69, #244584, #004ea0)'};
  background-color: var(--red);
  // background-image: linear-gradient(to right top, #2b2c36, #1d4862, #006a80, #008b7e, #00a85d);
  color: var(--white);
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  & .flag {
    width: 40%;
    height: 100%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // border-radius: 24px;
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
    }
  }

  .content {
    width: 60%;

    & h2 {
      font-size: 25px;
      font-weight: 300;
      // color: var(--blue);
    }

    & div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 8px;
      // background-color: black;

      & p {
        font-size: 15px;
        line-height: 16px;
      }

      & .name {
        color: var(--black);
        font-weight: 500;
        // font-size: 16px;
      }

      & .points {
        color: var(--yellow);
        font-weight: 400;
      }
    }


  }
}
`;

export default TeamCard;