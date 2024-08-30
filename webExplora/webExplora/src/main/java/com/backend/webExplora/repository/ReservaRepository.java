package com.backend.webExplora.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    List<Producto> findByCategoriaId(Long categoria_id);
    List<Reserva> findByProductoIdAndFechaReserva(Long productoId, LocalDate fechaReserva);
    boolean existsByProductoIdAndFechaReserva(Long productoId, LocalDate fechaReserva);
}
