import StyledTeamCard from '../Styled/TeamCard.js'

function FixtureTeamCard(props) {
  const { team, player, finished } = props

  return (
    <StyledTeamCard >
      <div className='flag'>
        <img src={team.crest}></img>
      </div>
      <div className='content'>
        <h2>{team.name}</h2>
        <div className="player">
          <p className='name'>{player.name}</p>
          {!finished && <p className='points'>{`${(player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn, 0))} pts`}</p>}
        </div>
      </div>
    </StyledTeamCard>
  )
}

export default FixtureTeamCard