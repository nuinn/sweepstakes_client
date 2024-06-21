import { useEffect } from "react"
import useApi from "../../hooks/useApi"

export default function Update(props) {
  const { league, setLeague, unregisteredMatches } = props
  const { data, getData, error } = useApi()

  useEffect(() => {
    getData({
      route: `leagues/update/${league._id}`,
      method: 'PATCH',
      body: {unregisteredMatches}
    })
  }, [])


}