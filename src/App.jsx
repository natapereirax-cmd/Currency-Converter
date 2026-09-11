import { ContentStyled } from './App.js'
import Menu from './containers/menu/index'
import About from './containers/about-us/index.jsx'
import Header from './components/header/index'
import Footer from './components/footer/index'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <ContentStyled>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </main>
        <Footer/>
    </ContentStyled>
  )
}

export default App
