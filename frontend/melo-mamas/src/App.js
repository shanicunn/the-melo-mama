import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
      {/* HEADER */}
        <header>
          <Header />
        </header>
      {/* NAVBAR */}
        <nav className="navbar">
          <ul>
            <li>
              <Link className="navLink" to="/">Home</Link>
            </li>
            <li>
              <Link className="navLink" to="/about">About</Link>
            </li>
            <li>
              <Link className="navLink" to="/services">Services</Link>
            </li>
            <li>
              <Link className="navLink" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      {/* MAIN SECTION */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* FOOTER */}
        <footer>
            <Footer />
        </footer>

      </div>
    </Router>
  );
}
