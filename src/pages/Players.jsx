import { useEffect } from "react"
import useApi from "../hooks/useApi"
import DrawComplete from "../components/DrawComplete/DrawComplete.jsx"
import Spinner from "../components/Spinner/Spinner.jsx"

function Players() {
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    getData({
      route: 'api/v4/competitions/EC/teams'
    })
  }, [])

  return (
    <>
      {isLoading && <Spinner />}
      {localStorage.data && data &&
        <DrawComplete leagueId={JSON.parse(localStorage.data)._id} api={data} />
      }
    </>
  )
}

export default Players