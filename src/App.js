import React from 'react';
import './sass/main.scss'
import Header from './components/header.jsx'
import RouteApp from './routes/route-app.jsx'

function App() {
  return (
    <div>
      <Header />
      <RouteApp></RouteApp>
    </div>
  );
}

export default App;
