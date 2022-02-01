import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';

import React from 'react'
import Story from './Components/Story/Story';
import Msc from './Components/Msc/Msc';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>                
            <Route path="/story" element={<Story/>} />
            <Route path="/msc" element={<Msc/>} />
        </Routes>
    )
}
