import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';

import React from 'react'
import Story from './Components/Story/Story';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>                
            <Route path="/story" element={<Story/>} />
        </Routes>
    )
}
