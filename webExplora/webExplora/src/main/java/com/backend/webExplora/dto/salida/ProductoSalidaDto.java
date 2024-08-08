package com.backend.webExplora.dto.salida;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Getter
@Setter
public class ProductoSalidaDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private String imagenUrl;
    private BigDecimal precio;
    private Boolean disponible;
    private String ubicacion;

    public ProductoSalidaDto() {
    }

    public ProductoSalidaDto(Long id, String nombre, String descripcion, String imagenUrl, BigDecimal precio, Boolean disponible, String ubicacion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
    }
}


