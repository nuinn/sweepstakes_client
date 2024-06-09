import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import StyledPlayerCard from '../Styled/PlayerCard.js'

function UpdatePlayer(props) {
  const { team, player, wildcard } = props
  const { getData, data, error, isLoading } = useApi()
  const [playerData, setPlayerData] = useState(null)
  const key = wildcard ? 'wildcard' : 'team'

  useEffect(() => {
    getData({
      route: `players/add-team/${player}`,
      method: 'PATCH',
      body: {
        [key]: team,
      }
    })
  }, [])

  useEffect(() => {
    data && console.log(data)
    data && setPlayerData(data)
  }, [data])

  return (
    <StyledPlayerCard>
      {playerData &&
        <>
          <p>{playerData.name}</p>
          {playerData.teamsData && !!playerData.teamsData.length &&
            playerData.teamsData.map((team) =>
              <p>{team.name}</p>
            )
          }
          {playerData.wildcardData && <p className="wildcard">{playerData.wildcardData[0].name}</p>}
        </>
      }
    </StyledPlayerCard>
  )
}

export default UpdatePlayer