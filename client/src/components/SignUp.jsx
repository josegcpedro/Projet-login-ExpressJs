import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = React.useState(''); // Estado para armazenar o nome
    const [email, setEmail] = React.useState(''); // Estado para armazenar o email
    const [password, setPassword] = React.useState(''); // Estado para armazenar a senha
    const navigate = useNavigate(); // Hook para navegação programática

    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result); // Loga o resultado no console
                navigate('/login'); // Navega para a página de login após registro bem-sucedido
            })
            .catch(err => {
                return; // Loga o erro no console em caso de falha
            });
    }

    return (
        <div className='vh-100 bg-light d-flex flex-column justify-content-center'>
            <div className="d-flex justify-content-center align-items-center">
                <form className="w-50 p-4 bg-white shadow rounded" onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Register</h1>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            name='name'
                            onChange={(e) => setName(e.target.value)} // Atualiza o estado do nome
                        />
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
            <div className="text-center mt-3">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-secondary">Login</Link> {/* Link para a página de login */}
            </div>
        </div>
    );
}

export default SignUp; // Exporta o componente SignUp como padrão