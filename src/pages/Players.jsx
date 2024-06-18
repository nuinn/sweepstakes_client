import { useEffect } from "react"
import useApi from "../hooks/useApi"
import useExternal from "../hooks/useExternal"
import DrawComplete from "../components/DrawComplete/DrawComplete.jsx"
import contactApi from "../services/contactApi.js"

function Players() {
  const { getData, data, error, isLoading } = useApi()
  const { exData, exError, isExLoading, getExData } = useExternal()

  useEffect(() => {
    getExData({
      route: 'competitions/EC/teams'
    })
  }, [])

  useEffect(() => {
    const url = 'https://api.football-data.org/v4/competitions/EC/teams'
    contactApi(url)
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