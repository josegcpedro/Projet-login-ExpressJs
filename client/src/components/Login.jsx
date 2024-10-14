import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result); // Loga o resultado no console
        if (result.data === 'Login success') {
          Navigate('/home'); // Navega para a página principal após login bem-sucedido
        }
      })
      .catch(err => {
        console.log(err); // Loga o erro no console em caso de falha
      });
  }

  return (
    <div className='vh-100 bg-light d-flex flex-column justify-content-center'>
      <div className="d-flex justify-content-center align-items-center">
        <form className="w-50 p-4 bg-white shadow rounded" onSubmit={handleSubmit}>
          <h1 className="text-center mb-4">Login</h1>
          <div className="form-group mb-3">
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              name='email'
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name='password'
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
            />
          </div>
          <div className="d-grid gap-1">
            <button type="submit" className="btn btn-primary mb-2">Register</button> {/* Botão de envio do formulário */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login; // Exporta o componente Login como padrão