import React from "react";
import CardCategories from "../Components/CardCategories";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";
import { useTourState } from "../Context/GlobalContext";



const Home = () => {
const {state} = useTourState();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Crear lógica para manejar la búsqueda
  };

  return (
    <main className="container-main">
      {/* CONTAINER SEARCH */}
      <section className="container-search">
        <p>¿Cuál va a ser tu próxima aventura?</p>
        <Form className={"form"} // aca pasamos la primer props que esta en el componente form
          fields={[
            {  type: "text", placeholder: "¿A dónde vamos?" },
            { type: "date" },
          ]}
          buttonText="Buscar" // esta es la segunda props que marca que dira el boton
          onSubmit={handleSearchSubmit}// tercera props
          inputClassName={"input-search"}
          />
      </section>

      {/* CONTANINER TOURS */}

      {/* DIV DE EXPERIENCIAS DESTINOS DEBES SER ALEATORIOS */}
      <section className="container-categories">
        <p className="exp">Experiencias</p>
        <p className="subtitle-exp">Los destinos mas populares de Argentina, desde lugares historicos hasta maravillas naturales</p>
       <div className="card-categories">
        {state.categories.map((item,index)=>{
          return <CardCategories key={index} item={item}></CardCategories>
        })}
        
      </div>
    </section>
  
  
  {/* DIV DE OFERTAS ESPECIALES, ESTO DEBE SER RANDOM */}
      <section className="container-offers">
        <p className="offers">Ofertas Especiales</p>
       <p className="subtitle-offers">Consulta nuestras ofertas especiales y descuentos</p>
        <div className="container-card-tour">
          {state.tour.map((item,index)=>{
            return <CardTour key={index} item={item}></CardTour>
          })}
        </div>
    </section>
    
    
    </main>
  );
};

export default Home;
