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

    @Column(name = "descripcion_larga", length = 2000)
    private String descripcionLarga;

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

    @Column(name = "detalle_itinerario", length = 2000)
    private String detalleItinerario;//carateristicas

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @Column(name = "criterio")
    private String criterio;

    @Column(name = "fecha_reserva")
    private LocalDate fechaReserva;

    public Producto() {
    }

    public Producto(Long id, String nombre, String descripcion, String descripcionLarga, String imagenUrl,
                    String itinerario, String imagenUrl2, String imagenUrl3, BigDecimal precio, Boolean disponible,
                    String ubicacion, String detalleItinerario, Categoria categoria, LocalDate fechaReserva) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcionLarga = descripcionLarga;
        this.imagenUrl = imagenUrl;
        this.itinerario = itinerario;
        this.imagenUrl2 = imagenUrl2;
        this.imagenUrl3 = imagenUrl3;
        this.precio = precio;
        this.disponible = disponible;
        this.ubicacion = ubicacion;
        this.detalleItinerario = detalleItinerario;
        this.categoria = categoria;
        this.fechaReserva = fechaReserva;
    }

   
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public String getDescripcionLarga() { return descripcionLarga; }
    public void setDescripcionLarga(String descripcionLarga) { this.descripcionLarga = descripcionLarga; }
    public String getImagenUrl() { return imagenUrl; }
    public void setImagenUrl(String imagenUrl) { this.imagenUrl = imagenUrl; }
    public String getItinerario() { return itinerario; }
    public void setItinerario(String itinerario) { this.itinerario = itinerario; }
    public String getImagenUrl2() { return imagenUrl2; }
    public void setImagenUrl2(String imagenUrl2) { this.imagenUrl2 = imagenUrl2; }
    public String getImagenUrl3() { return imagenUrl3; }
    public void setImagenUrl3(String imagenUrl3) { this.imagenUrl3 = imagenUrl3; }
    public BigDecimal getPrecio() { return precio; }
    public void setPrecio(BigDecimal precio) { this.precio = precio; }
    public Boolean getDisponible() { return disponible; }
    public void setDisponible(Boolean disponible) { this.disponible = disponible; }
    public String getUbicacion() { return ubicacion; }
    public void setUbicacion(String ubicacion) { this.ubicacion = ubicacion; }
    public String getDetalleItinerario() { return detalleItinerario; }
    public void setDetalleItinerario(String detalleItinerario) { this.detalleItinerario = detalleItinerario; }
    public Categoria getCategoria() { return categoria; }
    public void setCategoria(Categoria categoria) { this.categoria = categoria; }
    public LocalDate getFechaReserva() { return fechaReserva; }
    public void setFechaReserva(LocalDate fechaReserva) { this.fechaReserva = fechaReserva; }
    public String getCriterio() { return criterio; }
    public void setCriterio(String criterio) { this.criterio = criterio; }
}
