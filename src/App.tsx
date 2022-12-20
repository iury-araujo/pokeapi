import './App.css'

import Header from './components/header'
import Home from './components/home'
import {InitialRequest} from './components/requestApi'

function App() {

  return (
    <>
      <Header></Header>
      <InitialRequest/>
      <Home></Home>
    </>
  )
}

export default App
