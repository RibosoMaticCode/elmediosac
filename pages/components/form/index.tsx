import { useState } from 'react';

export default function FormSubmit(){
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [detalles, setDetalles] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      nombre,
      dni,
      correo,
      detalles,
    };
    fetch("/enviar_correo.php", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="row mb-2">
        <div className="form-group col-md-6">
          <label htmlFor="dni">DNI Documento</label>
          <input
            type="text"
            className="form-control"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="detalles">Detalles</label>
        <textarea
          className="form-control"
          id="detalles"
          rows={4}
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
}
