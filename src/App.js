import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Layout from './components/Layout';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Navbar />
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
