package com.backend.webExplora.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.webExplora.entity.Favorito;
import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Usuario;
import com.backend.webExplora.repository.FavoritoRepository;
import com.backend.webExplora.repository.ProductoRepository;
import com.backend.webExplora.repository.UsuarioRepository;
import com.backend.webExplora.service.IFavoritoService;

@Service
public class FavoritoService implements IFavoritoService  {

    @Autowired
    private FavoritoRepository favoritoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProductoRepository productoRepository;

    public Favorito agregarAFavoritos(Long usuarioId, Long productoId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Producto producto = productoRepository.findById(productoId)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        Favorito favorito = new Favorito();
        favorito.setUsuario(usuario);
        favorito.setProducto(producto);
        
        return favoritoRepository.save(favorito);
    }

    @Override
    public List<Favorito> listarFavoritosPorUsuario(Long usuarioId) {
        return favoritoRepository.findByUsuarioId(usuarioId);
    }
    @Transactional
    public void eliminarFavorito(Long usuarioId, Long productoId) {
        favoritoRepository.deleteByUsuarioIdAndProductoId(usuarioId, productoId);
    }
}
