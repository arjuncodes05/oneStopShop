import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <div className=' py-10 px-44'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
