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
    private String descripcion_larga;
    private String imagenUrl;
    private String imagenUrl2;
    private String imagenUrl3;
    private BigDecimal precio;
    private Boolean disponible;
    private String ubicacion;
    private String itinerario;
    private String detalle_itinierario;

    public ProductoSalidaDto() {
    }

    public ProductoSalidaDto(Long id, String itinerario, String nombre, String descripcion, String descripcion_larga, String imagenUrl, String imagenUrl2, String imagenUrl3, BigDecimal precio, Boolean disponible, String ubicacion, String detalle_itinerario) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcion_larga = descripcion_larga;
        this.imagenUrl = imagenUrl;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
        this.imagenUrl2 = imagenUrl2;
        this.imagenUrl3 = imagenUrl3;
        this.itinerario = itinerario;
        this.detalle_itinierario = detalle_itinerario;
    }
}


