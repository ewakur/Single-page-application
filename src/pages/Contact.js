import React from 'react'
import {Prompt} from 'react-router-dom';

class Contact extends React.Component {

    state = {
        firstName: "",
        title: "",
        email: "",
        text: "",
        isEmpty: false
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            isEmpty: true
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const {firstName, title, email, text} = this.state;
        if(firstName && title && email && text){
            alert("Wiadomość została poprawnie wysłana")
            this.setState({
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
    render(){
        const {firstName, title, email, text, isEmpty} = this.state;
        return (  
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Imię</label>
                <input name="firstName" type="text" value={firstName} onChange={this.handleChange}/>
                <label>Email</label>
                <input name="email" type="email" value={email} onChange={this.handleChange}/>
                <label>Tytuł</label>
                <input name="title" type="text" value={title} onChange={this.handleChange}/>
                <label>Wiadomość</label>
                <textarea name="text" rows="10" value={text} onChange={this.handleChange}></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt
            when={isEmpty}
            message="Nie dokończyłeś wysyłania formularza. Czy na pewno chcesz opuścić stronę?"
            />
            </>
        );
    }
}
 
export default Contact;