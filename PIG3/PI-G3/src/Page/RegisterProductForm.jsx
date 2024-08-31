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
        descripcion_larga: '',
        itinerario: '',
        imagenUrl: '',
        imagenUrl2: '',
        imagenUrl3: '',
        precio: '',
        ubicacion: '',
        detalle_itinerario: '',
        categoria_id: '',
        latitud: '',
        longitud: '',
        disponible: true,
    });
    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData({
            ...productData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {nombre, descripcion,descripcion_larga,itinerario,imagenUrl,imagenUrl2,imagenUrl3,precio,ubicacion,detalle_itinerario,latitud,longitud } = productData
        console.log(state.tour.nombre);
        const nombreExistente = state.tour.find(product => product.nombre.toLowerCase() === nombre.toLowerCase());
        const parsedLatitud = parseFloat(latitud);
        const parsedLongitud = parseFloat(longitud);
        
        if(!nombre || nombre.length < 3 || nombre.length > 50 || nombreExistente ||  /^[a-zA-Z]+$/.test(nombre) ){
            setError("El campo nombre es incorrecto")
            return;
        }
        if( descripcion.length < 4 || descripcion.length > 250){
            setError("EL campo de descripción breve de portada es incorrecta")
            return;
        }
        if( descripcion_larga.length < 100 || descripcion_larga.length > 2000){
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
        if (!provinciasArgentinas.map(e => e.toLowerCase()).includes(ubicacion)) {
            setError("El campo ubicación es incorrecto");
            return;
        }
        if (detalle_itinerario.length < 20 || detalle_itinerario.length > 2000 ) {
            setError("El campo caracteristica (Detalle itinerario) es incorrecto")
            return;
        }
        if (isNaN(parsedLatitud) || parsedLatitud >= 0 || parsedLatitud < -55.05 || parsedLatitud > -22.82 ) {
            setError("El campo latitud es incorrecto")
            return;
        }
        if (isNaN(parsedLongitud) || parsedLongitud < -73.5 || parsedLongitud > -53.6) {
            setError("El campo longitud es incorrecto")
            return;
        }

        setError(alert("Usuario registrado exitosamente!"));
        
    
        
    
       axios.post('http://localhost:8081/api/productos/registrar', productData)
            .then((res) => {
                dispatch({ type: "GET_PRODUCTOS", payload: res.data });
                
            })
            .catch((err) => {
                console.log(err);
                alert('Hubo un error al registrar el producto');
            });
    };

      // useEffect para sincronizar el localStorage con el estado global
  useEffect(() => {
    localStorage.setItem("userAdministrator", state.userAdministrator);
    if (!state.userAdministrator) {
      navigate('/'); // Redirigir fuera del panel de administración
    }
  }, [state.userAdministrator, navigate]);

    const fields = [
        { type: 'text',  placeholder: 'Nombre', name: 'nombre', value: productData.nombre, onChange: handleChange },
        { type: 'text',  placeholder: 'Descripción Breve de Portada', name: 'descripcion', value: productData.descripcion, onChange: handleChange },
        { type: 'text',  placeholder: 'Descripción Detallada', name: 'descripcion_larga', value: productData.descripcion_larga, onChange: handleChange },
        { type: 'textarea',  placeholder: 'Itinerario', name: 'itinerario', value: productData.itinerario, onChange: handleChange },
        { type: 'text',  placeholder: 'Ingrese una url para la imagen 1', name: 'imagenUrl', accept:'.jpg, .png', onChange: handleChange},
        { type: 'text',  placeholder: 'Ingrese una url para la imagen 2', name: 'imagenUrl2', accept:'.jpg, .png', onChange: handleChange },
        { type: 'text',  placeholder: 'Ingrese una url para la imagen 3', name: 'imagenUrl3', accept:'.jpg, .png', onChange: handleChange },
        { type: 'number', placeholder: 'Precio', name: 'precio', value: productData.precio, onChange: handleChange },
        { type: 'select', name: 'ubicacion', value: productData.ubicacion,onChange: handleChange,options: provinciasArgentinas.map(prov => ({ value: prov, label: prov }))},
        { type: 'text',  placeholder: 'Caracteristicas (Detalle Itinerario)', name: 'detalle_itinerario', value: productData.detalle_itinerario, onChange: handleChange },
        { type: 'select',  name: 'categoria_id', value: productData.categoria_id, onChange: handleChange, options: state.categories.map(cat => ({ value: cat.id, label: cat.nombre })) },
        { type: 'number',  placeholder: 'Latitud', name: 'latitud', value: productData.latitud, onChange: handleChange },
        { type: 'number',  placeholder: 'Longitud', name: 'longitud', value: productData.longitud, onChange: handleChange },
        { 
            type: 'checkbox', 
            label: 'Marque el check para confirmar el ingreso del producto', 
            name: 'disponible', 
            checked: productData.disponible, 
            onChange: handleChange 
        },
    ];

    return (
        <main className="registerProductForm main">
            <div className="container-form-create">
                <h2 className="title-form-create">Registrar Nuevo Producto</h2>
                <Form className={"form-create-accout"} fields={fields} buttonText="Registrar Producto"  onSubmit={handleSubmit} inputClassName="create-account-input"/>
                {error && <p className="error-message">{error}</p>}
            </div>
        </main>
    );
};

export default RegisterProductForm;
