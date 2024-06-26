import React, { useState } from 'react';
import Button from '../Button';
import User from '../../assets/public/user.svg';
import { useNavigate } from 'react-router-dom';
import './style.css';

const BoatDetails = ({ boat, goBack }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Estado para controlar a visibilidade da modal


  const handleDelete = () => {
    // Lógica para excluir o barco aqui (simulado para este exemplo)
    setShowModal(true); // Mostra a modal ao clicar no botão de exclusão
  };

  const closeModal = () => {
    setShowModal(false); // Função para fechar a modal
  };

  return (
    <div className="boat-details p-4">
      <button className="mb-4 w-24 bg-dark-blue text-white py-2 rounded-md" onClick={goBack}>Voltar</button>
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H7EJVoY8hZaI6l0BtlUyMye779BrpHTqlg&usqp=CAU" alt="" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-2xl font-bold mb-4">boat.nomeEmbarcacao</h1>
          <p className="mb-2"><strong>Proprietário:</strong> <span className="font-bold"> boat.proprietario</span></p>
          <p className="mb-2"><strong>Capacidade:</strong> <span className="font-bold">boat.capacidade</span></p>
          <p className="mb-4"><strong>Número da Arrais:</strong> <span className="font-bold">boat.arrais</span></p>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={handleDelete}
              className="w-full bg-red-500 text-white py-2 rounded-md"
            >
              Excluir Barco
            </button>
            <button 
              onClick={() => {navigate('/BoatForm') }}
              className="w-full bg-dark-blue text-white py-2 rounded-md"
            >
              Editar
            </button>
            <button 
              onClick={() => {navigate('/Calendar') }}
              className="w-full bg-dark-blue text-white py-2 rounded-md"
            >
              Verificar Agendamento
              </button>
            
            
          </div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-md max-w-md">
            <h2 className="text-xl font-bold mb-4">Barco Excluído</h2>
            <p>O barco foi excluído com sucesso.</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-2"
                onClick={closeModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoatDetails;
