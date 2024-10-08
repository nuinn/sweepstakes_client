import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'
import Spinner from '../Spinner/Spinner.jsx'

const StyledLeagueInput = styled.div`
  display: flex;
  flex-direction: column;
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

  & .inputButton {
    cursor: pointer;
    border-radius: 6px;
    background-color: var(--yellow);
    color: var(--blue);
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    transition: .2s;
    &:active, &:hover {
    transform: scale(0.95);
  }
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

function LeagueInput(props) {
  const { league, setLeague } = props
  const [leagueName, setLeagueName] = useState('')
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    if (data) {
      console.log('league data', data)
      localStorage.data = JSON.stringify(data)
      setLeague(data)
      window.location.reload()
    }
  }, [data, error])

  function handleInput(e) {
    setLeagueName(e.target.value)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setLeagueName(e.target.value)
      submitHandler()
    }
  }

  function submitHandler() {
    getData({
      route: `leagues/${leagueName}`
    })
    this.forceUpdate()
  }

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading &&
        <StyledLeagueInput>
          <img src="https://upload.wikimedia.org/wikipedia/it/f/f0/UEFA_Euro_2024_Logo.png" alt="" />
          <h3>Enter League Name</h3>
          <input
            type="text"
            onChange={ handleInput }
            onKeyDown={ handleKeyDown }
          />
          <div
            className="inputButton"
            onClick={ submitHandler }
          >
            Submit
          </div>
        </StyledLeagueInput>
      }
    </>
  )
}

export default LeagueInput