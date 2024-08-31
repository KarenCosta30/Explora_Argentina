package com.backend.webExplora.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {

    // Encuentra reservas por fecha de reserva
    List<Reserva> findByFechaReserva(LocalDate fechaReserva);

    // Encuentra reservas por ID de usuario
    List<Reserva> findByUsuarioId(Long usuarioId);

    // Encuentra reservas por ID de producto
    List<Reserva> findByProductoId(Long productoId);

    // Verifica si existe una reserva para un producto en una fecha específica
    boolean existsByProductoIdAndFechaReserva(Long productoId, LocalDate fechaReserva);
}