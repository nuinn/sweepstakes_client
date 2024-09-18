import { useEffect, useState } from 'react'
import useApi from './hooks/useApi.js'
import LeagueInput from './components/LeagueInput/LeagueInput.jsx'
import PlayerHandler from './components/PlayerHandler/PlayerHandler.jsx'
import FinaliseLeague from './components/FinaliseLeague/FinaliseLeague.jsx'
import Spinner from './components/Spinner/Spinner.jsx'
import Draw from './components/Draw/Draw.jsx'
import League from './components/League/League.jsx'
import NextFixture from './components/NextFixture/NextFixture.jsx'
import CheckForUpdates from './components/CheckForUpdates/CheckForUpdates.jsx'
import StyledWrap from './components/Styled/Wrap.js'
import Welcome from './components/Welcome/Welcome.jsx'
import './App.css'

function App() {
  const [league, setLeague] = useState(null)
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    if (localStorage.data) {
      getData({
        route: `leagues/${JSON.parse(localStorage.data).name}`
      })
    }
  }, [])

  useEffect(() => {
    data && setLeague(data)
  }, [data, error])

  return (
    <StyledWrap>
      {!localStorage.data &&
        <>
          <Welcome />
          <LeagueInput league={league} setLeague={setLeague}/>
        </>
      }
      {localStorage.data && !!league && league.open &&
        <>
          <PlayerHandler leagueId ={league._id} />
          <FinaliseLeague _id={league._id} setLeague={setLeague}/>
        </>
      }
      {localStorage.data && !!league && !league.open && !league.live &&
        <Draw players={league.players} leagueId={league._id}/>
      }
      {isLoading && <Spinner />}
      {localStorage.data && !!league && league.live && data &&
        <>
          {/* <CheckForUpdates league={league} setLeague={setLeague} /> */}
          <NextFixture leagueId={league._id} />
          <League leagueId={league._id} />
        </>
      }
    </StyledWrap>
  )
}

export default App
