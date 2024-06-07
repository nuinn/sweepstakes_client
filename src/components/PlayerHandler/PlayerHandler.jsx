import { useEffect } from "react"
import styled from "styled-components"
import useApi from "../../hooks/useApi"
import PlayerInput from "../PlayerInput/PlayerInput"

const StyledPlayerHandler = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const StyledPlayerHandlerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 24px;
  background-color: black;
  color: white;
  padding: 8px;
`

const StyledDelete = styled.div`
  width: 18px;
  height: 18px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
  font-size: 18px;
  cursor: pointer;
`

function PlayerHandler(props) {
  const { leagueId } = props
  const { getData, data, error, isLoading } = useApi()

  function getPlayers() {
    getData({
      route: `players/${leagueId}`
    })
  }

  function handleDelete() {
    getData({
      route: `players/`
    })
  }

  useEffect(() => {
    getPlayers()
  }, [])

  return (
    <>
      <StyledPlayerHandler>
        {data && data.map((player, i) =>
          <StyledPlayerHandlerCard key={player._id}>
            {`${i+1}. ${player.name}`}
            <StyledDelete onClick={ () => handleDelete(player) }>
              <p>x</p>
            </StyledDelete>
          </StyledPlayerHandlerCard>)
        }
        <PlayerInput leagueId={leagueId} getPlayers={getPlayers}/>
      </StyledPlayerHandler>
    </>
  )
}

export default PlayerHandler