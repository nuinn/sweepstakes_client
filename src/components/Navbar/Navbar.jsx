import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 56px;
  background-color: var(--yellow);
  z-index: 1000;
  box-sizing: border-box;
  padding: 0px 25px 0px;
  color: var(--blue);
  display: flex;
  justify-content: space-between;

  & div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    width: 50%;
  }

  & .links {
    justify-content: flex-end;

    & p {
      color: var(--red);
      font-weight: 300;
      font-size: 22px;
      cursor: pointer;
    }
  }


  & h2 {
    font-size: 48px;
    font-weight: 300;
    cursor: pointer;
  }

  & img {
    height: 90%;
    cursor: pointer;
  }
`

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <StyledNavbar>
      <div onClick={ () => navigate('/') }>
        <img src="https://upload.wikimedia.org/wikipedia/it/f/f0/UEFA_Euro_2024_Logo.png" alt="" />
        <h2>Sweepstakes</h2>
      </div>
      <div className="links">
        <p onClick={ () => navigate('/players') }>Players</p>
        <p>Fixtures</p>
      </div>
    </StyledNavbar>
  )
}