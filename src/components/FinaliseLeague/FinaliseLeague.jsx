import { useEffect } from "react"
import useApi from "../../hooks/useApi"
import StyledButton from '../Styled/Button.js'

function FinaliseLeague(props) {
  const { _id, setLeague } = props
  const { getData, data, error, isLoading } = useApi()

  function handleFinalise() {
    getData({
      route: `leagues/${_id}`,
      method: 'PATCH',
      body: {
        open: false,
      }
    })
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      setLeague(data)
      localStorage.data = JSON.stringify(data)
    }
    error && console.log('error', error)
  }, [data, error])

  return (
    <StyledButton onClick={handleFinalise}>
      Finalise League
    </StyledButton>
  )
}

export default FinaliseLeague