import React, { useState, useRef } from "react";
import CardCategories from "../Components/CardCategories";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";
import { useTourState } from "../Context/GlobalContext";
import Button from "../Components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
const {state, dispatch} = useTourState();
const [selectedCategory, setSelectedCategory] = useState(null);
const offersRef = useRef(null); // referencia para ir a la sección de ofertas especiales



  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Crear lógica para manejar la búsqueda
  };

  /* Filtra los tours según la categoría seleccionada ,si selectedCategory tiene un valor (que se da cuando se hace click en la funcion onClick de cardCategories)
  entonces ahi se ejecute el filter, que crea un nuevo array con los tour que van a tener el mismo id que selectCategory o sea la card a la cual
  se le hizo click, ese nuevo array se guarda en filtered, si selectCategory no cumple con lo del click y la coincidencia de id, guarda todos los tour */
  
  const filteredTours = selectedCategory
    ? state.tour.filter((tour) => tour.categoria.id === selectedCategory)
    : state.tour;
const displayedTours = selectedCategory ? filteredTours : filteredTours.slice(0, 10);

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
          {state.categories.map((item, index) => (
            <CardCategories
              key={index}
              item={item}
              onClick={() => {
                setSelectedCategory(item.id); 
                // Realiza el scroll hacia la sección de "Ofertas Especiales"
                if (offersRef.current) {
                  offersRef.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          ))}
        </div>
    </section>
  
  
  {/* DIV DE OFERTAS ESPECIALES, ESTO DEBE SER RANDOM */}
      <section className="container-offers" ref={offersRef}>{/* Añadimos la referencia */}
        <p className="offers">Ofertas Especiales</p>
       <p className="subtitle-offers">Consulta nuestras ofertas especiales y descuentos</p>
       <div className="container-card-tour">
          {displayedTours.map((item, index) => (
            <CardTour key={index} item={item} >
              <Button className={"btn-fav"} onClick={()=>{
                alert("El tour se agregó a favoritos")
                dispatch({type:"ADD_FAVORITES", payload:item})
              }}>
                <FontAwesomeIcon icon={faStar} />
              </Button>
            </CardTour>
          ))}
        </div>
    </section>
    
    
    </main>
  );
};

export default Home;
