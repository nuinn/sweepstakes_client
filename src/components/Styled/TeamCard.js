import styled from "styled-components";

const TeamCard = styled.div`
  display: flex;
  align-items: center;
  // gap: 20px;
  width: 220px;
  height: 80px;
  background-image: ${ props => props.$bgimage || 'linear-gradient(to right top, #2b2c36, #2e344f, #2d3c69, #244584, #004ea0)'};
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
  }
    & h2 {
      font-size: 24px;
      font-weight: 200;
    }

    & p {
      color: var(--yellow);
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export default TeamCard;