import React, { useState, useRef, useEffect } from "react";
import CardCategories from "../Components/CardCategories";
import Form from "../Components/Form";
import CardTour from "../Components/CardTour";
import Button from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useTourState } from "../Context/GlobalContext";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useTourState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchText, setSearchText] = useState("¿A dónde vamos?");
  const [offersText, setOffersText] = useState("Ofertas Especiales");
  const offersRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const userActive = localStorage.getItem("userActive") === "true"; // Verificar si el usuario está activo

  useEffect(() => {
    if (userActive) {
      dispatch({ type: "SET_USER_ACTIVE", payload: true });
      const userId = localStorage.getItem("userId");
      if (userId) {
        axios
          .get(`http://localhost:8081/favoritos/listarFavoritos/${userId}`)
          .then((response) => {
            const favoriteIds = response.data.map((fav) => fav.productoId);
            setFavorites(favoriteIds);
            localStorage.setItem("favorites", JSON.stringify(favoriteIds));
          })
          .catch((error) => console.error("Error fetching favorites", error));
      }
    }
  }, [dispatch, userActive]);

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation) {
      setSearchText("Destino seleccionado");
      setOffersText("Destinos Seleccionados");
    }
    if (offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredByCategory = selectedCategory
    ? state.tour.filter((tour) => tour.categoria.id === selectedCategory)
    : state.tour;

  const filteredByLocation = selectedLocation
    ? state.tour.filter(
        (tour) =>
          tour.ubicacion.toLowerCase().replace(/\s+/g, "-") ===
          selectedLocation
      )
    : state.tour;

  const displayedTours = selectedLocation
    ? filteredByLocation
    : selectedCategory
    ? filteredByCategory
    : state.tour.slice(0, 10);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedLocation("");
    setSelectedDate(null);
    setSearchText("¿A dónde vamos?");
    setOffersText("Ofertas Especiales");
    if (offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    if (e.target.value) {
      setSearchText("Destino seleccionado");
    } else {
      setSearchText("¿A dónde vamos?");
    }
  };

  const handleFavoriteToggle = async (tourId) => {
    const userId = localStorage.getItem("userId");
    const isFavorite = favorites.includes(tourId);

    try {
      if (isFavorite) {
        // Eliminar favorito
        await axios.delete(`http://localhost:8081/favoritos/eliminarFavorito`, {
          data: { usuarioId: userId, productoId: tourId },
        });
        const updatedFavorites = favorites.filter((id) => id !== tourId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        // Agregar favorito
        await axios.post(`http://localhost:8081/favoritos/agregarFavorito`, {
          usuarioId: userId,
          productoId: tourId,
        });
        const updatedFavorites = [...favorites, tourId];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    } catch (error) {
      console.error("Error handling favorites", error);
    }
  };

  return (
    <main className="container-main">
      <section className="container-search">
        <p>¿Cuál va a ser tu próxima aventura?</p>
        <Form
          className={"form"}
          fields={[
            {
              type: "select",
              value: selectedLocation,
              onChange: handleLocationChange,
              options: [{ value: "", label: searchText }, ...locationOptions],
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
              onClick={() => handleCategoryClick(item.id)}
            />
          ))}
        </div>
      </section>

      <section className="container-offers" ref={offersRef}>
        <p className="offers">{offersText}</p>
        <p className="subtitle-offers">
          Consulta nuestras ofertas especiales y descuentos.
        </p>
        <div className="container-card-tour">
          {displayedTours.map((item, index) => (
            <CardTour key={index} item={item}>
              {userActive && (
                <Button
                  className={`btn-fav ${favorites.includes(item.id) ? 'clicked' : ''}`}
                  onClick={() => handleFavoriteToggle(item.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              )}
            </CardTour>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
