import { useState } from 'react'
import axios from 'axios'

const endpoint = 'api/v4/'
// const endpoint = 'https://api.football-data.org/api/v4/'

function useExternal() {
  const [exData, setExData] = useState()
  const [exError, setExError] = useState()
  const [isExLoading, setIsExLoading] = useState(false)

  async function getExData({ route }) {
    setExError()
    setExData()
    setIsExLoading(true)
    const url = endpoint + route
    axios.get(url)
      .then(response => {
        console.log('axios response', response)
        setExData(response.data)
        setIsExLoading(false)
      })
      .catch(error => {
        setExError(error)
        console.error('There was an error making the request')
        setIsExLoading(false)
      });
  }

  return { exData, exError, isExLoading, getExData }
}

export default useExternal;