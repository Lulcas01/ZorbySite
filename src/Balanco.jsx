import React from "react";

const Balanco = ({ handleAdicionarGanho, handleAdicionarGasto }) => {

  return (
    <div className="button-container">
      <button className="Button" onClick={handleAdicionarGanho}>
        Adicionar Ganho
      </button>
      <button className="Button" onClick={handleAdicionarGasto}>
        Adicionar Gasto
      </button>
      <button className="Button">Balanço</button>
      <button className="Button">Metas</button>
    </div>
  );
};

export default Balanco;