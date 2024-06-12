import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import useExternal from "../../hooks/useExternal.js"
import DrawTeamCard from "../DrawTeamCard/DrawTeamCard.jsx"
import TeamCard from "../TeamCard/TeamCard.jsx"
import UpdatePlayer from "../UpdatePlayer/UpdatePlayer.jsx"
import DrawComplete from "../DrawComplete/DrawComplete.jsx"
import StyledButton from "../Styled/Button.js"
import generateRandomNumber from '../../services/generateRandomNumber.js'

function Draw(props) {
  const { players } = props
  const [teams, setTeams] = useState([])
  const [draw, setDraw] = useState(false)
  const [undrawnTeams, setUndrawnTeams] = useState([])
  const [livePlayers, setLivePlayers] = useState([...players])
  const [drawnPlayer, setDrawnPlayer] = useState({})
  const [wildcards, setWildcards] = useState(0)
  const [pots, setPots] = useState(0)
  const [buttonState, setButtonState] = useState('draw')

  const { getData, data, error, isLoading } = useApi()
  const { exData, exError, isExLoading, getExData } = useExternal()

  useEffect(() => {
    getData({
      route: 'teams'
    })
    getExData({
      route: 'competitions/EC/teams'
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
    setPots(Math.floor(teams.length / players.length))
  }

  useEffect(() => {
    console.log('undrawnTeams', undrawnTeams)
    console.log('wildcards', wildcards)
    console.log('livePlayers', livePlayers)
    console.log('pots', pots)
  }, [draw, livePlayers, pots])

  function drawName() {
    const randomNumber = generateRandomNumber({ min: 0, max: livePlayers.length })
    setDrawnPlayer(livePlayers[randomNumber])
  }

  function buttonHandler() {
    if (buttonState === 'draw') {
      drawName()
      setButtonState('apply')
    }
    if (buttonState === 'apply') {
      setButtonState('next')
    }
    if (buttonState === 'next') {
      undrawnTeams.shift()
      livePlayers.splice(livePlayers.indexOf(drawnPlayer), 1)
      setLivePlayers([...livePlayers])
      wildcards && setWildcards(wildcards -1)
      setDrawnPlayer({})
      setButtonState('draw')
    }
  }

  useEffect(() => {
    if (wildcards === 0) {
      setWildcards(null)
      setLivePlayers([...players])
    }
  }, [wildcards])

  useEffect(() => {
    console.log()
    console.log('livePlayers.length', livePlayers.length)
    if (!livePlayers.length) {
      setPots(pots -1)
      setLivePlayers([...players])
    }
  }, [livePlayers])

  useEffect(() => {
    if (!undrawnTeams.length) {
      setPots(null)
    }
    if (pots === 0) {
      setPots(null)
    }
  }, [undrawnTeams, pots, livePlayers])

  return (
    <>

        {!draw &&

          <StyledButton onClick={startDraw}>Start Draw!</StyledButton>

        }
        {/* {teams.length && !draw && teams.map((team) =>
          <DrawTeamCard
            key={team.name}
            team={team}
          />
        )} */}
        {draw && !!undrawnTeams.length &&
          <>
            <h1>{ wildcards ? 'Wildcard draw' : `Pot ${pots} draw`}</h1>
            { buttonState !== 'next' && <h3>{ wildcards ? `${wildcards} remaining` : `${(players.length-livePlayers.length)+1} of ${players.length}`}</h3>}
            { buttonState !== 'next' && <TeamCard team={undrawnTeams[0]} />}
            { buttonState !== 'next' && drawnPlayer.name && <p>{`${drawnPlayer.name}!`}</p>}
            <StyledButton
              onClick={ buttonHandler }>
                { buttonState }
            </StyledButton>
            { buttonState === 'next' &&
              <UpdatePlayer
                team={undrawnTeams[0].apiId}
                player={drawnPlayer._id}
                wildcard={!!wildcards}
              />
            }
          </>
        }
      { draw && !undrawnTeams.length &&
        <>
          <StyledButton>Go live!</StyledButton>
          <DrawComplete api={exData}/>
        </>
      }

    </>
  )
}

export default Draw