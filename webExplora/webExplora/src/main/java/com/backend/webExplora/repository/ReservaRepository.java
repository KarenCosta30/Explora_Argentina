package com.backend.webExplora.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {

    /**
     * Encuentra reservas por ID del usuario.
     * 
     * @param usuarioId El ID del usuario.
     * @return Una lista de reservas asociadas al usuario.
     */
    List<Reserva> findByUsuarioId(Long usuarioId);

    /**
     * Encuentra reservas por ID del producto.
     * 
     * @param productoId El ID del producto.
     * @return Una lista de reservas asociadas al producto.
     */
    List<Reserva> findByProductoId(Long productoId);

    /**
     * Verifica si un producto está reservado para una fecha específica.
     * 
     * @param productoId El ID del producto.
     * @param fechaReserva La fecha de la reserva.
     * @return true si el producto está reservado en la fecha, false en caso contrario.
     */
    boolean existsByProductoIdAndFechaReserva(Long productoId, LocalDate fechaReserva);
    
    /**
     * Encuentra reservas por fecha de reserva.
     * 
     * @param fechaReserva La fecha de la reserva.
     * @return Una lista de reservas para esa fecha.
     */
    List<Reserva> findByFechaReserva(LocalDate fechaReserva);

}
