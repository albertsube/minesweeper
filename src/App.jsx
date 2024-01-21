import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Play from './pages/Play'
import Menu from './pages/Menu'
import Settings from './pages/Settings'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route element={<Layout />}>
          <Route path="/play" element={<Play />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
