package com.backend.webExplora.dto.salida;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoriaSalidaDto {

    private Long id;

    private String nombre;

    private String ubicacion;

    private String imagen;

    public CategoriaSalidaDto() {
    }

    public CategoriaSalidaDto(Long id, String nombre, String ubicacion, String imagen) {
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }


    
}
