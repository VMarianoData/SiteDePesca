import React from 'react';
import './style.css';

const BoatCard = ({ boat, onClick }) => {

  return (
    <div onClick={() => onClick(boat)} className="boat-card">
      <h3>{boat.nomeEmbarcacao}</h3>
      <p>Proprietário: {boat.proprietario}</p>
      <p>Capacidade: {boat.capacidade}</p>
      <p>Número da Arrais: {boat.arrais}</p>
      <img src={boat.imagem} alt={boat.nomeEmbarcacao} />
    </div>
  );
};

export default BoatCard;