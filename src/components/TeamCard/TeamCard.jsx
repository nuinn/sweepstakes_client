import { useEffect } from 'react'
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
  const { exData, exError, isExLoading, getExData } = useExternal()

  useEffect(() => {
    getExData({
      route: `teams/${team.apiId}`
    })
  }, [])

  useEffect(() => {
    exData && console.log('exData', exData)
  }, [exData, exError])

  return (
    <>
      {exData &&
        <StyledTeamCard>
          <img src={exData.crest} alt="" />
          <p>{`${team.ranking} ${team.name}`}</p>
        </StyledTeamCard>
      }
    </>
  )
}

export default TeamCard