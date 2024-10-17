import './App.css'
import Hero from './components/Fragments/Hero'
import Cards from './components/Fragments/Cards'
import Navbar from './components/Fragments/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero img="/promotion.jpg" />
      <div className='flex justify-center items-center gap-5 h-screen'>
        <Cards img="/gameLogo/ml.jpeg" developer="Moonton" title="Mobile Legends" alt="Mobile Legends" />
        <Cards img="/gameLogo/ff.jpeg" developer="Garena" title="Free Fire" alt="ff" />
        <Cards img="/gameLogo/aov.jpeg" developer="Tencent" title="Arena of Valor" />
      </div>
    </>
  )
}

export default App

