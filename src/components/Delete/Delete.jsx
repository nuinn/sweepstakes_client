import { useEffect } from "react"
import styled from "styled-components"
import useApi from "../../hooks/useApi"

const StyledDelete = styled.div`
  width: 18px;
  height: 18px;
  background-color: var(--red);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`

function Delete(props) {
  const { _id, getPlayers } = props
  const { getData, data, error, isLoading } = useApi()

  function handleDelete({ _id }) {
    getData({
      route: `players/${_id}`,
      method: 'DELETE'
    })
  }

  useEffect(() => {
    data && getPlayers()
  }, [data])

  return (
    <StyledDelete onClick={ () => handleDelete({ _id }) }>
      <p>✕</p>
    </StyledDelete>

  )
}

export default Delete