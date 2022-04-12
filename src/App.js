import React from 'react';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import './styles/styles.scss';

const App = () => {
    return (
        <>
            <CustomCursor />
            <Home />
            <Footer />
        </>
    )
}

export default App;