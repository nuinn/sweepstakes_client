import { useEffect } from "react"
import useApi from "../hooks/useApi"
import useToggle from "../hooks/useToggle.js"
import Spinner from "../components/Spinner/Spinner.jsx"
import Fixture from "../components/Fixture/Fixture"
import StyledWrap from "../components/Styled/Wrap.js"
import StyledButton from "../components/Styled/Button.js"

export default function Fixtures() {
  const { getData, data, error, isLoading } = useApi()
  const [finished,toggleFinished] = useToggle(false)

  useEffect(() => {
    if (finished) {
      getData({
        route: 'api/v4/competitions/EC/matches'
      })
    }
    else {
      getData({
        route: 'api/v4/competitions/EC/matches?status=IN_PLAY,SCHEDULED'
      })
    }
  }, [finished])

  useEffect(() => {
    data && console.log('matches', data.matches)
  }, [data])

  return (
    <>
      <StyledWrap>
      <StyledButton onClick={toggleFinished} $bgcolor={finished ? 'var(--blue)' : ''}>{finished ? 'Remove Finished Matches' : 'Include Finished Matches'}</StyledButton>
      { isLoading && <Spinner />}
      {data &&
        data.matches
          .filter((match) => match.stage.includes("GROUP") || match.stage.includes("LAST_16"))
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