import React, {useState} from 'react';
import {Prompt} from 'react-router-dom';

const Contact = () => {

    const [state, setState] = useState({
        firstName: "",
        title: "",
        email: "",
        text: ""
    });
    const [isEmpty,setIsEmpty] = useState(false);

    
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
        setIsEmpty(true);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const {firstName, title, email, text} = state;
        if(firstName && title && email && text){
            alert("Wiadomość została poprawnie wysłana")
            setState({
                firstName: "",
                title: "",
                email: "",
                text: "",
            })
        }
        else {
            alert("Uzupełnij wszystkie pola")
        }
    }

        const {firstName, title, email, text} = state;

        return (  
            <>
            <form onSubmit={handleSubmit}>
                <label>Imię</label>
                <input name="firstName" type="text" value={firstName} onChange={handleChange}/>
                <label>Email</label>
                <input name="email" type="email" value={email} onChange={handleChange}/>
                <label>Tytuł</label>
                <input name="title" type="text" value={title} onChange={handleChange}/>
                <label>Wiadomość</label>
                <textarea name="text" rows="10" value={text} onChange={handleChange}></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt
            when={isEmpty}
            message="Nie dokończyłeś wysyłania formularza. Czy na pewno chcesz opuścić stronę?"
            />
            </>
        );

}
 
export default Contact;