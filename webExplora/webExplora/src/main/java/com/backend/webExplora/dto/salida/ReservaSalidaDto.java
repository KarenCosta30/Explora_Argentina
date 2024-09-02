package com.backend.webExplora.dto.salida;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservaSalidaDto {

    private Long id; 

    private Long usuarioId;

    private LocalDate fechaReserva;
    
    private ProductoSalidaDto producto;
    

    public ReservaSalidaDto() {
    }
    public ReservaSalidaDto(LocalDate fechaReserva) {
        this.fechaReserva = fechaReserva;
    }

    public ReservaSalidaDto(Long id, Long usuarioId, ProductoSalidaDto producto, LocalDate fechaReserva) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.producto = producto; 
        this.fechaReserva = fechaReserva;
     } 

     public ReservaSalidaDto(Long id, Long usuarioId, Long productoId, LocalDate fechaReserva) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.producto = new ProductoSalidaDto();
        this.fechaReserva = fechaReserva;
    }
    public LocalDate getFechaReserva() {
        return fechaReserva;
    }

    public void setFechaReserva(LocalDate fechaReserva) {
        this.fechaReserva = fechaReserva;
    }

    
}
