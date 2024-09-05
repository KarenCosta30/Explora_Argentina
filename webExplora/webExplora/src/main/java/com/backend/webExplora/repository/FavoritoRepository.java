package com.backend.webExplora.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.webExplora.entity.Favorito;
import com.backend.webExplora.entity.Usuario;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Long> {
    List<Favorito> findByUsuario(Usuario usuario);
    List<Favorito> findByUsuarioId(Long usuarioId);
    void deleteByUsuarioIdAndProductoId(Long usuarioId, Long productoId);
}
