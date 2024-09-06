package com.backend.webExplora.dto.salida;

import java.time.LocalDate;

public class ProductoFechaDto {

    private Long productoId;
    private LocalDate fechaReserva;

    public ProductoFechaDto() {
    }

    public ProductoFechaDto(Long productoId, LocalDate fechaReserva) {
        this.productoId = productoId;
        this.fechaReserva = fechaReserva;
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
}
