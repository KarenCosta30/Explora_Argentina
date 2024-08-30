package com.backend.webExplora.service;

import java.time.LocalDate;
import java.util.List;

import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.dto.salida.ReservaSalidaDto;

public interface IReservaService {
    
    /**
     * Reserva un producto para un usuario en una fecha específica.
     * 
     * @param usuarioId ID del usuario que realiza la reserva
     * @param productoId ID del producto a reservar
     * @param fechaReserva Fecha para la reserva
     * @return La reserva creada
     * @throws IllegalStateException Si el producto ya está reservado para la fecha seleccionada
     * @throws IllegalArgumentException Si el usuario o producto no existen
     */
    ReservaSalidaDto reservarProducto(Long usuarioId, Long productoId, LocalDate fechaReserva);
    
    /**
     * Obtiene todas las reservas realizadas por un usuario específico.
     * 
     * @param usuarioId ID del usuario
     * @return Lista de reservas del usuario
     */
    List<ReservaSalidaDto> obtenerReservasPorUsuario(Long usuarioId);
    
    /**
     * Obtiene todas las reservas para un producto específico.
     * 
     * @param productoId ID del producto
     * @return Lista de reservas del producto
     */
    List<ReservaSalidaDto> obtenerReservasPorProducto(Long productoId);
    
    /**
     * Verifica si un producto está disponible para una fecha específica.
     * 
     * @param productoId ID del producto
     * @param fechaReserva Fecha para verificar la disponibilidad
     * @return true si el producto está disponible, false si no lo está
     */
    boolean isProductoDisponible(Long productoId, LocalDate fechaReserva);
    


      /**
     * Obtiene la lista de productos disponibles en una ubicación específica para una fecha específica.
     *
     * @param fechaReserva Fecha de la reserva.
     * @param ubicacion Ubicación del producto.
     * @return Lista de productos disponibles.
     */
    List<ProductoSalidaDto> obtenerProductosDisponibles(LocalDate fechaReserva, String ubicacion);
}
