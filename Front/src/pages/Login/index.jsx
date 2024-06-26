import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function Login() {
    const [action, setAction] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleVerifyCpf = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/pesqueiros/clientes/verificar/${cpf}`)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.message || 'Falha na verificação');
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('CPF encontrado:', data);
                navigate(`/cliente/${data.id}`); // Redirecionar para a página de detalhes do cliente
            })
            .catch((error) => {
                console.error('Erro:', error);
                setErrorMessage(error.message);
            });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const formData = {
            nome: e.target.nome.value,
            cpf: e.target.cpf.value,
            email: e.target.email.value,
            senha: e.target.senha.value,
            nrTelefone: e.target.nrTelefone.value
        };

        fetch('http://localhost:8080/pesqueiros/clientes', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || 'Falha no registro');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            navigate('/login'); // Redirecionar após o sucesso
        })
        .catch((error) => {
            console.error('Erro:', error);
            setErrorMessage(error.message);
        });
    };

    return (
        <div className='background'>
            <div className={`wrapper ${action}`}>
                <div className="form-box login">
                    <form onSubmit={handleVerifyCpf}>
                        <h1>Verificar CPF</h1>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="input-box">
                            <input 
                                type="text" 
                                name="cpf" 
                                placeholder='CPF' 
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                required 
                            />
                            <FaUser className='icon' />
                        </div>
                        <button type="submit">
                            Verificar
                        </button>
                        <div className="register-link">
                            <p>Não tem uma conta? <a href="#" onClick={registerLink}>Registrar</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <form onSubmit={handleRegisterSubmit}>
                        <h1>Registro</h1>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="input-box">
                            <input type="text" name="nome" placeholder='Nome' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" name="cpf" placeholder='CPF' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" placeholder='Email' required />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" name="senha" placeholder='Senha' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" name="nrTelefone" placeholder='Telefone' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Eu aceito os termos e condições</label>
                        </div>
                        <button type="submit">
                            Registrar
                        </button>
                        <div className="register-link">
                            <p>Já tem uma conta? <a href="#" onClick={loginLink}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
