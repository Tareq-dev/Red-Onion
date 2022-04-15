import React from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';
import NavPage from '../Navbar/NavPage';

const Main = () => {
     return (
          <div>
              <NavPage />
              <Header />
              <Food />
          </div>
     );
};

export default Main;