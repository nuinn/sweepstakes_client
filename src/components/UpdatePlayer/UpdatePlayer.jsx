import useApi from "../../hooks/useApi";
import StyledPlayerCard from '../Styled/PlayerCard.js'

function UpdatePlayer(props) {
  const { something } = props
  const { getData, data, error, isLoading } = useApi()

  return (
    <StyledPlayerCard>

    </StyledPlayerCard>
  )
}