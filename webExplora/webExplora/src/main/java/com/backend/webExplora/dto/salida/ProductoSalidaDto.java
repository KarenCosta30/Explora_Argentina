package com.backend.webExplora.dto.salida;

import java.math.BigDecimal;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductoSalidaDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private String descripcionLarga;
    private String imagenUrl;
    private String imagenUrl2;
    private String imagenUrl3;
    private BigDecimal precio;
    private Boolean disponible;
    private String ubicacion;
    private String itinerario;
    private String detalleItinerario;
    private CategoriaSalidaDto categoria;


   
    public ProductoSalidaDto() {}

   
    public ProductoSalidaDto(Long id, String itinerario, String nombre, String descripcion, String descripcionLarga, String imagenUrl, String imagenUrl2, String imagenUrl3, BigDecimal precio, Boolean disponible, String ubicacion, String detalleItinerario, CategoriaSalidaDto categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcionLarga = descripcionLarga;
        this.imagenUrl = imagenUrl;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
        this.imagenUrl2 = imagenUrl2;
        this.imagenUrl3 = imagenUrl3;
        this.itinerario = itinerario;
        this.detalleItinerario = detalleItinerario;
    }

    
}
