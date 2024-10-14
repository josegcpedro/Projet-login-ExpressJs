import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                Navigate('/login'); 
            })
            .catch(err => {
                console.log(err);
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
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-1">
                        <button type="submit" className="btn btn-primary mb-2">Register</button>
                    </div>
                </form>
            </div>
            <div className="text-center mt-3">
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-secondary">Login</Link>
            </div>
        </div>
    );
}

export default SignUp;