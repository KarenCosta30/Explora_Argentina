package com.backend.webExplora.dto.salida;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservaSalidaDto {

    private Long id; 

    private Long usuarioId;

    private Long productoId; 

    private LocalDate fechaReserva;
    

    public ReservaSalidaDto() {
    }

    public ReservaSalidaDto(Long id, Long usuarioId, Long productoId, LocalDate fechaReserva) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.productoId = productoId;
        this.fechaReserva = fechaReserva;
    }

    public ReservaSalidaDto(Long usuarioId, Long productoId, LocalDate fechaReserva) {
        this.usuarioId = usuarioId;
        this.productoId = productoId;
        this.fechaReserva = fechaReserva;
    }

    
}
