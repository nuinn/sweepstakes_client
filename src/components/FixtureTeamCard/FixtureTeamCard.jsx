import StyledTeamCard from '../Styled/TeamCard.js'

function FixtureTeamCard(props) {
  const { team } = props

  return (
    <StyledTeamCard >
      <div className='flag'>
        <img src={team.crest}></img>
      </div>
      <div className='content'>
        <h2>{team.name}</h2>
        { team.note && <p>{team.note}</p>}
      </div>
    </StyledTeamCard>
  )
}

export default FixtureTeamCard