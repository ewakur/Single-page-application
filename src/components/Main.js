import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Trails from '../pages/Trails';
import TrailsList from '../pages/TrailsList';
import Equipment from '../pages/Equipment';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import "../style/Main.css";

const Main = () => {
    
    return (
        <>
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/trails" exact component={TrailsList}/>
        <Route path="/trail/:id" component={Trails}/>
        <Route path="/equipment" exact component={Equipment}/>
        <Route path="/contact" exact component={Contact}/>
        <Route component={ErrorPage}/>
        </Switch>
        </>
        )
}
export default Main;