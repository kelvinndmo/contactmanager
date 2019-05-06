import React from 'react';
import PropTypes from 'prop-types';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
//Route - holds all of our routes
//Switch - Have a default i.e not found page
import Header from './components/layout/Header';
import Addcontact from './components/contacts/Addcontact';
import About from './components/pages/About';
import Test from './components/test/test';
import EditContact from './components/contacts/EditContact';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header branding='Contact Manager' />
          <Switch>
            <Route exact path='/' component={Contacts} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact/add' component={Addcontact} />
            <Route exact path='/contact/edit/:id' component={EditContact} />
            <Route exact path='/test' component={Test} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

Header.defaultProps = {
  branding: 'My Contact APP'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default App;
