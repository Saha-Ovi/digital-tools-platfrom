import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import DigiBoard from './components/DigiBoard/DigiBoard'
import AvailableDigiCard from './components/DigitalCard/AvailableDigiCard'
import Navbar from './components/Navbar/Navbar'

const DigitalCardData = async () => {
  const res = await fetch("/data.json");
  return res.json();

}

function App() {

  const DigitalCardPromise = DigitalCardData();
  const[cart,setCart]=useState([]);
  // console.log(DigitalCardPromise);
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <DigiBoard></DigiBoard>
      </main>
      <Suspense>
        <AvailableDigiCard DigitalCardPromise={DigitalCardPromise} cart={cart} setCart={setCart}></AvailableDigiCard>
      </Suspense>
      <footer>

      </footer>


    </>
  )
}

export default App
