import React, { useState, useEffect } from 'react';


export default function Users(props) {
  const users = [];

  useEffect(() => {
    // no token? Redirect to login screen!
  }, []);

  useEffect(() => {
    // fetch users
  }, []);

  return (
    <div className='users'>
      {users.map(u => (
        <li key={u.id}>
          {u.username}
        </li>
      ))}
    </div>
  );
}
