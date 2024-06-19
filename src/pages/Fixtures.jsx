import { useEffect } from "react"
import useApi from "../hooks/useApi"
import Fixture from "../components/Fixture/Fixture"
import StyledWrap from "../components/Styled/Wrap.js"

export default function Fixtures() {
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    getData({
      route: 'api/v4/competitions/EC/matches'
    })
  }, [])

  useEffect(() => {
    data && console.log(data.matches)
  }, [data])

  return (
    <>
      <StyledWrap>
      {data &&
        data.matches
          .filter((match) => match.stage.includes("GROUP"))
          .map((match) =>
          <Fixture
            key={match.id}
            fixture={match}
            leagueId={JSON.parse(localStorage.data)._id}
          />
        )
      }
      </StyledWrap>
    </>
  )
}