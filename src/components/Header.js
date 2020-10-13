import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../style/Header.css';
import img1 from '../images/panorama-5stawow.JPG';
import img2 from '../images/panorama.JPG';
import img3 from '../images/piecstawow.jpg';
import img4 from '../images/wejscie5stawow.jpg';
const Header = () => {

    return (
        <>
        <Switch>
        <Route path="/" exact render={() => (
            <img src={img2} alt="tatra-mountains"/>
        )}/>
        <Route path="/trails" render={() => (
            <img src={img1} alt="tatra-mountains"/>
        )}/>
        <Route path="/equipment" render={() => (
            <img src={img4} alt="tatra-mountains"/>
        )}/>
        <Route path="/contact" render={() => (
            <img src={img3} alt="tatra-mountains"/>
        )}/>
        <Route render={() => (
            <img src={img2} alt="tatra-mountains"/>
        )}/>
        </Switch>
        </>
    )
}

export default Header;