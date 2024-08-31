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
        ubicacion: '',
        detalle_itinerario: '',
        categoria_id: '',
        latitud: '',
        longitud: '',
        disponible: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData({
            ...productData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/api/productos/registrar', productData)
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
        { type: 'text', label: 'Ingrese Nombre de la Experiencia o Tour', placeholder: 'Nombre', name: 'nombre', value: productData.nombre, onChange: handleChange },
        { type: 'text', label: 'Ingrese una Descripción Breve para la Portada', placeholder: 'Descripción Breve de Portada', name: 'descripcion', value: productData.descripcion, onChange: handleChange },
        { type: 'text', label: 'Ingrese una Descripción más detallada', placeholder: 'Descripción Detallada', name: 'descripcion_larga', value: productData.descripcion_larga, onChange: handleChange },
        { type: 'text', label: 'Agregue el Itinerario', placeholder: 'Itinerario', name: 'itinerario', value: productData.itinerario, onChange: handleChange },
        { type: 'file', label: 'Adjunte la Imagen Principal', placeholder: 'Imagen URL', name: 'imagenUrl', accept:'.jpg, .png', onChange: handleChange},
        { type: 'file', label: 'Adjunte una segunda Imagen para el detalle del producto', placeholder: 'Imagen URL 2', name: 'imagenUrl2', accept:'.jpg, .png', onChange: handleChange },
        { type: 'file', label: 'Adjunte una tercera Imagen para el detalle del producto', placeholder: 'Imagen URL 3', name: 'imagenUrl3', accept:'.jpg, .png', onChange: handleChange },
        { type: 'number', label: 'Ingrese el Precio en USD por persona', placeholder: 'Precio', name: 'precio', value: productData.precio, onChange: handleChange },
        { type: 'text', label: 'Agregue la Ubicación a realizarse', placeholder: 'Ubicación', name: 'ubicacion', value: productData.ubicacion, onChange: handleChange },
        { type: 'text', label: 'Agregue las Características', placeholder: 'Caracteristicas (Detalle Itinerario)', name: 'detalle_itinerario', value: productData.detalle_itinerario, onChange: handleChange },
        { type: 'select', label: 'Seleccione la Categoría', name: 'categoria_id', value: productData.categoria_id, onChange: handleChange, options: state.categories.map(cat => ({ value: cat.id, label: cat.nombre })) },
        { type: 'number', label: 'Ingrese la Latitud', placeholder: 'Latitud', name: 'latitud', value: productData.latitud, onChange: handleChange },
        { type: 'number', label: 'Ingrese la Longitud', placeholder: 'Longitud', name: 'longitud', value: productData.longitud, onChange: handleChange },
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
                <Form className={"form-create-accout"} fields={fields} buttonText="Registrar Producto" onSubmit={handleSubmit} inputClassName="create-account-input"/>
            </div>
        </main>
    );
};

export default RegisterProductForm;
