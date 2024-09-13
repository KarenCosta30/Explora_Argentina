package com.backend.webExplora.service;

import java.time.LocalDate;
import java.util.List;

import com.backend.webExplora.dto.salida.ProductoFechaDto;
import com.backend.webExplora.dto.salida.ReservaSalidaDto;
import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Reserva;

public interface IReservaService {

    ReservaSalidaDto reservarProducto(Long usuarioId, Long productoId, LocalDate fechaReserva);

    List<Reserva> obtenerReservasPorUsuario(Long usuarioId);

    List<Reserva> obtenerReservasPorProducto(Long productoId);

    List<Producto> obtenerProductosDisponibles(LocalDate fechaReserva, String ubicacion);

    boolean isProductoDisponible(Long productoId, LocalDate fechaReserva);
    ReservaSalidaDto obtenerReservaPorId(Long reservaId);
    
    List<ProductoFechaDto> obtenerProductoIdsYFechasPorFecha(LocalDate fechaReserva);
   



}
