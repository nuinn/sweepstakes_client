import { useEffect } from "react"
import styled from "styled-components"
import useApi from "../../hooks/useApi"
import PlayerInput from "../PlayerInput/PlayerInput"
import Delete from "../Delete/Delete.jsx"

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

function PlayerHandler(props) {
  const { leagueId } = props
  const { getData, data, error, isLoading } = useApi()

  function getPlayers() {
    getData({
      route: `players/${leagueId}`
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
            <Delete
              _id={player._id}
              getPlayers={getPlayers}
            />
          </StyledPlayerHandlerCard>)
        }
        <PlayerInput leagueId={leagueId} getPlayers={getPlayers}/>
      </StyledPlayerHandler>
    </>
  )
}

export default PlayerHandler