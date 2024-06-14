import { useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import StyledLeague from '../Styled/League.js'

function League() {

  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    getData({
      route: `players/${leagueId}`
    })
  }, [])

  useEffect(() => {
    data && console.log(data)
  }, [data])

  return (
    <>
      { data &&
        <StyledLeague>
          <table>
            <tr>
              <th>Name</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>+/-</th>
              <th className='points'>Pts</th>
            </tr>
            { data.map((player) =>
              <tr>
                <td>{player.name}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.played, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.lost + team.KO.lost, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0)}</td>
                <td>{(player.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0))-(player.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0))}</td>
                <td className='points'>{(player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0))}</td>
              </tr>
            )}
          </table>
        </StyledLeague>
      }
    </>
  )
}

export default League