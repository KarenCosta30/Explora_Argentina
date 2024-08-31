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
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchText, setSearchText] = useState("¿A dónde vamos?"); //---> Cambio de texto en el campo de selección
  const [offersText, setOffersText] = useState("Ofertas Especiales"); //---> Cambio de texto en la sección de ofertas
  const offersRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
<<<<<<< Updated upstream

=======
  //---> Función para obtener las ubicaciones únicas de los tours
>>>>>>> Stashed changes
  const getUniqueLocations = (tours) => {
    const locations = tours.map((tour) => tour.ubicacion);
    const uniqueLocations = [...new Set(locations)];
    return uniqueLocations.map((location) => ({
      value: location.toLowerCase().replace(/\s+/g, "-"),
      label: location,
    }));
  };
<<<<<<< Updated upstream

=======
  //---> Obtiene las ubicaciones únicas de los tours
>>>>>>> Stashed changes
  const locationOptions = getUniqueLocations(state.tour);

  useEffect(() => {
    const activeUser = localStorage.getItem("userActive") === "true";
    if (activeUser) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
    }
  }, [dispatch]);

  //---> Función para manejar la búsqueda de tours
  const handleSearchSubmit = (e) => {
    e.preventDefault();
<<<<<<< Updated upstream
    // Crear lógica para manejar la búsqueda
  };
  
  //-- Filtrar tours según la categoría y la ubicación seleccionadas
  const filteredTours = state.tour.filter((tour) => {
    return (
      (!selectedCategory || tour.categoria.id === selectedCategory) &&
      (!selectedLocation || tour.ubicacion.toLowerCase().replace(/\s+/g, "-") === selectedLocation)
    );
  });
=======

    //-- Actualiza el texto del campo de selección
    if (selectedLocation) {
      setSearchText("Destino seleccionado");
      setOffersText("Destinos Seleccionados");
    }

    //-- Desplazar hacia la sección de ofertas especiales
    if (offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //-- Filtra los tours por categoría si se ha seleccionado una
  const filteredByCategory = selectedCategory
    ? state.tour.filter((tour) => tour.categoria.id === selectedCategory)
    : state.tour;

  //-- Filtra los tours por ubicación si se ha seleccionado una
  const filteredByLocation = selectedLocation
    ? state.tour.filter(
        (tour) => tour.ubicacion.toLowerCase().replace(/\s+/g, "-") === selectedLocation
      )
    : state.tour;

  //-- Muestra los tours basados en el filtro activo (ubicación, categoría o ninguno)
  const displayedTours = selectedLocation
    ? filteredByLocation
    : selectedCategory
    ? filteredByCategory
    : state.tour.slice(0, 10);
  
    //-- Función para manejar el clic en una categoría de tours.
  const handleCategoryClick = (categoryId) => {
      //-- Establece la categoría seleccionada.
      setSelectedCategory(categoryId);

      //--Restablece el estado de ubicación y fecha
    setSelectedLocation("");
    setSelectedDate(null);
    setSearchText("¿A dónde vamos?");
    setOffersText("Ofertas Especiales");
>>>>>>> Stashed changes

     //-- Desplaza hacia la sección de ofertas especiales
      if (offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //-- Función para manejar el cambio de ubicación.
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    if (e.target.value) {
      setSearchText("Destino seleccionado");
    } else {
      setSearchText("¿A dónde vamos?");
    }
  };

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
              value: selectedLocation, //---Actualiza el valor seleccionado
              onChange: handleLocationChange,
              options: [
                { value: "", label: searchText },
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
<<<<<<< Updated upstream
=======
      {/* CONTAINER CATEGORIES */}
>>>>>>> Stashed changes
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
              onClick={() => handleCategoryClick(item.id)} //---Maneja el clic en una categoría
            />
          ))}
        </div>
        </section>

      <section className="container-offers" ref={offersRef}>
        <p className="offers">{offersText}</p>
        {/* --Cambia el texto a destinos seleccionados */}
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