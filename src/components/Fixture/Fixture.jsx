import { useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import FixtureTeamCard from '../FixtureTeamCard/FixtureTeamCard.jsx'
import StyledFixture from '../Styled/Fixture.js'

function convertUTCDate(utcDateStr) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const utcDate = new Date(utcDateStr);
    const localDate = new Date(utcDate.getTime() + (new Date().getTimezoneOffset() * 60000));

    const today = new Date();
    const isToday = (
        localDate.getDate() === today.getDate() &&
        localDate.getMonth() === today.getMonth() &&
        localDate.getFullYear() === today.getFullYear()
    );

    const hours = localDate.getHours().toString().padStart(2, '0');
    const minutes = localDate.getMinutes().toString().padStart(2, '0');

    if (isToday) {
        return `Today at ${hours}:${minutes}`;
    } else {
        const dayOfWeek = daysOfWeek[localDate.getDay()];
        return `${dayOfWeek} at ${hours}:${minutes}`;
    }
}

function Fixture(props) {
  const { fixture, leagueId } = props
  const { data, getData, isLoading, error } = useApi()

  useEffect(() => {
    getData({
      route: `players/${leagueId}`
    })
  }, [])

  useEffect(() => {
    data && console.log('players', data.filter((player) => player.teams.includes(fixture.homeTeam.id.toString())))
    console.log('fixture', fixture)

  }, [data])

  return (
    <>
      {data &&
        <StyledFixture>
          <div className='matchup'>
            <p>{convertUTCDate(fixture.utcDate)}</p>
            <FixtureTeamCard
              team={fixture.homeTeam}
              player={data.filter((player) => player.teams.includes(fixture.homeTeam.id.toString()))[0]}
            />
            <p className='vs'>vs</p>
            <FixtureTeamCard
              team={fixture.awayTeam}
              player={data.filter((player) => player.teams.includes(fixture.awayTeam.id.toString()))[0]}
            />
          </div>
        </StyledFixture>
      }
    </>
  )
}

export default Fixture