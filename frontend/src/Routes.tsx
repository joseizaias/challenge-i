import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGoogleProvider } from "./contexts/authGoogle";

import { Home } from './pages/Home'
import { Login } from "./pages/Login";
import { Navegators } from './pages/Navegators'

export function AppRoutes() {

    return (
        //contexto de rotas do react-router-dom
        <BrowserRouter>
            {/* //contexto de autenticação do google */}
            <AuthGoogleProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/navegators" element={<Navegators />} />
                </Routes>
            </AuthGoogleProvider>
        </BrowserRouter>
    )
}
