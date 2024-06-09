import styled from "styled-components"

const StyledDrawTeamCard = styled.div`
  width: 300px;
  height: 80px;
  background-color: grey;
  color: white;
`

function DrawTeamCard(props) {
  const { team } = props


  return (
    <StyledDrawTeamCard>
      <p>{`${team.ranking} ${team.name}`}</p>
    </StyledDrawTeamCard>
  )
}

export default DrawTeamCard