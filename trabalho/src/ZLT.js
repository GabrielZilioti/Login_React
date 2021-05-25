import React, { useState } from "react";
import './ZLT.css';

function ZLT() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <>
    <div className="ZLT">
      
      <img src="w98.png" className="img-fluid"/>

      <form>
        <div>
        <h1 className="h3 mb-3 fw-bold text-white">Nome:</h1>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Carl Johnson"
          />
        </div>
        <div>
        <h1 className="h3 mb-3 fw-bold text-white">Telefone:</h1>
          <input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="14 9999-9999"
          />
        </div>
      </form>
      <div className="texto_parcial">
        <div className="texto">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default ZLT;
