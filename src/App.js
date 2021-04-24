import React, { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: ""
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    alert("Los datos son" + datos.nombre + " " + datos.apellido);
  };

  return (
    <>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            onChange={handleInputChange}
            name="nombre"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Apellido"
            className="form-control"
            onChange={handleInputChange}
            name="apellido"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <ul>
        <li>{datos.nombre}</li>
        <li>{datos.apellido}</li>
      </ul>
    </>
  );
};

export default Formulario;
