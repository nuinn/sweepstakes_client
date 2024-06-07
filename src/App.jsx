import { useEffect, useState } from 'react'
import useApi from './hooks/useApi.js'
import useExternal from './hooks/useExternal.js'
import LeagueInput from './components/LeagueInput/LeagueInput.jsx'
import PlayerHandler from './components/PlayerHandler/PlayerHandler.jsx'
import PlayerInput from './components/PlayerInput/PlayerInput.jsx'

import './App.css'

function App() {
  const [league, setLeague] = useState()
  const [players, setPlayers] = useState([])

  useEffect(() => {
    if (localStorage.data) {
      setLeague(JSON.parse(localStorage.data))
    }
  }, [localStorage])

  useEffect(() => {
    console.log(league)
  }, [league])

  return (
    <>
      {!localStorage.data &&
       <LeagueInput />
      }
      {!!league && league.open &&
        <PlayerHandler leagueId ={league._id} />
      }
    </>
  )
}

export default App
