import React, { useState } from 'react';
import './style.css';

function BoatForm() {
  const [formData, setFormData] = useState({
    proprietario: '',
    nomeEmbarcacao: '',
    arrais: '',
    imagem: '',
    capacidade: 0,
    decription: '',
  });
  const [mensagem, setMensagem] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateBoat = async (e) => {
    e.preventDefault(); // Evitar que o formulário seja enviado

    const boatData = formData;

    try {
      const response = await fetch("http://localhost:8080/pesqueiros/embarcacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boatData),
      });

      console.log(response.status);
      if (!response.ok) {
        throw new Error("Erro ao cadastrar a embarcação.");
      }

      const createdBoat = await response.json();
      setMensagem(`Embarcação cadastrada com sucesso! ID: ${createdBoat.id}`);
    } catch (error) {
      setMensagem(
        `${error} Erro ao cadastrar a embarcação. Verifique os dados informados.`
      );
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Cadastre seu Barco!</h3>
      </div>
      <div className="form-container">
        <div className="form-header">
          <p>Formulário</p>
        </div>
        <div className="form-body">
          <h1 className="form-title">Diga sobre seu barco!</h1>
          <p>Descreva as informações do seu barco</p>
          <form onSubmit={handleCreateBoat}>
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
              <label htmlFor="decription">Descrição <span className="required-field">*</span></label>
              <input
                type="text"
                name="decription"
                id="decription"
                className="input-field"
                placeholder="Digite Uma descrição sobre seu Barco "
                required
                value={formData.decription}
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
              <input type="submit" value="Enviar" className="btn-submit" />
            </div>
          </form>
          {mensagem && <p>{mensagem}</p>}
        </div>
      </div>
    </div>
  );
}

export default BoatForm;
