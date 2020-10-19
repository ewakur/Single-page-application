import React from 'react';
import { useHistory } from 'react-router-dom';
import Trail from '../components/Trail';
const Trials = ({match}) => {

    const history = useHistory();

    const handleOnClick = () => history.goBack(); 

    return ( 
        
        <>
        <Trail id={match.params.id}/>
        <button className="btn-trail" onClick={handleOnClick}>Powrót do listy szlaków</button>
        </>
     );
}
 
export default Trials;