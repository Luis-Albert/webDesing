import React, { useState } from "react";

const Section = () => {
  const [image, setImage] = useState({
    nomImagen: "",
    descripcion: "",
  });

  const { nomImagen, descripcion } = image;

  const onChange = (e) => {
    setImage({
      ...image,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitImage = (e) => {
    e.preventDefault();
    console.log("enviando imagen");
  };

  return (
    <div className="card">
      <div className="card-title">
        <h2>CardAddImage</h2>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmitImage} className="formulario">
          <div className="form-input">
            <label htmlFor="image" className="cardImage">
              <i className="fas fa-image"></i>
            </label>
            <input
              type="file"
              name="nomImagen"
              id="image"
              className="image"
              onChange={onChange}
            />
          </div>
          <textarea
            name="descripcion"
            id="descripcion"
            placeholder="Ingrese su descripcion"
            onChange={onChange}
          ></textarea>
          <button className="btn btn-primary">Guardar foto</button>
        </form>
      </div>
    </div>
  );
};

export default Section;
