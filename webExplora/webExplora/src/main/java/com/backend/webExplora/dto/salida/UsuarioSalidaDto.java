package com.backend.webExplora.dto.salida;

import com.backend.webExplora.entity.Usuario;

public class UsuarioSalidaDto {

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private boolean esAdministrador;

  
    public UsuarioSalidaDto(Long id, String nombre, String apellido, String email, boolean esAdministrador) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.esAdministrador = esAdministrador;
    }

    public UsuarioSalidaDto() {
    }

   
    public UsuarioSalidaDto(Usuario usuario) {
        this.id = usuario.getId();
        this.nombre = usuario.getNombre();
        this.apellido = usuario.getApellido();
        this.email = usuario.getEmail();
        this.esAdministrador = usuario.isEsAdministrador();
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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isEsAdministrador() {
        return esAdministrador;
    }

    public void setEsAdministrador(boolean esAdministrador) {
        this.esAdministrador = esAdministrador;
    }
}
