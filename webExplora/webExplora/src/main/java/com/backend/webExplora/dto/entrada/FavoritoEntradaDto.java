package com.backend.webExplora.dto.entrada;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class FavoritoEntradaDto {

    @NotNull(message = "El ID del usuario no puede ser nulo")
    private Long usuarioId;

    @NotNull(message = "El ID del producto no puede ser nulo")
    private Long productoId;

  
    public FavoritoEntradaDto() {
    }

   
    public FavoritoEntradaDto(Long usuarioId, Long productoId) {
        this.usuarioId = usuarioId;
        this.productoId = productoId;
    }

}