import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EditBoat = () => {
  const { state } = useLocation();
  const boat = state.boat;

  const [formData, setFormData] = useState({
    proprietario: boat.proprietario || '',
    nomeEmbarcacao: boat.nomeEmbarcacao || '',
    arrais: boat.arrais || '',
    imagem: boat.imagem || '',
    capacidade: boat.capacidade || 0,
    decription: boat.decription || '',
  });

  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (!boat) return;

    setFormData({
      proprietario: boat.proprietario || '',
      nomeEmbarcacao: boat.nomeEmbarcacao || '',
      arrais: boat.arrais || '',
      imagem: boat.imagem || '',
      capacidade: boat.capacidade || 0,
      decription: boat.decription || '',
    });
  }, [boat]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdateBoat = async (e) => {
    e.preventDefault();

    const boatData = formData;

    try {
      const response = await fetch(`http://localhost:8080/pesqueiros/embarcacoes/${boat.id}`, {
        method: 'PUT', // ou PATCH dependendo da sua API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(boatData),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar a embarcação.');
      }

      setMensagem('Embarcação atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar a embarcação:', error);
      setMensagem('Erro ao atualizar a embarcação. Verifique os dados informados.');
    }
  };

  if (!boat) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h3>Editar Barco</h3>
      </div>
      <div className="form-container">
        <div className="form-header">
          <p>Formulário de Edição</p>
        </div>
        <div className="form-body">
          <h1 className="form-title">Atualize as informações do seu barco</h1>
          <form onSubmit={handleUpdateBoat}>
            <div className="box-input">
              <label htmlFor="proprietario">Proprietário <span className="required-field">*</span></label>
              <input
                type="text"
                name="proprietario"
                id="proprietario"
                className="input-field"
                placeholder="Digite o seu nome"
                minLength="1"
                maxLength="30"
                required
                value={formData.proprietario}
                onChange={handleInputChange}
              />
            </div>
            <div className="box-input">
              <label htmlFor="nomeEmbarcacao">Nome da Embarcação <span className="required-field">*</span></label>
              <input
                type="text"
                name="nomeEmbarcacao"
                id="nomeEmbarcacao"
                className="input-field"
                placeholder="Digite o Nome do Barco"
                required
                value={formData.nomeEmbarcacao}
                onChange={handleInputChange}
              />
            </div>
            <div className="box-input">
              <label htmlFor="arrais">Número da Arrais <span className="required-field">*</span></label>
              <input
                type="text"
                name="arrais"
                id="arrais"
                className="input-field"
                placeholder="Digite o Número da sua Arrais"
                required
                value={formData.arrais}
                onChange={handleInputChange}
              />
            </div>
            <div className="box-input">
              <label htmlFor="imagem">Imagem do Barco <span className="required-field">*</span></label>
              <input
                type="url"
                name="imagem"
                id="imagem"
                className="input-field"
                placeholder="Digite a URL da Imagem do Barco"
                required
                value={formData.imagem}
                onChange={handleInputChange}
              />
            </div>
            <div className="box-input">
              <label htmlFor="capacidade">Capacidade <span className="required-field">*</span></label>
              <input
                type="number"
                name="capacidade"
                id="capacidade"
                className="input-field"
                placeholder="Digite a Quantidade de Pessoas que cabem no seu Barco"
                required
                value={formData.capacidade}
                onChange={handleInputChange}
              />
            </div>
            <div className="box-input">
              <input type="submit" value="Atualizar" className="btn-submit" />
            </div>
          </form>
          {mensagem && <p>{mensagem}</p>}
        </div>
      </div>
    </div>
  );
};

export default EditBoat;
