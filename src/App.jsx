import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <div className='py-4 2xl:px-44 lg:px-26 md:px-20 sm:px-10 px-6'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
