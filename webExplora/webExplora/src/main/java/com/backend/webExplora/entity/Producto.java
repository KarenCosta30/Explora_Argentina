package com.backend.webExplora.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table (name = "PRODUCTOS")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 50)
    private String nombre;
    @Column(length = 250)
    private String descripcion;
    @Column(length = 250)
    private String imagenUrl;
    private BigDecimal precio;
    //private Long categoriaId; (en el primer Sprint no habrá categoría visible en el Front)
    private Boolean disponible;
    @Column(length = 50)
    private String ubicacion;

    public Producto() {
    }

    public Producto(String nombre, String descripcion, String imagenUrl, BigDecimal precio, Boolean disponible, String ubicacion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
    }

    public Producto(Long id, String nombre, String descripcion, String imagenUrl, BigDecimal precio, Boolean disponible, String ubicacion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenUrl = imagenUrl;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public Boolean getDisponible() {
        return disponible;
    }

    public void setDisponible(Boolean disponible) {
        this.disponible = disponible;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
}


