import React, { useEffect, useState } from 'react';
import { useTourState } from '../Context/GlobalContext';
import Form from "../Components/Form";
import axios from 'axios';
import "../style/registerProductForm.css";
import { provinciasArgentinas } from '../Components/utils/provinciasArgentinas';
import { useNavigate } from 'react-router-dom';


const RegisterProductForm = () => {
    const { state, dispatch } = useTourState();
    const [error, setError] = useState(null);
    const [productData, setProductData] = useState({
        nombre: '',
        descripcion: '',
        descripcionLarga: '',
        itinerario: '',
        imagenUrl: '',
        imagenUrl2: '',
        imagenUrl3: '',
        precio: '',
        ubicacion: '',
        detalleItinerario: '',
        categoria: '',
        latitud: '',
        longitud: '',
        disponible: true,
    });
    const navigate = useNavigate();
    console.log(productData.categoria)


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData({
            ...productData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {nombre, descripcion,descripcionLarga,itinerario,imagenUrl,imagenUrl2,imagenUrl3,precio,ubicacion,detalleItinerario,latitud,longitud } = productData
        const nombreExistente = state.tour.find(product => product.nombre.toLowerCase() === nombre.toLowerCase());
        const parsedLatitud = parseFloat(latitud);
        const parsedLongitud = parseFloat(longitud);
        
        if(!nombre || nombre.length < 3 || nombre.length > 50 || nombreExistente ||  !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) ){
            setError("El campo nombre es incorrecto")  
            return;
        }
        if( descripcion.length < 4 || descripcion.length > 250){
            setError("EL campo de descripción breve de portada es incorrecta")
            return;
        }
        if( descripcionLarga.length < 100 || descripcionLarga.length > 2000){
            setError("El campo de descripción detallada es incorrecta ")
            return;
        }
        if( itinerario.length < 5 || itinerario.length > 500){
            setError("El campo de itinerario es incorrecto ")
            return;
        }
        if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(imagenUrl)) {
            setError("El campo de imagen 1 es incorrecto");
            return;
        }
        if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(imagenUrl2)) {
            setError("El campo de imagen 2 es incorrecto");
            return;
        }
        if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(imagenUrl3)) {
            setError("El campo de imagen 3 es incorrecto");
            return;}

     const precioNum = parseFloat(precio);
        if (isNaN(precioNum) || precioNum <= 0) {
            setError("El campo de  precio es incorrecto");
            return;
        }

        if (!productData.ubicacion) {
            setError("Debe seleccionar una ubicación");
            return;}
       
        if (detalleItinerario.length < 20 || detalleItinerario.length > 2000 ) {
            setError("El campo caracteristica es incorrecto")
            return;
        }

        if (!productData.categoria) {
            setError("Debe seleccionar una categoría");
            return;}

        if (isNaN(parsedLatitud) || parsedLatitud >= 0 || parsedLatitud < -55.05 || parsedLatitud > -22.82 ) {
            setError("El campo latitud es incorrecto")
            return;
        }
        if (isNaN(parsedLongitud) || parsedLongitud < -73.5 || parsedLongitud > -53.6) {
            setError("El campo longitud es incorrecto")
            return;
        }

        setError(null)
      
        axios.post('http://localhost:8081/api/productos/agregarProducto', productData)
        .then((res) => {
            dispatch({ type: "ADD_PRODUCTO", payload: res.data });
            alert("Producto registrado exitosamente!");
            // Restablecer los campos del formulario
            setProductData({
                nombre: '',
                descripcion: '',
                descripcionLarga: '',
                itinerario: '',
                imagenUrl: '',
                imagenUrl2: '',
                imagenUrl3: '',
                precio: '',
                ubicacion: '',
                detalleItinerario: '',
                categoria: '',
                latitud: '',
                longitud: '',
                disponible: true,
            });
        })
        .catch((err) => {
            console.log(err);
            alert('Hubo un error al registrar el producto');
        });
    };

      // useEffect para sincronizar el localStorage con el estado global
      useEffect(() => {
        const userActive = localStorage.getItem("userAdministrator", state.userAdministrator);
        if (!userActive ) {
          navigate('/'); // Redirigir fuera del panel de administración
        }
        
      }, [state.userAdministrator]);

    const fields = [
        { type: 'label', label:"Nombre", className:"create-account-input", name: 'nombre', value: productData.nombre, onChange: handleChange },
        { type: 'label', label:"Descripción",name: 'descripcion', value: productData.descripcion, onChange: handleChange },
        { type: 'label', label:"Descripción Detallada", name: 'descripcionLarga', value: productData.descripcionLarga, onChange: handleChange },
        { type: 'label', label:"Itinerario" , name: 'itinerario', value: productData.itinerario, onChange: handleChange },
        { type: 'label', label:"URL Imagen 1 (debe ser jpg,jpeg, png o gif)", name: 'imagenUrl', value:productData.imagenUrl,  onChange: handleChange},
        { type: 'label', label:"URL Imagen 2 (debe ser jpg,jpeg, png o gif)", name: 'imagenUrl2', value:productData.imagenUrl2, onChange: handleChange },
        { type: 'label', label:"URL Imagen 3 (debe ser jpg,jpeg, png o gif)", name: 'imagenUrl3', value:productData.imagenUrl3, onChange: handleChange },
        { type: 'label', label:"Precio",  name: 'precio', value: productData.precio, onChange: handleChange },
        { type: 'select',label:"Ubicación", name: 'ubicacion', value: productData.ubicacion, onChange: handleChange,options: provinciasArgentinas.map(prov => ({ value: prov, label: prov }))},
        { type: 'label', label:"Carasteristicas", name: 'detalleItinerario', value: productData.detalleItinerario, onChange: handleChange },
        { type: 'select',label:"Categoria",  name: 'categoria', value: productData.categoria, onChange: handleChange, options: state.categories.map(cat => ({ value: cat.id, label: cat.nombre })) },
        { type: 'label', label:"Latitud",  name: 'latitud', value: productData.latitud, onChange: handleChange },
        { type: 'label', label:"Longitud",  name: 'longitud', value: productData.longitud, onChange: handleChange },
        { type: 'checkbox', label: 'Marque el check si quiere que el producto se visualice desde ahora en la página', name: 'disponible', checked: productData.disponible, onChange: handleChange 
        },
    ];

    return (
        <main className="registerProductForm main">
            <div className="container-form-create">
                <h2 className="title-form-create">Registrar Nuevo Producto</h2>
                <Form className={"form-create-accout"} fields={fields} buttonText="Registrar Producto"  onSubmit={handleSubmit} inputClassName="input-form-registred"/>
                {error && <p className="error-message">{error}</p>}
            </div>
        </main>
    );
};

export default RegisterProductForm;
