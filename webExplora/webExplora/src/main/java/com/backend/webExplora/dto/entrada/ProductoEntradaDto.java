package com.backend.webExplora.dto.entrada;

import java.math.BigDecimal;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductoEntradaDto {
    @NotBlank(message = "Debe especificarse el nombre del paciente")
    @Size(max = 50, message = "El nombre debe tener hasta 50 caracteres")
    private String nombre;
    @NotBlank(message = "Debe especificarse la descripción del producto")
    @Size(max = 250, message = "La descripción debe tener hasta 250 caracteres")
    private String descripcion;
    @NotBlank(message = "Debe especificarse la descripción del producto")
    @Size(max = 2000, message = "La descripción debe tener hasta 250 caracteres")
    private String descripcion_larga;
    @NotBlank(message = "Debe especificarse la URL de la imagen del producto")
    @Size(max = 250, message = "La URL de la imagen debe tener hasta 250 caracteres")
    private String imagenUrl;
    @NotBlank(message = "Debe especificarse la URL de la imagen del producto")
    @Size(max = 250, message = "La URL de la imagen debe tener hasta 250 caracteres")
    private String imagenUrl2;
    @NotBlank(message = "Debe especificarse la URL de la imagen del producto")
    @Size(max = 250, message = "La URL de la imagen debe tener hasta 250 caracteres")
    private String imagenUrl3;
    @NotNull(message = "Debe especificarse el precio del producto")
    @DecimalMin(value = "0.0", inclusive = false, message = "El precio debe ser mayor que 0")
    private BigDecimal precio;
    @NotNull(message = "Debe especificarse si el producto está disponible o no")
    private Boolean disponible;
    @NotBlank(message = "Debe especificarse la ubicación del producto")
    @Size(max = 100, message = "La ubicación debe tener hasta 100 caracteres")
    private String ubicacion;
    @NotBlank(message = "Debe especificarse la ubicación del producto")
    @Size(max = 2000, message = "La ubicación debe tener hasta 100 caracteres")
    private String itinerario;



    public ProductoEntradaDto() {

    }

    public ProductoEntradaDto(String itinerario, String nombre, String descripcion, String descripcion_larga, String imagenUrl, String imagenUrl2, String imagenUrl3, BigDecimal precio, Boolean disponible, String ubicacion) {
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
    }
}

