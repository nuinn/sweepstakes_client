import { useEffect, useState } from 'react'
import useApi from './hooks/useApi.js'
import useExternal from './hooks/useExternal.js'
import './App.css'

function App() {
  const { getData, data, isLoading, error } = useApi()
  const { getExData, exData, isExLoading } = useExternal()

  useEffect(() => {
    getData({ route: 'teams' })
  }, [])

  // useEffect(() => {
  //   getExData({ route: 'competitions/EC/teams' })
  // }, [])

  useEffect(() => {
    data && console.log(data)
    error && console.log(error)
  }, [data, error])


  useEffect(() => {
    exData && console.log(exData)
  }, [exData])


  return (
    <>
      {isExLoading && <p>Hi</p>}
      {data && data.map((team) =>
        <p key={team.appId}>{team.name}</p>
      )
      }
      {/* {exData && <p>{JSON.stringify(exData)}</p>} */}
    </>
  )
}

export default App
