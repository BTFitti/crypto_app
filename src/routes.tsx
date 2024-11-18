import { createBrowserRouter } from "react-router-dom"
import {Home} from './pages/home'
import {Detail} from './pages/details'
import {NotFound} from './pages/notfound'

//createBrowserRouter Criado para saber quais são nossas navegações, quem é o home, detail e o 404 por ex
const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/detail/:crypto",
                element: <Detail/>
            },
            {
                path:"*",
                element: <NotFound/>
            }
        ]
    }
])
export {router}