import React, { useState, useRef } from 'react';


export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const flash = '';

  const submit = () => {
    // attempt login!
    // on success, set token to local storage, set a flash message
    // on failure, set a flash message with the error
  };

  return (
    <div className='login'>
      <div className='login-inputs'>
        username <input ref={usernameRef} type="text" /> <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>
          Submit
        </button>

        <div className='flash'>{flash}</div>
      </div>
    </div>
  );
}
