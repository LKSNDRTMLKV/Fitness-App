import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';



const App = (props) => {
    return (
        <>
          <Box width="400px" sx={{width:{xl: "1600px", },m:"auto"}}>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail/>} />
            </Routes>

            <Footer />
          </Box>
        </>
    );
};

export default App;