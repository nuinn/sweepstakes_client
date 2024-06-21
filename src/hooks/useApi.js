import { useState } from 'react'

const endpoint = 'http://localhost:3000/';
// const endpoint = 'https://sweepstakes-server.onrender.com/';

function useApi() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function getData({ route, method='GET', body, headers={} }){
    setError()
    setData()
    setIsLoading(true)
    const response = await fetch(endpoint+route, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
        ...headers },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      const responseAsJson = await response.json()
      if (responseAsJson.token) {
        localStorage.token = responseAsJson.token
      }
      setData(responseAsJson)
      setIsLoading(false)
    } else {
      const responseAsJson = await response.json()
      setError(responseAsJson)
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, getData }
}

export default useApi;