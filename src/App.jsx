import './App.css'
import Banner from './components/Banner/Banner'
import DigiBoard from './components/DigiBoard/DigiBoard'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
     <header>
    <Navbar></Navbar>
    <Banner></Banner>
     </header>
     <main>
    <DigiBoard></DigiBoard>
     </main>

     <footer>

     </footer>
      

    </>
  )
}

export default App
