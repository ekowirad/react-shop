import React from 'react';
import './sass/main.scss'
import Header from './components/header.jsx'
import RouteApp from './routes/route-app.jsx'

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <RouteApp></RouteApp>
      </div>
    </div>
  );
}

export default App;
