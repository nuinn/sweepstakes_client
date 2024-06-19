import StyledTeamCard from '../Styled/TeamCard.js'

function FixtureTeamCard(props) {
  const { team, player } = props
  console.log(player, 'playerAtTeamCard')

  return (
    <StyledTeamCard >
      <div className='flag'>
        <img src={team.crest}></img>
      </div>
      <div className='content'>
        <h2>{team.name}</h2>
        <p>{`${player.name}: ${(player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0))} pts`}</p>
      </div>
    </StyledTeamCard>
  )
}

export default FixtureTeamCard