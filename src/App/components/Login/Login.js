import React from 'react'
import {  useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  function handleLogin() {
    navigate("/appointment")
  }
  
  return (
    <div></div>
  )
}

export default Login