import React from 'react';
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Navbar, Footer, ReviewSection } from './components';



function App() {

 
  
  return (
    <Router>
      <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path ="/" exact component={Home} />
        </Switch>
        <ReviewSection />
        <Footer /> 
     </Router>
  );
}

export default App;
