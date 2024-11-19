
import { Header } from '../header'
import { Outlet } from 'react-router-dom'
export function Layout(){
    return(
      <>
      <Header/>
      
      {/* Aqui fica a nossa página do conteúdo que estou navegando */}
      <Outlet/>
      </>
    )
}