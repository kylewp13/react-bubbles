import React, { useState } from "react";
import axiosWithAuth from '../utils/index'

const Login = (props) => {
  console.log(props)
  const [login, setLogin] = useState({ 
    username: 'Lambda School', 
    password: 'i<3Lambd4' 
  })

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', login)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/BubblePage')
      })
      .catch(err => console.error(err.response))

  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>UserName: </label>
        <input 
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
            onChange={handleChange}
        />
        <label htmlFor='password'>Password: </label>
        <input 
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
        />
        <button type="submit">Login</button>
        </form> 
    </div>
  );
};

export default Login;