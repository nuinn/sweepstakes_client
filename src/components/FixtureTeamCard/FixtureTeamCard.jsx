import StyledTeamCard from '../Styled/TeamCard.js'

function FixtureTeamCard(props) {
  const { team, player, finished } = props

  return (
    <StyledTeamCard $bgcolor={ team.id ? '' : 'var(--blue)'}>
        <>
          <div className='flag'>
            <img className={ team.crest ? '' : 'logo'} src={team.crest || 'https://b.fssta.com/uploads/application/soccer/competition-logos/eurocup2024-alternate2.vresize.350.350.medium.0.png'}></img>
          </div>
          <div className='content'>
            <h2>{team.name || 'TBC'}</h2>
            <div className="player">
              <p className='name'>{player.name || ''}</p>
              {!finished && player && <p className='points'>{`${(player.teamsData.reduce((sum, team) => sum + team.group.won + team.KO.won, 0)*3)+(player.teamsData.reduce((sum, team) => sum + team.group.drawn + team.KO.drawn + team.KO.PK, 0))} pts`}</p>}
            </div>
          </div>
        </>
    </StyledTeamCard>
  )
}

export default FixtureTeamCard