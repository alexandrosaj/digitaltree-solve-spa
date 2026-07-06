import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import RoomSingle from './pages/RoomSingle'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:slug" element={<RoomSingle />} />
      </Routes>
    </>
  )
}
