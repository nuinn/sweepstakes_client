import StyledTeamCard from '../Styled/TeamCard.js'

function TeamCard(props) {
  const { team, api } = props
  // const [teamData, setTeamData] = useState(null)
  // const { exData, exError, isExLoading, getExData } = useExternal()

  // useEffect(() => {
  //   getExData({
  //     route: `teams/${team.apiId}`
  //   })
  // }, [])

  // useEffect(() => {
  //   exData && setTeamData(exData)
  // }, [exData, exError])

  return (
    <StyledTeamCard $bgimage={ team.ranking <= 5 && 'linear-gradient(to right top, #2b2c36, #1d4862, #006a80, #008b7e, #00a85d)'}>
      <div className='flag'>
        <img src={api.teams.filter((apiTeam) => apiTeam.id === team.apiId)[0].crest}></img>
      </div>
      <div className='content'>
        <h2>{`${team.ranking} - ${team.name}`}</h2>
        { team.note && <p>{team.note}</p>}
      </div>
    </StyledTeamCard>
  )
}

export default TeamCard