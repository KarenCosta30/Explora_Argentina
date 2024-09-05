package com.backend.webExplora.dto.salida;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoritoSalidaDto {
    private Long favoritoId;
    private Long usuarioId;
    private Long productoId;
    private String nombreProducto;

    public FavoritoSalidaDto() {
    }

  
    public FavoritoSalidaDto(Long favoritoId, Long usuarioId, Long productoId, String nombreProducto) {
        this.favoritoId = favoritoId;
        this.usuarioId = usuarioId;
        this.productoId = productoId;
        this.nombreProducto = nombreProducto;
    }
}