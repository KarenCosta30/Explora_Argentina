package com.backend.webExplora.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    /**
     * Encuentra un usuario por su correo electrónico.
     * 
     * @param email El correo electrónico del usuario.
     * @return Un Optional que contiene el usuario si se encuentra, vacío si no.
     */
    Optional<Usuario> findByEmail(String email);
    
}
