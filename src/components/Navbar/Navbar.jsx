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
  align-items: center;
  gap: 25px;

  & p {
    font-size: 48px;
    font-weight: 300;
  }

  & img {
    height: 90%;
  }
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <img src="https://upload.wikimedia.org/wikipedia/it/f/f0/UEFA_Euro_2024_Logo.png" alt="" />
      <p>Sweepstakes</p>
    </StyledNavbar>
  )
}