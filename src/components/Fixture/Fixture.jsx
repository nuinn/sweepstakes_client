import FixtureTeamCard from '../FixtureTeamCard/FixtureTeamCard.jsx'

function Fixture(props) {
  const { data } = props
  return (
    <>
      <FixtureTeamCard team={data.homeTeam} />
      <FixtureTeamCard team={data.awayTeam} />
    </>
  )
}

export default Fixture