import styled from "styled-components"
import useApi from "../../hooks/useApi"
import { useEffect } from "react"

const StyledPlayerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--blue);

  & img {
    height: 200px;
  }

  h3 {
    margin: 0px;
    margin-top: 20px;
    font-weight: 400;
  }



  & input {
    padding: 4px 8px;
    background: transparent;
    outline: none;
    border-radius: 6px;
    border: 1px solid var(--blue);
    color: var(--blue);
  }
`

function PlayerInput(props) {
  const { leagueId, getPlayers } = props
  const { getData, data, error, isLoading } = useApi()

  function handleInput(e) {
    if (e.key === 'Enter') {
      getData({
        route: 'players/',
        method: 'POST',
        body: {
          name: e.target.value,
          league: leagueId
        }
      })
      e.target.value = ''
    }
  }

  useEffect(() => {
    data && getPlayers()
  }, [data])

  return (
    <>
      <StyledPlayerInput>
        <h3>Enter Player Name</h3>
        <input
          type="text"
          onKeyDown={ handleInput }
        />
      </StyledPlayerInput>
    </>
  )
}

export default PlayerInput