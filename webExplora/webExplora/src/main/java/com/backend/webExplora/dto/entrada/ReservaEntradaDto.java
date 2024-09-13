package com.backend.webExplora.dto.entrada;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import com.backend.webExplora.dto.salida.ProductoSalidaDto;

public class ReservaEntradaDto {

    @NotNull(message = "El ID del usuario no puede ser nulo")
    private Long usuarioId;

    @NotNull(message = "El ID del producto no puede ser nulo")
    private Long productoId;

    @NotNull(message = "La fecha de reserva no puede ser nula")
    private LocalDate fechaReserva;

    private ProductoSalidaDto productoSalidaDto;


    public ReservaEntradaDto() {
    }


    public ReservaEntradaDto(Long usuarioId, Long productoId, LocalDate fechaReserva, ProductoSalidaDto productoSalidaDto) {
        this.usuarioId = usuarioId;
        this.productoId = productoId;
        this.fechaReserva = fechaReserva;
        this.productoSalidaDto = productoSalidaDto;
    }

  
    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Long getProductoId() {
        return productoId;
    }

    public void setProductoId(Long productoId) {
        this.productoId = productoId;
    }

    public LocalDate getFechaReserva() {
        return fechaReserva;
    }

    public void setFechaReserva(LocalDate fechaReserva) {
        this.fechaReserva = fechaReserva;
    }

    public ProductoSalidaDto getProductoSalidaDto() {
        return productoSalidaDto;
    }

    public void setProductoSalidaDto(ProductoSalidaDto productoSalidaDto) {
        this.productoSalidaDto = productoSalidaDto;
    }
}

