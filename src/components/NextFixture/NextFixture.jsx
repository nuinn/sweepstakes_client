import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import Fixture from '../Fixture/Fixture.jsx'

function NextFixture(props) {
  const { leagueId } = props
  const { data, getData } = useApi()
  const [nextFixture, setNextFixture] = useState(null)

  useEffect(() => {
    getData({
      route: 'api/v4/competitions/EC/matches?status=IN_PLAY,SCHEDULED'
    })
  }, [])

  useEffect(() => {
    if (data) {
      console.log(data)
      if (data.matches[0].matchday === 3) {
        setNextFixture('matchday 3')
      }
      else {
        data && setNextFixture(data.matches[0])
      }
    }
  }, [data])

  return (
    <>
      {nextFixture && typeof nextFixture === 'string' && data.matches &&
        <>
          <Fixture fixture={data.matches[0]} leagueId={leagueId} />
          <Fixture fixture={data.matches[1]} leagueId={leagueId} noDate={true}/>
        </>
      }
      {nextFixture && typeof nextFixture !== 'string' &&
        <Fixture fixture={nextFixture} leagueId={leagueId}/>
      }
    </>
  )
}

export default NextFixture;
