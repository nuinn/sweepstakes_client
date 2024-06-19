import { useRoutes } from 'react-router-dom'

import App from './App.jsx'
import Players from './pages/Players.jsx'
import Fixtures from './pages/Fixtures.jsx'

function AppRouter() {
  return useRoutes([
    {
      element: <App />,
      path: '/'
    },
    {
      element: <Players />,
      path: '/players'
    },
    {
      element: <Fixtures />,
      path: '/fixtures'
    }
  ])
}

export default AppRouter