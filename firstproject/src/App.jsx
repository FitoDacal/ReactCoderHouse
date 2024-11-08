import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
        <ItemListContainer greeting = "Welcome to Trossed!"/>
      </main>
    </>
  )  
}

export default App
