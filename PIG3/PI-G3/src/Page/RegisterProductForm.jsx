import React, { useState } from 'react';
import { useTourState } from '../Context/GlobalContext';
import Form from "../Components/Form";
import axios from 'axios';
import "../style/registerProductForm.css";

const RegisterProductForm = () => {
    const { state, dispatch } = useTourState();
    const [productData, setProductData] = useState({
        nombre: '',
        descripcion: '',
        descripcion_larga: '',
        itinerario: '',
        imagenUrl: '',
        imagenUrl2: '',
        imagenUrl3: '',
        precio: '',
        disponible: true,
        ubicacion: '',
        detalle_itinerario: '',
        categoria_id: '',
        latitud: '',
        longitud: '',
    });

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/productos/registrar', productData)
            .then((res) => {
                dispatch({ type: "GET_PRODUCTOS", payload: res.data });
                alert('Producto registrado exitosamente');
            })
            .catch((err) => {
                console.log(err);
                alert('Hubo un error al registrar el producto');
            });
    };

    const fields = [
        { type: 'text', placeholder: 'Nombre', name: 'nombre', value: productData.nombre, onChange: handleChange },
        { type: 'text', placeholder: 'Descripción Breve de Portada', name: 'descripcion', value: productData.descripcion, onChange: handleChange },
        { type: 'text', placeholder: 'Descripción Detallada', name: 'descripcion_larga', value: productData.descripcion_larga, onChange: handleChange },
        { type: 'text', placeholder: 'Itinerario', name: 'itinerario', value: productData.itinerario, onChange: handleChange },
        { type: 'file', placeholder: 'Imagen URL', name: 'imagenUrl', value: productData.imagenUrl, accept:'.jpg, .png', onChange: handleChange},
        { type: 'file', placeholder: 'Imagen URL 2', name: 'imagenUrl2', value: productData.imagenUrl2, accept:'.jpg, .png', onChange: handleChange },
        { type: 'file', placeholder: 'Imagen URL 3', name: 'imagenUrl3', value: productData.imagenUrl3, accept:'.jpg, .png', onChange: handleChange },
        { type: 'number', placeholder: 'Precio', name: 'precio', value: productData.precio, onChange: handleChange },
        { type: 'checkbox', label: 'Disponible', name: 'disponible', checked: productData.disponible || true, onChange: handleChange },
        { type: 'text', placeholder: 'Ubicación', name: 'ubicacion', value: productData.ubicacion, onChange: handleChange },
        { type: 'text', placeholder: 'Detalle Itinerario', name: 'detalle_itinerario', value: productData.detalle_itinerario, onChange: handleChange },
        { type: 'select', name: 'categoria_id', value: productData.categoria_id, onChange: handleChange, options: state.categories.map(cat => ({ value: cat.id, label: cat.nombre })) },
        { type: 'number', placeholder: 'Latitud', name: 'latitud', value: productData.latitud, onChange: handleChange },
        { type: 'number', placeholder: 'Longitud', name: 'longitud', value: productData.longitud, onChange: handleChange },
    ];

    return (
        <main className="registerProductForm main">
            <div className="container-form-create">
                <h2 className="title-form-create">Registrar Nuevo Producto</h2>
                <Form className={"form-create-accout"} fields={fields} buttonText="Registrar Producto" onSubmit={handleSubmit} inputClassName="create-account-input"/>
            </div>
        </main>
    );
};

export default RegisterProductForm;
