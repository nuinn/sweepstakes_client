import { useRoutes } from 'react-router-dom'

import App from './App.jsx'
import Players from './pages/Players.jsx'

function AppRouter() {
  return useRoutes([
    {
      element: <App />,
      path: '/'
    },
    {
      element: <Players />,
      path: '/players'
    }
  ])
}

export default AppRouter