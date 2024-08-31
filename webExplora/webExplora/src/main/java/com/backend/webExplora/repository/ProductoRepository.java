package com.backend.webExplora.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoriaId(Long categoria_id);
     /**
     * Encuentra productos por ubicación y excluye los productos con IDs en la lista proporcionada.
     * 
     * @param ubicacion La ubicación del producto.
     * @param ids Una lista de IDs de productos a excluir.
     * @return Una lista de productos que coinciden con la ubicación y cuyos IDs no están en la lista proporcionada.
     */
    List<Producto> findByUbicacionAndIdNotIn(String ubicacion, List<Long> ids);
    
    

}
