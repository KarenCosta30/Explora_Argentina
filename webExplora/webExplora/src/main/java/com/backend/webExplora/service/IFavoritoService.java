package com.backend.webExplora.service;

import java.util.List;

import com.backend.webExplora.dto.salida.FavoritoSalidaDto;
import com.backend.webExplora.entity.Favorito;

public interface IFavoritoService {

    Favorito agregarAFavoritos(Long usuarioId, Long productoId);
    List<FavoritoSalidaDto> listarFavoritosPorUsuario(Long usuarioId);
    void eliminarFavorito(Long usuarioId, Long productoId);
}

