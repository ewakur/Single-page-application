import React from 'react';
import {Link} from 'react-router-dom';

const trails = ["Szlak na Rysy", "Szlak do Doliny Pięciu Stawów", "Szlak na Czerwone Wierchy"]

const TrailsList = () => {

    const list = trails.map(trail => (
        <li key={trail}>
            <Link to={`/trail/${trail}`}>{trail}</Link>
        </li>
        
    ))
    return ( 
        <>
        <h2>Lista szlaków</h2>
        <p className="trialTxt">Jest to lista popularnych szlaków często wybieranych przez turystów wyruszających w góry po raz pierwszy lub dla tych już bardziej zaawansowanych.</p>
        <ul className="trails">
            {list}
        </ul>
        </>
     );
}
 
export default TrailsList;