import { useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import FixtureTeamCard from '../FixtureTeamCard/FixtureTeamCard.jsx'
import StyledFixture from '../Styled/Fixture.js'
import formatDate from '../../services/formatDate.js'
import formatStage from '../../services/formatStage.js'

function Fixture(props) {
  const { fixture, leagueId, noDate } = props
  const { data, getData, isLoading, error } = useApi()

  useEffect(() => {
    console.log('fixture.jsx', fixture)
    getData({
      route: `players/${leagueId}`
    })
  }, [])

  // useEffect(() => {
  //   data && console.log('players', data.filter((player) => player.teams.includes(fixture.homeTeam.id.toString())))
  //   console.log('fixture', fixture)
  // }, [data])

  return (
    <>
      {data &&
        <StyledFixture $padding={noDate ? '0px 0px 20px' : '20px 0px'}>
          { !noDate &&
            <div className="info">
              <p className='date'>{ fixture.status === "IN_PLAY" ? 'Now' : formatDate(fixture.utcDate)}</p>
              <p className='round'>{`${formatStage(fixture.group)}, Match ${fixture.matchday} of 3`}</p>
            </div>
          }
          <div className='matchup'>
            <FixtureTeamCard
              team={fixture.homeTeam}
              player={data.filter((player) => player.teams.includes(fixture.homeTeam.id.toString()))[0]}
              finished={fixture.status === "FINISHED"}
            />
            <p className={ fixture.status === "IN_PLAY" ? 'score inPlay' : 'score'}>
              { fixture.status === "FINISHED" || fixture.status === "IN_PLAY" ? `${fixture.score.fullTime.home || fixture.score.halfTime.home || 0}` : '' }
            </p>
            <p className={ fixture.status === "IN_PLAY" ? 'vs inPlay' : 'vs'}>vs</p>
            <p className={ fixture.status === "IN_PLAY" ? 'score inPlay' : 'score'}>
              { fixture.status === "FINISHED" || fixture.status === "IN_PLAY" ? `${fixture.score.fullTime.away || fixture.score.halfTime.away || 0}` : '' }
            </p>
            <FixtureTeamCard
              team={fixture.awayTeam}
              player={data.filter((player) => player.teams.includes(fixture.awayTeam.id.toString()))[0]}
              finished={fixture.status === "FINISHED"}
            />
          </div>
        </StyledFixture>
      }
    </>
  )
}

export default Fixture