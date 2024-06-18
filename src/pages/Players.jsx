import { useEffect } from "react"
import useApi from "../hooks/useApi"
import useExternal from "../hooks/useExternal"
import DrawComplete from "../components/DrawComplete/DrawComplete.jsx"
import contactApi from "../services/contactApi.js"

function Players() {
  const { getData, data, error, isLoading } = useApi()
  const { exData, exError, isExLoading, getExData } = useExternal()

  // useEffect(() => {
  //   getExData({
  //     route: 'competitions/EC/teams'
  //   })
  // }, [])

  useEffect(() => {
    getData({
      route: 'api/v4/competitions/EC/teams'
    })
  }, [])

  useEffect(() => {
    data && console.log('useApi data', data);
    error && console.error(error)
  }, [data, error])

  // useEffect(() => {
  //   console.log('contactApi')
  //   const url = 'https://api.football-data.org/v4/competitions/EC/teams'
  //   contactApi(url)
  // }, [])

  return (
    <>
      {localStorage.data && data &&
        <DrawComplete leagueId={JSON.parse(localStorage.data)._id} api={data} />
      }
    </>
  )
}

export default Players