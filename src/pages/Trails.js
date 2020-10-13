import React from 'react';
import { Link } from 'react-router-dom';
import Trail from '../components/Trail';
const Trials = ({match}) => {

    
    return ( 
        
        <>
        <Trail id={match.params.id}/>
        <Link to="/trails">Powrót do listy szlaków</Link>
        </>
     );
}
 
export default Trials;