import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className = 'App'>

      <Navbar></Navbar>
      <ItemListContainer greeting={'Welcome to Kairos Yoga Studio Shop'}></ItemListContainer>

    </div>
  )
}

export default App
