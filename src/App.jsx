import { useEffect, useState } from 'react'
import LeagueInput from './components/LeagueInput/LeagueInput.jsx'
import PlayerHandler from './components/PlayerHandler/PlayerHandler.jsx'
import FinaliseLeague from './components/FinaliseLeague/FinaliseLeague.jsx'
import Draw from './components/Draw/Draw.jsx'
import League from './components/League/League.jsx'
import NextFixture from './components/NextFixture/NextFixture.jsx'
import StyledWrap from './components/Styled/Wrap.js'
import './App.css'

function App() {
  const [league, setLeague] = useState()
  const [live, setLive] = useState()

  useEffect(() => {
    if (localStorage.data) {
      setLeague(JSON.parse(localStorage.data))
    }
  }, [])

  return (
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
        <Draw players={league.players} leagueId={league._id}/>
      }
      {!!league && league.live &&
        <>
          <NextFixture leagueId={league._id} />
          <League leagueId={league._id} />
        </>
      }
    </StyledWrap>
  )
}

export default App
