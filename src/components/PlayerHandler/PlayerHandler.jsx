import { useEffect } from "react"
import styled from "styled-components"
import useApi from "../../hooks/useApi"
import PlayerInput from "../PlayerInput/PlayerInput"
import Delete from "../Delete/Delete.jsx"

const StyledPlayerHandler = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StyledPlayerHandlerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 24px;
  background-color: var(--blue);
  color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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