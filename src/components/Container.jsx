import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import './Container.less';


export function Container(props) {
  const onLogout = () => {
    // kill the token!
  };

  return (
    <div className='container'>
      <nav>
        <span>

        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>

      </main>
    </div>
  );
}

export default Container;
