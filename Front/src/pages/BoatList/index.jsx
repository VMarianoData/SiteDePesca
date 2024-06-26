import React, { useState, useEffect } from 'react';
import './BoatList.css';
import BoatCard from '../../components/BoatCard';
import BoatDetails from '../../components/BoatDetails';

const BoatList = () => {
  const [boats, setBoats] = useState([
    {
      id: 1,
      nomeEmbarcacao: "Barco 1",
      proprietario: "João",
      capacidade: 5,
      arrais: "123456",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H7EJVoY8hZaI6l0BtlUyMye779BrpHTqlg&usqp=CAU"
    },
    {
      id: 2,
      nomeEmbarcacao: "Barco 2",
      proprietario: "Maria",
      capacidade: 8,
      arrais: "654321",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcoL4R_0zmkF3gMlhx-35r4-qbxq0-wNN_Q&usqp=CAU"
    },
    {
      id: 3,
      nomeEmbarcacao: "Barco 3",
      proprietario: "Pedro",
      capacidade: 10,
      arrais: "987654",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GGxoZ4emAturtOBMw1ULQxLRCnWd7i8lVA&usqp=CAU"
    }
  ]);
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/pesqueiros/embarcacoes')
      .then(response => response.json())
      .then(data => setBoats(data))
      .catch(error => console.error('Error fetching boats:', error));
  }, []);

  // Função para lidar com a alteração do termo de pesquisa
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Função para lidar com o clique no card do barco
  const handleBoatClick = (boat) => {
    setSelectedBoat(boat);
  };

  // Filtrar os barcos com base no termo de pesquisa
  const filteredBoats = boats.filter(boat =>
    boat.nomeEmbarcacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {selectedBoat ? (
        <BoatDetails boat={selectedBoat} goBack={() => setSelectedBoat(null)} />
      ) : (
        <>
          <h1>Lista de Barcos</h1>

          {/* Campo de pesquisa */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquisar barco..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Lista de barcos */}
          <div id="boats-container" className="boats-container">
            {filteredBoats.map(boat => (
              <BoatCard key={boat.id} boat={boat} onClick={() => handleBoatClick(boat)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BoatList;
