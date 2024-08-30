package com.backend.webExplora.service.impl;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Reserva;
import com.backend.webExplora.entity.Usuario;
import com.backend.webExplora.repository.ProductoRepository;
import com.backend.webExplora.repository.ReservaRepository;
import com.backend.webExplora.repository.UsuarioRepository;

@Service
public class ReservaService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ReservaRepository reservaRepository;    

    public Reserva reservarProducto(Long usuarioId, Long productoId, LocalDate fechaReserva) {
        if (isProductoReservado(productoId, fechaReserva)) {
            throw new IllegalStateException("Producto ya reservado para la fecha seleccionada.");
        }
        Usuario usuario = usuarioRepository.findById(usuarioId)
                            .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));
        Producto producto = productoRepository.findById(productoId)
                            .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado"));

        Reserva reserva = new Reserva();
        reserva.setUsuario(usuario);
        reserva.setProducto(producto);
        reserva.setFechaReserva(fechaReserva);  
        return reservaRepository.save(reserva);
    }

    private boolean isProductoReservado(Long productoId, LocalDate fechaReserva) {
        return reservaRepository.existsByProductoIdAndFechaReserva(productoId, fechaReserva);
    }
}

