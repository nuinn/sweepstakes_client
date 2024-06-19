import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import Fixture from '../Fixture/Fixture.jsx'

function NextFixture(props) {
  const { leagueId } = props
  const { data, getData } = useApi()
  const [nextFixture, setNextFixture] = useState(null)

  useEffect(() => {
    getData({
      route: 'api/v4/competitions/EC/matches?status=SCHEDULED'
    })
  }, [])

  useEffect(() => {
    data && setNextFixture(data.matches[0])
    data && console.log(nextFixture)
  }, [data])

  return (
    <>
      {nextFixture &&
        <Fixture fixture={nextFixture} leagueId={leagueId}/>
      }
    </>
  )
}

export default NextFixture;
