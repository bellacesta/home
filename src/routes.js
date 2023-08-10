import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Produtos from './pages/Produtos';


function RoutesApp() {
    return (
            <HashRouter basename='/'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="produtos" element={<Produtos/>} />
            </Routes>
            </HashRouter>

    )

}

export default RoutesApp;