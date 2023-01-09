import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ImageSlider from './components/Slider';
import { SliderData } from './components/SliderData';
import './components/Slider.css';
import Footer from './components/Footer'
import Form from './components/Form';

const App = () => {
    return(
        <>
            <Router>
            <Navbar />
                <Switch>
                    <Route path='/' element = {<Home />} exact>
                        <Home />
                        <ImageSlider slides={SliderData} />
                        <Footer />
                    </Route>
                    <Route path='/products' element = {<Products />} exact>
                        <Products />
                        <Footer />
                    </Route>
                    <Route path='/contact' element = {<Contact />} exact>
                        <Contact />
                        <Form />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
