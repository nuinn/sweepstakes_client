import { useEffect } from "react"
import styled from "styled-components";
import useApi from "../../hooks/useApi"
import PlayerCard from "../PlayerCard/PlayerCard.jsx"
import Spinner from "../Spinner/Spinner.jsx";
import StyledButton from "../Styled/Button.js";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // overflow-y: scroll;
  padding: 25px;
  box-sizing: border-box;
  gap: 8px;
  padding-top: 68px;
`


function DrawComplete(props) {
  const { api, leagueId } = props
  const { getData, data, error, isLoading } = useApi();

  useEffect(() => {
    getData({
      route: `players/${leagueId}`
    })
  }, [])

  useEffect(() => {
    data && console.log('players', data)
    api && console.log('api', api)
  }, [data])

  return (
    <StyledContainer>
      {isLoading && <Spinner />}
      {data && data.map((player) =>
        <PlayerCard player={player} api={api}/>
      )}

    </StyledContainer>
  )
}

export default DrawComplete