import React from 'react';
import Header from './Header';

/**
 * This component is just a container for the Header and
 * any children provided by the Router.
 */
const App = props => (
  <div className="container">
    <Header />
    {props.children}
  </div>
);

export default App;