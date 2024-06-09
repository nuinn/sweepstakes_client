import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import useToggle from "../../hooks/useToggle.js"
import DrawTeamCard from "../DrawTeamCard/DrawTeamCard.jsx"
import TeamCard from "../TeamCard/TeamCard.jsx"
import UpdatePlayer from "../UpdatePlayer/UpdatePlayer.jsx"
import StyledButton from "../Styled/Button.js"
import generateRandomNumber from '../../services/generateRandomNumber.js'

function Draw(props) {
  const { players } = props
  const [teams, setTeams] = useState([])
  const [draw, setDraw] = useState(false)
  const [undrawnTeams, setUndrawnTeams] = useState([])
  const [livePlayers, setLivePlayers] = useState(players)
  const [drawnName, setDrawnName] = useState('')
  const [wildcards, setWildcards] = useState(0)
  const [apply,toggleApply] = useToggle(false)

  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    getData({
      route: 'teams'
    })
  }, [])

  useEffect(() => {
    data && setTeams(data)
    error && console.log(error)
  }, [data, error])

  function startDraw() {
    setDraw(true)
    setUndrawnTeams(teams)
    setWildcards(teams.length % players.length)
  }

  useEffect(() => {
    console.log('players', players)
    console.log('draw', draw)
    console.log('undrawnTeams', undrawnTeams)
    console.log('wildcards', wildcards)
  }, [draw])

  function drawName() {
    const randomNumber = generateRandomNumber({ min: 0, max: livePlayers.length })
    setDrawnName(livePlayers[randomNumber].name)
  }

  return (
    <>
      <div>
        {!draw &&
          <StyledButton onClick={startDraw}>Start Draw!</StyledButton>
        }
        {teams.length && !draw && teams.map((team) =>
          <DrawTeamCard
            key={team.name}
            team={team}
          />
        )}
        {draw &&
          <>
            <h1>{ wildcards ? 'Wildcard draw' : `Pot draw`}</h1>
            <TeamCard team={undrawnTeams[0]} />
            { drawnName && <p>{`${drawnName}!`}</p>}
            <StyledButton
              onClick={ drawnName ? toggleApply : drawName }>
                { drawnName ? 'Apply' : 'Draw!' }
            </StyledButton>
            { apply && <UpdatePlayer /> }
          </>
        }
      </div>
    </>
  )
}

export default Draw