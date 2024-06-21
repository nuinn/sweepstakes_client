import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import Update from '../Update/Update.jsx'

export default function CheckForUpdates(props) {
  const { league, setLeague } = props
  const { data, getData, isLoading, error } = useApi()
  const [completedMatches, setCompletedMatches] = useState(null)
  const [completedMatchesIds, setCompletedMatchesIds] = useState(null)
  const [unregisteredMatches, setUnregisteredMatches] = useState(null)

  useEffect(() => {
    console.log('league', league)
    getData({
      route: 'api/v4/competitions/EC/matches?status=FINISHED'
    })
  }, [])

  useEffect(() => {
    if (data) {
      setCompletedMatches(data.matches)
      const completedMatchesIdsArray = data.matches.map((match) => match.id)
      setCompletedMatchesIds(completedMatchesIdsArray);
    }
  }, [data])

  useEffect(() => {
    if (completedMatchesIds) {
      const unregisteredMatchesIds = completedMatchesIds.filter((match) => !league.matches.includes(match))
      const unregisteredMatchesData = []
      for (let i = 0; i < unregisteredMatchesIds.length; i++) {
        const unregisteredMatchId = unregisteredMatchesIds[i]
        // completedMatches.map((completedMatch) => completedMatch.id === unregisteredMatchId && )
        for (let j = 0; j < completedMatches.length; j++) {
          const completedMatch = completedMatches[j]
          if (completedMatch.id === unregisteredMatchId) {
            unregisteredMatchesData.push(completedMatch)
          }
        }
      }
      setUnregisteredMatches(unregisteredMatchesData)
    }
  }, [completedMatches])

  return (
    <>
      { unregisteredMatches &&
      <Update
        league={league}
        setLeague={setLeague}
        unregisteredMatches={unregisteredMatches}
      />
      }
    </>
  )
}