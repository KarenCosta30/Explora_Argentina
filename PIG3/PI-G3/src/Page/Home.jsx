import React, { useState, useRef, useEffect } from "react";
import CardCategories from "../Components/CardCategories";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";
import { useTourState } from "../Context/GlobalContext";
import Button from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

const Home = () => {
  const { state, dispatch } = useTourState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  // ------------------- Agregar estado para la ubicación seleccionada -------------------
  const [selectedLocation, setSelectedLocation] = useState("");
  const offersRef = useRef(null); // referencia para ir a la sección de ofertas especiales
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getUniqueLocations = (tours) => {
    const locations = tours.map((tour) => tour.ubicacion);
    const uniqueLocations = [...new Set(locations)];
    return uniqueLocations.map((location) => ({
      value: location.toLowerCase().replace(/\s+/g, "-"),
      label: location,
    }));
  };

  const locationOptions = getUniqueLocations(state.tour);

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true";
    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
    }
  }, [dispatch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Crear lógica para manejar la búsqueda
  };
  
  //-- Filtrar tours según la categoría y la ubicación seleccionadas
  const filteredTours = state.tour.filter((tour) => {
    return (
      (!selectedCategory || tour.categoria.id === selectedCategory) &&
      (!selectedLocation || tour.ubicacion.toLowerCase().replace(/\s+/g, "-") === selectedLocation)
    );
  });

  // Limitar el número de tours mostrados si no hay categoría seleccionada
  const displayedTours = selectedCategory ? filteredTours : filteredTours.slice(0, 10);

  return (
    <main className="container-main">
      {/* CONTAINER SEARCH */}
      <section className="container-search">
        <p>¿Cuál va a ser tu próxima aventura?</p>
        <Form
          className={"form"}
          fields={[
            {
              type: "select",
              value: selectedLocation, //-- Asigna el valor seleccionado
              onChange: (e) => setSelectedLocation(e.target.value), //-- Actualiza la ubicación seleccionada
              options: [
                { value: "", label: "¿A dónde vamos?" },
                ...locationOptions,
              ],
            },
            {
              type: "custom",
              render: () => (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecciona una fecha"
                  showTimeSelect={false}
                  className="date"
                  minDate={new Date()}
                />
              ),
            },
          ]}
          buttonText="Buscar"
          onSubmit={handleSearchSubmit}
          inputClassName={"input-select"}
          />
      </section>
      <section className="container-categories">
        <p className="exp">Experiencias</p>
        <p className="subtitle-exp">
          Los destinos más populares de Argentina, desde lugares históricos
          hasta maravillas naturales.
        </p>
        <div className="card-categories">
          {state.categories.map((item, index) => (
            <CardCategories
              key={index}
              item={item}
              onClick={() => {
                setSelectedCategory(item.id);
                if (offersRef.current) {
                  offersRef.current.scrollIntoView({ behavior: "smooth" }); 
                }
              }}
            />
          ))}
        </div>
        </section>

      <section className="container-offers" ref={offersRef}>
        <p className="offers">Ofertas Especiales</p>
        <p className="subtitle-offers">
          Consulta nuestras ofertas especiales y descuentos.
        </p>
        <div className="container-card-tour">
          {displayedTours.map((item, index) => (
            <CardTour key={index} item={item}>
              {state.userActive ? (
                <Button
                className={"btn-fav"}
                onClick={() => {
                  alert("El tour se agregó a favoritos");
                  dispatch({ type: "ADD_FAVORITES", payload: item });
                }}
              >
                <FontAwesomeIcon icon={faStar} />
                </Button>
              ) : null}
            </CardTour>
          ))}
        </div>
        </section>
    </main>
  );
};

export default Home;
