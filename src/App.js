import React from 'react';
import './sass/main.scss'
import Header from './components/header.jsx'
import RouteApp from './routes/route-app.jsx'
import Cart from './components/cart';

function App() {
  return (
    <div>
      <Header />
      <Cart></Cart>
      <div className="main-container">
        <RouteApp></RouteApp>
      </div>
    </div>
  );
}

export default App;
