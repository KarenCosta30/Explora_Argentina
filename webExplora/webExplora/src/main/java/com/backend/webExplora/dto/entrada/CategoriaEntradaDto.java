package com.backend.webExplora.dto.entrada;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoriaEntradaDto {

    @NotBlank(message = "El nombre de la categoría no puede estar vacío")
    @Size(max = 50, message = "El nombre de la categoría debe tener hasta 50 caracteres")
    private String nombre;

    @NotBlank(message = "La ubicación no puede estar vacía")
    @Size(max = 100, message = "La ubicación debe tener hasta 100 caracteres")
    private String ubicacion;

    @Size(max = 250, message = "La imagen debe tener hasta 250 caracteres")
    private String imagen;

    public CategoriaEntradaDto(String nombre, String ubicacion, String imagen) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }

    public CategoriaEntradaDto() {
    }
    

}

