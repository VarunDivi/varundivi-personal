import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Secret from './pages/Secret';



function App() {
    return (
        <>
        <Router>
        <Navbar />
            <Routes>
                <Route path='/' exact Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/secret' Component={Secret}/>
            </Routes>

        </Router>
        </>
    );
}

export default App;