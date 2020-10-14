import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <Header/>
      </header>
      <main>
        <aside>
          <Navigation/>
        </aside>
        <section>
          <Main/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
