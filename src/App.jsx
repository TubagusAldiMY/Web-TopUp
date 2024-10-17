import './App.css'
import Hero from './components/Fragments/Hero'
import Cards from './components/Fragments/Cards'
import Navbar from './components/Fragments/Navbar'
import Search from './components/Elements/Search'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className='flex justify-center gap-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </Fragment>
  )
}

export default App

