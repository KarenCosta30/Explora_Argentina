import React from "react";
import CardCategories from "../Components/CardCategories";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";


const Home = () => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Crear lógica para manejar la búsqueda
  };

  return (
    <>
      {/* CONTAINER SEARCH */}
      <div className="container-search">
        <p>Cuál va a ser tu próxima aventura?</p>
        <Form // aca pasamos la primer props que esta en el componente form
          fields={[
            { type: "text", placeholder: "¿A dónde vamos?" },
            { type: "text", placeholder: "¿Cuándo?" },
          ]}
          buttonText="Buscar" // esta es la segunda props que marca que dira el boton
          onSubmit={handleSearchSubmit} // tercera props

        />

      </div>

      {/* CONTANINER TOURS */}

      {/* DIV DE EXPERIENCIAS DESTINOS DEBES SER ALEATORIOS */}
      {/* <div className="container-categories">
        <h3 className="exp">Experiencias</h3>
        <p>Los destinos mas populares de Argentina, desde lugares historicos hasta maravillas naturales</p>
        <br />
        <img className="line1" src="/img/Line 1.png" alt="" />
      </div>
      <br />
      <div className="card-categories">
        <CardCategories/>
        <CardCategories/>
        <CardCategories/>
      </div> */}





      {/* DIV DE OFERTAS ESPECIALES, ESTO DEBE SER RANDOM */}
      <div className="container-offers">
        <h3 className="offers">Ofertas especiales</h3>
        <br />
     
        <p className="offers">Consulta nuestras ofertas especiales y descuentos</p>
        <br />
        </div>
        <div className="contairner-card-tour">
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
        </div>

      
    </>
  );
};

export default Home;
