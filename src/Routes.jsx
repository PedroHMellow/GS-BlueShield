import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Contatos from "./Pages/Contatos/Contatos";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";


function AppRoutes() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/Dashboard" element={<Dashboard />}></Route>
                <Route path="/Contatos" element={<Contatos />}> </Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes