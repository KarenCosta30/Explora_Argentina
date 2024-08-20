package com.backend.webExplora.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "CATEGORIAS")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 100)
    private String ubicacion;

    @Column(length = 250)
    private String imagen;

    @OneToMany(mappedBy = "categoria")
    private Set<Producto> productos;


    
  
    public Categoria() {
    }

    

    public Categoria(Long id, String nombre, String ubicacion, String imagen, Set<Producto> productos) {
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
        this.productos = productos;
    }

    



    public Categoria(String nombre, String ubicacion, String imagen, Set<Producto> productos) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
        this.productos = productos;
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

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }
}
