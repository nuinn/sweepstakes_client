import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar.jsx'
import LeagueInput from './components/LeagueInput/LeagueInput.jsx'
import PlayerHandler from './components/PlayerHandler/PlayerHandler.jsx'
import FinaliseLeague from './components/FinaliseLeague/FinaliseLeague.jsx'
import Draw from './components/Draw/Draw.jsx'
import './App.css'

const StyledWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  const [league, setLeague] = useState()
  const [live, setLive] = useState()

  useEffect(() => {
    if (localStorage.data) {
      setLeague(JSON.parse(localStorage.data))
    }
  }, [])

  return (
    <>
    <Navbar />
    <StyledWrap>
      {!localStorage.data &&
       <LeagueInput setLeague={setLeague}/>
      }
      {!!league && league.open &&
        <>
          <PlayerHandler leagueId ={league._id} />
          <FinaliseLeague _id={league._id} setLeague={setLeague}/>
        </>
      }
      {!!league && !league.open && !league.live &&
        <Draw players={league.players}/>
      }
    </StyledWrap>
    </>
  )
}

export default App
