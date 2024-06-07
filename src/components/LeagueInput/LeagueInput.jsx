import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'

const StyledLeagueInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;


  & .inputButton {
    cursor: pointer;
    border: 1px solid black;
  }

`

function LeagueInput(props) {
  const { league, setLeague } = props
  const [leagueName, setLeagueName] = useState('')
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    if (data) {
      localStorage.data = JSON.stringify(data)
    }
    error && console.log('error', error)
  }, [data, error])

  function handleInput(e) {
    setLeagueName(e.target.value)
  }

  function submitHandler() {
    getData({
      route: `leagues/${leagueName}`
    })
  }



  return (
    <>
      <StyledLeagueInput>
        <h3>Enter League Name</h3>
        <input
          type="text"
          onChange={ handleInput }
        />
        <div
          className="inputButton"
          onClick={ submitHandler }
        >
          Submit
        </div>
      </StyledLeagueInput>
    </>
  )
}

export default LeagueInput