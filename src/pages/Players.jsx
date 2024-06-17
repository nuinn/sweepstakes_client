import { useEffect } from "react"
import useApi from "../hooks/useApi"
import useExternal from "../hooks/useExternal"
import DrawComplete from "../components/DrawComplete/DrawComplete.jsx"

function Players() {
  const { getData, data, error, isLoading } = useApi()
  const { exData, exError, isExLoading, getExData } = useExternal()

  useEffect(() => {
    getExData({
      route: 'competitions/EC/teams'
    })
  }, [])

  return (
    <>
      {localStorage.data && exData &&
        <DrawComplete leagueId={JSON.parse(localStorage.data)._id} api={exData} />
      }
    </>
  )
}

export default Players