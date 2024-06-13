import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import PlayerCard from "../PlayerCard/PlayerCard.jsx"

function UpdatePlayer(props) {
  const { team, player, wildcard, api } = props
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
    data && console.log('playerData', data);
    data && setPlayerData(data)
  }, [data])

  return (
    <>
      {playerData &&
        <PlayerCard player={playerData} api={api}/>
      }
    </>
    // <StyledPlayerCard>
    //   {/* {playerData &&
    //     <>
    //       <p>{playerData.name}</p>
    //       {playerData.teamsData && !!playerData.teamsData.length &&
    //         playerData.teamsData.map((team) =>
    //           <p>{team.name}</p>
    //         )
    //       }
    //       {playerData.wildcardData && <p className="wildcard">{playerData.wildcardData[0].name}</p>}
    //     </>
    //   } */}
    // </StyledPlayerCard>
  )
}

export default UpdatePlayer