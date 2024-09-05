package com.backend.webExplora.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Reserva;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoriaId(Long categoria_id);

    /**
     * Encuentra productos por ubicación y excluye los productos con IDs en la lista
     * proporcionada.
     * 
     * @param ubicacion La ubicación del producto.
     * @param ids       Una lista de IDs de productos a excluir.
     * @return Una lista de productos que coinciden con la ubicación y cuyos IDs no
     *         están en la lista proporcionada.
     */
    List<Producto> findByUbicacionAndIdNotIn(String ubicacion, List<Long> ids);

    List<Reserva> findByFechaReserva(LocalDate fechaReserva);

    List<Producto> findByCriterioAndCategoria_IdIn(String criterio, List<Long> categoriaIds);
    @Query("SELECT p FROM Producto p WHERE p.id = :id")
    Producto findProductoById(@Param("id") Long id);
    

}
