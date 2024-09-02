package com.backend.webExplora.service.impl;

import java.time.LocalDate;
import java.util.List;  
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.webExplora.dto.salida.ReservaSalidaDto;
import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Reserva;
import com.backend.webExplora.repository.ProductoRepository;
import com.backend.webExplora.repository.ReservaRepository;
import com.backend.webExplora.repository.UsuarioRepository;
import com.backend.webExplora.service.IReservaService;

@Service
public class ReservaService implements IReservaService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    @Override
    public ReservaSalidaDto reservarProducto(Long usuarioId, Long productoId, LocalDate fechaReserva) {
        if (isProductoReservado(productoId, fechaReserva)) {
            throw new IllegalStateException("Producto ya reservado para la fecha seleccionada.");
        }

        var usuario = usuarioRepository.findById(usuarioId)
                            .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));
        var producto = productoRepository.findById(productoId)
                            .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado"));

        var reserva = new Reserva();
        reserva.setUsuario(usuario);
        reserva.setProducto(producto);
        reserva.setFechaReserva(fechaReserva);
        var reservaGuardada = reservaRepository.save(reserva);

        return convertirAReservaSalidaDto(reservaGuardada);
    }

    @Override
    public List<Reserva> obtenerReservasPorUsuario(Long usuarioId) {
        return reservaRepository.findByUsuarioId(usuarioId);
    }
    @Override
public ReservaSalidaDto obtenerReservaPorId(Long reservaId) {
    var reserva = reservaRepository.findById(reservaId)
                    .orElseThrow(() -> new IllegalArgumentException("Reserva no encontrada"));
    return convertirAReservaSalidaDto(reserva);
}



    @Override
    public List<Reserva> obtenerReservasPorProducto(Long productoId) {
        return reservaRepository.findByProductoId(productoId);
    }

    @Override
    public List<Producto> obtenerProductosDisponibles(LocalDate fechaReserva, String ubicacion) {
        var productosReservadosIds = reservaRepository.findByFechaReserva(fechaReserva)
                                                      .stream()
                                                      .map(Reserva::getProducto)
                                                      .map(Producto::getId)
                                                      .collect(Collectors.toList());

        return productoRepository.findByUbicacionAndIdNotIn(ubicacion, productosReservadosIds);
    }

    @Override
    public boolean isProductoDisponible(Long productoId, LocalDate fechaReserva) {
        return !isProductoReservado(productoId, fechaReserva);
    }

    private boolean isProductoReservado(Long productoId, LocalDate fechaReserva) {
        return reservaRepository.existsByProductoIdAndFechaReserva(productoId, fechaReserva);
    }

    private ReservaSalidaDto convertirAReservaSalidaDto(Reserva reserva) {
        return new ReservaSalidaDto(
            reserva.getId(),
            reserva.getUsuario().getId(),
            reserva.getProducto().getId(),
            reserva.getFechaReserva()
        );
    }
}

