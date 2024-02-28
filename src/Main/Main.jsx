import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import './Main.css'

const Main = () => {
  return (
    <div className='main-layout'>
      <Navbar />

      <Outlet />
    </div>
  )
}

export default Main
