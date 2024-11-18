import './App.css'
import {router} from './routes'
import { RouterProvider } from 'react-router-dom'
function App() {


  return (
    //Passando a configuração para o router provider, o routerProvider usa nossas rotas configuradas
   <RouterProvider router={router}/>
  )
}

export default App
