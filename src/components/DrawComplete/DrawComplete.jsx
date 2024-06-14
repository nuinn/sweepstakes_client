import { useEffect } from "react"
import styled from "styled-components";
import useApi from "../../hooks/useApi"
import PlayerCard from "../PlayerCard/PlayerCard.jsx"
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
`


function DrawComplete(props) {
  const { api, leagueId } = props
  console.log('leagueId', leagueId)
  const { getData, data, error, isLoading } = useApi();

  useEffect(() => {
    getData({
      route: `players/${leagueId}`
    })
  }, [])

  useEffect(() => {
    data && console.log(data)
  }, [data])

  return (
    <StyledContainer>
      {data && data.map((player) =>
        <PlayerCard player={player} api={api}/>
      )}

    </StyledContainer>
  )
}

export default DrawComplete