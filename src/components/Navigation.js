import React from 'react';
import '../style/Navigation.css';
import {NavLink} from 'react-router-dom';

const list = [
    {name:'start', path: '/', exact:true},
    {name:'szlaki', path: 'trails'},
    {name:'sprzęt', path: 'equipment'},
    {name:'kontakt', path: 'contact'}

]
const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact? item.exact : false}>{item.name.toLocaleUpperCase()}</NavLink>
        </li>
    ) )
    return (
     <nav className='nav'>
        <ul>
        {menu}
        </ul>
     </nav>
    )
    
}
export default Navigation;