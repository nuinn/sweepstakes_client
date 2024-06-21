import { useEffect } from "react"
import useApi from "../../hooks/useApi"

export default function Update(props) {
  const { league, unregisteredMatches } = props
  const { getData } = useApi()

  useEffect(() => {
    getData({
      route: `leagues/update/${league._id}`,
      method: 'PATCH',
      body: {unregisteredMatches}
    })
  }, [])
}