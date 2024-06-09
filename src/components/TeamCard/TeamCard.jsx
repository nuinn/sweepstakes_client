import { useState, useEffect } from 'react'
import useExternal from '../../hooks/useExternal'
import styled from "styled-components"

const StyledTeamCard = styled.div`
  display: flex;
  width: 300px;
  height: 80px;
  background-color: grey;
  color: white;
`

function TeamCard(props) {
  const { team } = props
  const [teamData, setTeamData] = useState(null)
  const { exData, exError, isExLoading, getExData } = useExternal()

  useEffect(() => {
    getExData({
      route: `teams/${team.apiId}`
    })
  }, [])

  useEffect(() => {
    exData && setTeamData(exData)
  }, [exData, exError])

  return (
    <>
      {teamData &&
        <StyledTeamCard>
          <img src={teamData.crest} alt="" />
          <p>{`${team.ranking} ${team.name}`}</p>
        </StyledTeamCard>
      }
    </>
  )
}

export default TeamCard