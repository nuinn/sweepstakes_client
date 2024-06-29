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
              <p className='date'>{ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'Now' : formatDate(fixture.utcDate)}</p>
              { fixture.stage === 'GROUP_STAGE' ?
                <p className='round'>{`${formatStage(fixture.group)}, Match ${fixture.matchday} of 3`}</p>
                :
                <p className='round'>{formatStage(fixture.stage)}</p>

              }
            </div>
          }
          <div className='matchup'>
            <FixtureTeamCard
              team={fixture.homeTeam || ''}
              player={fixture.homeTeam.id !== null ? data.filter((player) => player.teams.includes(fixture.homeTeam.id.toString()))[0] : ''}
              finished={fixture.status === "FINISHED"}
            />
            <div className="scoreContainer">
              { fixture.score.duration === "PENALTY_SHOOTOUT" ?
              <>
                <div className="pensContainer"></div>
                <div className="finalScore">
                  <p className={ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'score inPlay' : 'score'}>
                    {`${fixture.score.fullTime.homeTeam - fixture.score.penalties.homeTeam}${fixture.score.winner === "HOME_TEAM" ? '*' : ''}`}
                  </p>
                  <p className={ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'vs inPlay' : 'vs'}>vs</p>
                  <p className={ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'score inPlay' : 'score'}>
                    {`${fixture.score.fullTime.awayTeam - fixture.score.penalties.awayTeam}${fixture.score.winner === "AWAY_TEAM" ? '*' : ''}`}
                  </p>
                </div>
                <div className="pensContainer">
                  <p className='pens'>{`(${fixture.score.penalties.homeTeam} - ${fixture.score.penalties.awayTeam})`}</p>
                </div>
              </>
              :
              <>
                <div className="pensContainer"></div>
                <div className="finalScore">
                  <p className={ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'score inPlay' : 'score'}>
                    { fixture.status === "FINISHED" || fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? `${fixture.score.fullTime.home || fixture.score.halfTime.home || 0}` : '' }
                  </p>
                  <p className={ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'vs inPlay' : 'vs'}>vs</p>
                  <p className={ fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? 'score inPlay' : 'score'}>
                    { fixture.status === "FINISHED" || fixture.status === "IN_PLAY" || fixture.status === "PAUSED" ? `${fixture.score.fullTime.away || fixture.score.halfTime.away || 0}` : '' }
                  </p>
                </div>
                <div className="pensContainer">
                </div>
              </>

              }
            </div>
            <FixtureTeamCard
              team={fixture.awayTeam || ''}
              player={fixture.awayTeam.id !== null ? data.filter((player) => player.teams.includes(fixture.awayTeam.id.toString()))[0] : ''}
              finished={fixture.status === "FINISHED"}
            />
          </div>
        </StyledFixture>
      }
    </>
  )
}

export default Fixture