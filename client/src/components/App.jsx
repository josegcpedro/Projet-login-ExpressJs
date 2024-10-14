import {BrowserRouter, Routes, Route} from 'react-router-dom' // Importa componentes de roteamento do react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css' // Importa estilos do Bootstrap
import { useState } from 'react' // Importa o hook useState do React
import SignUp from './SignUp' // Importa o componente SignUp
import Login from './Login' // Importa o componente Login
import Home from './Home' // Importa o componente Home

function App() { 
  return (
    <BrowserRouter> {/* Envoltorio para habilitar o roteamento */}
      <Routes> {/* Define as rotas da aplicação */}
        <Route path="/register" element={<SignUp />} /> {/* Rota para a página de registro */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
        <Route path="/Home" element={<Home />} /> {/* Rota para a página principal */}
      </Routes>
    </BrowserRouter>
  )
}

export default App // Exporta o componente App como o componente principal