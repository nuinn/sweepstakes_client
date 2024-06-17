import { useState } from 'react'
import StyledPlayerCard from '../Styled/PlayerCard.js'

function PlayerCard(props) {
  const { player, api } = props
  const [isWildcard, setIsWildcard] = useState(false);

  return (
    <StyledPlayerCard>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>+/-</th>
          <th className='points'>Pts</th>
        </tr>
        <tr className='nameRow'>
          <td className='playerName' colspan="2">{player.name}</td>
          <td>{player.teamsData.reduce((sum, team) => sum + team.played, 0)}</td>
          <td>{player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)}</td>
          <td>{player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0)}</td>
          <td>{player.teamsData.reduce((sum, team) => sum + team.group.lost + team.KO.lost, 0)}</td>
          <td>{player.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0)}</td>
          <td>{player.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0)}</td>
          <td>{(player.teamsData.reduce((sum, team) => sum + team.group.GF + team.KO.GF, 0))-(player.teamsData.reduce((sum, team) => sum + team.group.GA + team.KO.GA, 0))}</td>
          <td className='points'>{(player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0))}</td>
        </tr>
        {player.teamsData && !!player.teamsData.length &&
          player.teamsData.sort((a, b) => {
            // Calculate points for each team
            const pointsA = (a.group.won + a.KO.won) * 3 + (a.group.drawn + a.KO.drawn);
            const pointsB = (b.group.won + b.KO.won) * 3 + (b.group.drawn + b.KO.drawn);

            // Calculate goal difference for each team
            const goalDifferenceA = (a.group.GF + a.KO.GF) - (a.group.GA + a.KO.GA);
            const goalDifferenceB = (b.group.GF + b.KO.GF) - (b.group.GA + b.KO.GA);

            // Calculate total goals for each team
            const goalsForA = a.group.GF + a.KO.GF;
            const goalsForB = b.group.GF + b.KO.GF;

            // Compare points first
            if (pointsA !== pointsB) {
                return pointsB - pointsA;
            }

            // If points are the same, compare goal difference
            if (goalDifferenceA !== goalDifferenceB) {
                return goalDifferenceB - goalDifferenceA;
            }

            // If goal difference is the same, compare goals for
            return goalsForB - goalsForA;
        })
            .map((team) =>
            <tr key={team.name}>
              {api && <img src={api.teams.filter((apiTeam) => apiTeam.id === team.apiId)[0].crest}></img>}
              <td className='teamName'>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.group.won+team.KO.won}</td>
              <td>{team.group.drawn+team.KO.drawn}</td>
              <td>{team.group.lost+team.KO.lost}</td>
              <td>{team.group.GF+team.KO.GF}</td>
              <td>{team.group.GA+team.KO.GA}</td>
              <td>{(team.group.GF+team.KO.GF)-(team.group.GA+team.KO.GA)}</td>
              <td className='points'>{((team.group.won+team.KO.won)*3)+(team.group.drawn+team.KO.drawn)}</td>
            </tr>
          )
        }
        { player.wildcardData ?
          <tr className='wildcard'>
            {api && <img src={api.teams.filter((apiTeam) => apiTeam.id === player.wildcardData[0].apiId)[0].crest}></img>}
            <td className='teamName'>{player.wildcardData[0].name}</td>
            <td>{player.wildcardData[0].played}</td>
            <td>{player.wildcardData[0].group.won+player.wildcardData[0].KO.won}</td>
            <td>{player.wildcardData[0].group.drawn+player.wildcardData[0].KO.drawn}</td>
            <td>{player.wildcardData[0].group.lost+player.wildcardData[0].KO.lost}</td>
            <td>{player.wildcardData[0].group.GF+player.wildcardData[0].KO.GF}</td>
            <td>{player.wildcardData[0].group.GA+player.wildcardData[0].KO.GA}</td>
            <td>{(player.wildcardData[0].group.GF+player.wildcardData[0].KO.GF)-(player.wildcardData[0].group.GA+player.wildcardData[0].KO.GA)}</td>
            <td className='points'>{(player.wildcardData[0].group.won+player.wildcardData[0].KO.won*3)+(player.wildcardData[0].group.drawn+player.wildcardData[0].KO.drawn)}</td>
          </tr>
          :
          <tr className='emptyRow'>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        }
      </table>
    </StyledPlayerCard>
  )
}

export default PlayerCard