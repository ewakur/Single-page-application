import React from 'react';
const Equipment = () => {
    return ( 
        <>
        <h2>Co warto mieć ze sobą idąc w góry?</h2>
        <p>W zależności od pory roku w której chcesz się wybrać na wędrówkę będziesz potrzebował innego sprzętu/wyposażenia.</p>
        <p>Oczywiście przed każdym wyjściem w góry należy sprawdzić aktualną pogodę!!</p>
        <h4>Sprzęt potrzebny w słoneczną, ciepłą pogodę:</h4>
        <ul className="equipment">
            <li>Dobre buty trekkingowe</li>
            <li>Nakrycie głowy</li>
            <li>Filtr przeciwsłoneczny</li>
            <li>Woda</li>
            <li>Pożywne przekąski</li>
            <li>Kijki</li>
        </ul>
        <h4>Sprzęt potrzebny w chłodną, zimową pogodę:</h4>
        <ul className="equipment">
            <li>Dobre buty trekkingowe</li>
            <li>Raki</li>
            <li>Filtr przeciwsłoneczny</li>
            <li>Woda</li>
            <li>Pożywne przekąski</li>
            <li>Kijki/Czekany</li>
            <li>Ciepła, nieprzemakalna odzież</li>
        </ul>
        </>
     );
}
 
export default Equipment;