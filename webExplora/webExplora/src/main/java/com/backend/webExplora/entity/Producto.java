package com.backend.webExplora.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCTOS")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 250)
    private String descripcion;

    @Column(length = 2000)
    private String descripcion_larga;

    @Column(length = 250)
    private String imagenUrl;

    @Column(length = 2000)
    private String itinerario;

    @Column(length = 250)
    private String imagenUrl2;

    @Column(length = 250)
    private String imagenUrl3;

    private BigDecimal precio;

    private Boolean disponible;

    @Column(length = 50)
    private String ubicacion;

    @Column(length = 2000)
    private String detalle_itinerario;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @Column(length = 250)
    private Float latitud;

    @Column(length = 250)
    private Float longitud;

    @Column(name = "criterio") // Ajusta esto si es necesario
    private String criterio;

    @Column(name = "fecha_reserva") // Adjust this if necessary
    private LocalDate fechaReserva;

    public Producto() {
    }

    public Producto(Long id, String nombre, String descripcion, String descripcion_larga, String imagenUrl,
            String itinerario, String imagenUrl2, String imagenUrl3, BigDecimal precio, Boolean disponible,
            String ubicacion, String detalle_itinerario, Categoria categoria, Float latitud, Float longitud,
            LocalDate fechaReserva) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcion_larga = descripcion_larga;
        this.imagenUrl = imagenUrl;
        this.itinerario = itinerario;
        this.imagenUrl2 = imagenUrl2;
        this.imagenUrl3 = imagenUrl3;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
        this.detalle_itinerario = detalle_itinerario;
        this.categoria = categoria;
        this.latitud = latitud;
        this.longitud = longitud;
        this.fechaReserva = fechaReserva;
    }

    public Producto(String nombre, String descripcion, String descripcion_larga, String imagenUrl, String itinerario,
            String imagenUrl2, String imagenUrl3, BigDecimal precio, Boolean disponible, String ubicacion,
            String detalle_itinerario, Categoria categoria, Float latitud, Float longitud, LocalDate fechaReserva) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcion_larga = descripcion_larga;
        this.imagenUrl = imagenUrl;
        this.itinerario = itinerario;
        this.imagenUrl2 = imagenUrl2;
        this.imagenUrl3 = imagenUrl3;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
        this.detalle_itinerario = detalle_itinerario;
        this.categoria = categoria;
        this.latitud = latitud;
        this.longitud = longitud;
        this.fechaReserva = fechaReserva;
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

    public String getDescripcion_larga() {
        return descripcion_larga;
    }

    public void setDescripcion_larga(String descripcion_larga) {
        this.descripcion_larga = descripcion_larga;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public String getItinerario() {
        return itinerario;
    }

    public void setItinerario(String itinerario) {
        this.itinerario = itinerario;
    }

    public String getImagenUrl2() {
        return imagenUrl2;
    }

    public void setImagenUrl2(String imagenUrl2) {
        this.imagenUrl2 = imagenUrl2;
    }

    public String getImagenUrl3() {
        return imagenUrl3;
    }

    public void setImagenUrl3(String imagenUrl3) {
        this.imagenUrl3 = imagenUrl3;
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

    public String getDetalle_itinerario() {
        return detalle_itinerario;
    }

    public void setDetalle_itinerario(String detalle_itinerario) {
        this.detalle_itinerario = detalle_itinerario;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Float getLatitud() {
        return latitud;
    }

    public void setLatitud(Float latitud) {
        this.latitud = latitud;
    }

    public Float getLongitud() {
        return longitud;
    }

    public void setLongitud(Float longitud) {
        this.longitud = longitud;
    }

    public LocalDate getFechaReserva() {
        return fechaReserva;
    }

    public void setFechaReserva(LocalDate fechaReserva) {
        this.fechaReserva = fechaReserva;
    }
}