import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import FirstPage from './Components/Game/FirstPage'
import Game from './Components/Game/Game'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FirstPage/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
