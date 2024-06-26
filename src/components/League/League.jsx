import { useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import Spinner from '../Spinner/Spinner.jsx'
import StyledLeague from '../Styled/League.js'

function League(props) {
  const { leagueId } = props
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    getData({
      route: `players/${leagueId}`
    })
  }, [])

  function getPlayerLives(player) {
    const liveTeams = player.teamsData.filter((team) => team.active).length
    if (!liveTeams) {
      return 'dead'
    }
    if (liveTeams === 1) {
      return 'one'
    }
    return ''
  }

  return (
    <>
      { isLoading && <Spinner />}
      { data &&
        <StyledLeague>
          <table>
            <tbody>
            <tr>
              <th className='pos'>Pos</th>
              <th className='name'>Name</th>
              <th>P</th>
              <th>W</th>
              <th>PK</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>+/-</th>
              <th className='points'>Pts</th>
            </tr>
            { data
              .sort((a, b) => {
                const pointsA = (a.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(a.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn + team.KO.PK, 0))
                const pointsB = (b.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(b.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn + team.KO.PK, 0))

                const goalDifferenceA = (a.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0))-(a.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0))
                const goalDifferenceB = (b.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0))-(b.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0))

                const goalsForA = a.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0)
                const goalsForB = b.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0)

                if (pointsA !== pointsB) {
                  return pointsB - pointsA
                }
                if (goalDifferenceA !== goalDifferenceB) {
                  return goalDifferenceB - goalDifferenceA
                }

                return goalsForB - goalsForA

              })
              .map((player, i) =>
              <tr key={player.name} className={getPlayerLives(player)}>
                <td className='pos'>{i+1}</td>
                <td className='name nameData'>{player.name}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.played, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => team.KO.PK ? sum + team.KO.PK : sum, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.lost + team.KO.lost, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0)}</td>
                <td>{player.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0)}</td>
                <td>{(player.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0))-(player.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0))}</td>
                <td className='points'>{(player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn + team.KO.PK, 0))}</td>
              </tr>
            )}
            </tbody>
          </table>
        </StyledLeague>
      }
    </>
  )
}

export default League