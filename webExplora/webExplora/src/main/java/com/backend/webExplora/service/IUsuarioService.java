package com.backend.webExplora.service;

import java.util.List;

import com.backend.webExplora.dto.entrada.UsuarioEntradaDto;
import com.backend.webExplora.dto.salida.UsuarioSalidaDto;

public interface IUsuarioService {

    // Métodos comunes para usuarios

    /**
     * Registra un nuevo usuario.
     * 
     * @param usuarioDto DTO con la información del usuario a registrar.
     * @return El DTO del usuario registrado.
     */
    UsuarioSalidaDto registrarUsuario(UsuarioEntradaDto usuarioDto);

    /**
     * Inicia sesión de un usuario.
     * 
     * @param email    El correo electrónico del usuario.
     * @param password La password del usuario.
     * @return El DTO del usuario autenticado.
     */
    UsuarioSalidaDto iniciarSesion(String email, String password);

    // Métodos para usuarios administradores

    /**
     * Lista todos los usuarios.
     * 
     * @return Una lista de DTOs de todos los usuarios.
     */
    List<UsuarioSalidaDto> listarUsuarios();

    /**
     * Modifica un usuario existente.
     * 
     * @param id         El ID del usuario a modificar.
     * @param usuarioDto DTO con la nueva información del usuario.
     * @return El DTO del usuario modificado.
     */
    UsuarioSalidaDto modificarUsuario(Long id, UsuarioEntradaDto usuarioDto);

    /**
     * Elimina un usuario.
     * 
     * @param id El ID del usuario a eliminar.
     */
    void eliminarUsuario(Long id);

    /**
     * Cambia el rol de un usuario de común a administrador o viceversa.
     * 
     * @param id              El ID del usuario cuyo rol se desea cambiar.
     * @param esAdministrador Indica si el usuario debe ser cambiado a
     *                        administrador.
     * @return El DTO del usuario con el rol actualizado.
     */
    UsuarioSalidaDto cambiarRolUsuario(Long id, boolean esAdministrador);
}
