import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

function ClienteDetalhes() {
    const { id } = useParams();
    const [cliente, setCliente] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/pesqueiros/clientes/${id}`)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.message || 'Falha ao buscar cliente');
                    });
                }
                return response.json();
            })
            .then(data => {
                setCliente(data);
            })
            .catch((error) => {
                console.error('Erro:', error);
                setErrorMessage(error.message);
            });
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8080/pesqueiros/clientes/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || 'Falha ao deletar cliente');
                });
            }
            navigate('/');
        })
        .catch((error) => {
            console.error('Erro:', error);
            setErrorMessage(error.message);
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = {
            nome: e.target.nome.value,
            cpf: e.target.cpf.value,
            email: e.target.email.value,
            senha: e.target.senha.value,
            nrTelefone: e.target.nrTelefone.value
        };
        fetch(`http://localhost:8080/pesqueiros/clientes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || 'Falha ao atualizar cliente');
                });
            }
            navigate('/');
        })
        .catch((error) => {
            console.error('Erro:', error);
            setErrorMessage(error.message);
        });
    };

    if (!cliente) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='background'>
            <div className="wrapper">
                <div className="form-box">
                    <form onSubmit={handleUpdate}>
                        <h1>Detalhes do Cliente</h1>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="input-box">
                            <input type="text" name="nome" defaultValue={cliente.nome} required />
                        </div>
                        <div className="input-box">
                            <input type="text" name="cpf" defaultValue={cliente.cpf} required />
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" defaultValue={cliente.email} required />
                        </div>
                        <div className="input-box">
                            <input type="password" name="senha" defaultValue={cliente.senha} required />
                        </div>
                        <div className="input-box">
                            <input type="text" name="nrTelefone" defaultValue={cliente.nrTelefone} required />
                        </div>
                        <button type="submit">Atualizar</button>
                        <button type="button" onClick={handleDelete}>Deletar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClienteDetalhes;
