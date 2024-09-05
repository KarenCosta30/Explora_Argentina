package com.backend.webExplora.dto.salida;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoritoSalidaDto {
    private Long favoritoId;
    private Long usuarioId;
    private Long productoId;
    private ProductoSalidaDto producto;

    public FavoritoSalidaDto() {
    }

  
    public FavoritoSalidaDto(Long favoritoId, Long usuarioId, Long productoId, ProductoSalidaDto producto) {
        this.favoritoId = favoritoId;
        this.usuarioId = usuarioId;
        this.productoId = productoId;
        this.producto = producto;
    }

    public FavoritoSalidaDto(Long favoritoId, Long usuarioId, Long productoId) {
        this.favoritoId = favoritoId;
        this.usuarioId = usuarioId;
        this.productoId = productoId;
    }
}