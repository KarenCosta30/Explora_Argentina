import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTourState } from '../Context/GlobalContext';

const ProductAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProductos, setFilteredProductos] = useState([]);
  const navigate = useNavigate();
  const { state } = useTourState();
  
  useEffect(() => {
    // Recupera el valor del localStorage y convierte a booleano
    const userAdministrator = localStorage.getItem("userAdministrator") === "true";
    // Verifica si el usuario es administrador y redirige si no lo es
    if (!userAdministrator) {
      navigate('/'); // Redirigir fuera del panel de administración
    }
  }, [state.userAdministrator, navigate]);

  useEffect(() => {
    // Obtener productos
    axios.get('http://localhost:8081/api/productos/aleatorios')
      .then(response => {
        const sortedProductos = response.data.sort((a, b) => a.id - b.id);
        setProductos(sortedProductos);
        setFilteredProductos(sortedProductos); // Inicialmente, muestra todos los productos
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });

    // Obtener categorías
    axios.get('http://localhost:8081/api/productos/categorias/aleatorias')
      .then(response => {
        setCategorias(response.data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    // Filtrar productos por nombre
    const results = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProductos(results);
  }, [searchTerm, productos]);

  const handleEdit = (id) => {
    console.log(`Editar producto con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar producto con ID: ${id}`);
  };

  const handleCategoryChange = (productoId, categoriaId) => {
    axios.put('http://localhost:8081/api/productos/asignarCategoria', {
      productoId,
      categoriaId
    })
    .then(response => {
      setProductos(prevState => {
        const updatedProductos = prevState.map(producto => 
          producto.id === productoId ? { ...producto, categoria: response.data.categoria } : producto
        );
        return updatedProductos.sort((a, b) => a.id - b.id);
      });
      console.log("Categoría actualizada:", response.data);
    })
    .catch(error => {
      console.error("Error updating category:", error);
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleAddProduct = () => {
    navigate('/registerproduct'); // Redirige a /registerproduct
  };

  return (
    <div className='product-admin-container'>
      <h1>Gestión de Productos</h1>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Buscar por nombre...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleAddProduct} className='btn-add-product'>
          Agregar Producto
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProductos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>
                <select 
                  value={producto.categoria?.id || ''} 
                  onChange={(e) => handleCategoryChange(producto.id, e.target.value)}
                >
                  <option value="" disabled>Selecciona una categoría</option>
                  {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button onClick={() => handleEdit(producto.id)} className="btn-edit">Editar</button>
                <button onClick={() => handleDelete(producto.id)} className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductAdmin;
