import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const BoatDetails = ({ boat, goBack }) => {
  const navigate = useNavigate();

  const phoneNumber = "5511999999999";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20tenho%20interesse%20no%20${boat.nomeEmbarcacao}`;

  // Função para excluir a embarcação
  const deleteBoat = async () => {
    const confirmDeletion = window.confirm(`Tem certeza que deseja excluir a embarcação ${boat.nomeEmbarcacao}?`);
    if (confirmDeletion) {
      try {
        const response = await fetch(`http://localhost:8080/pesqueiros/embarcacoes/${boat.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Embarcação excluída com sucesso!');
          navigate('/'); // Navega para a página inicial ou outra página após a exclusão
        } else {
          alert('Falha ao excluir a embarcação.');
        }
      } catch (error) {
        console.error('Erro ao excluir a embarcação:', error);
        alert('Erro ao excluir a embarcação. Tente novamente mais tarde.');
      }
    }
  };

  const navigateToEdit = () => {
    navigate(`/boats/${boat.id}/edit`, { state: { boat } });
  };

  return (
    <div className="boat-details p-4">
      <button className="mb-4 w-24 bg-dark-blue text-white py-2 rounded-md" onClick={goBack}>Voltar</button>
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img className="w-full h-auto rounded-md" src={boat.imagem} alt={boat.nomeEmbarcacao} />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-2xl font-bold mb-4">{boat.nomeEmbarcacao}</h1>
          <p className="mb-2"><strong>Proprietário:</strong> <span className="font-bold">{boat.proprietario}</span></p>
          <p className="mb-2"><strong>Capacidade:</strong> <span className="font-bold">{boat.capacidade}</span></p>
          <p className="mb-4"><strong>Número da Arrais:</strong> <span className="font-bold">{boat.arrais}</span></p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => { navigate('/Calendar') }}
              className="w-full bg-dark-blue text-white py-2 rounded-md"
            >
              Agendamento
            </button>
            <button
              onClick={() => { navigate('/Avaliacao') }}
              className="w-full bg-dark-blue text-white py-2 rounded-md"
            >
              Avaliação
            </button>
            <button
              onClick={() => { window.open(whatsappLink, '_blank') }}
              className="w-full bg-dark-blue text-white py-2 rounded-md"
            >
              Entrar em contato
            </button>
            <button
              className='w-full btn_delete text-white py-2 rounded-md'
              onClick={deleteBoat}
            >
              Excluir barco
            </button>
            {/* Botão para editar a embarcação */}
            <button
              onClick={navigateToEdit}
              className="w-full bg-yellow-500 text-white py-2 rounded-md mt-4"
            >
              Editar barco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatDetails;
