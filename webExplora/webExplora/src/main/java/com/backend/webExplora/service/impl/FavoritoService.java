package com.backend.webExplora.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.FavoritoSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
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

    
    @Override
public Favorito agregarAFavoritos(Long usuarioId, Long productoId) {
    Usuario usuario = usuarioRepository.findById(usuarioId)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

    Producto producto = productoRepository.findProductoById(productoId);
    if (producto == null) {
        throw new RuntimeException("Producto no encontrado con ID: " + productoId);
    }

    Favorito favorito = new Favorito();
    favorito.setUsuario(usuario);
    favorito.setProducto(producto);
    
    return favoritoRepository.save(favorito);
}


    @Override
public List<FavoritoSalidaDto> listarFavoritosPorUsuario(Long usuarioId) {
    List<Favorito> favoritos = favoritoRepository.findByUsuarioId(usuarioId);
    
    return favoritos.stream()
        .map(favorito -> {
            Producto producto = favorito.getProducto();
            ProductoSalidaDto productoDto = new ProductoSalidaDto(
                producto.getId(),
                producto.getItinerario(),
                producto.getNombre(),
                producto.getDescripcion(),
                producto.getDescripcionLarga(),
                producto.getImagenUrl(),
                producto.getImagenUrl2(),
                producto.getImagenUrl3(),
                producto.getPrecio(),
                producto.getDisponible(),
                producto.getUbicacion(),
                producto.getDetalleItinerario(),
                producto.getCategoria() != null ? new CategoriaSalidaDto(
                    producto.getCategoria().getId(),
                    producto.getCategoria().getNombre(),
                    producto.getCategoria().getUbicacion(),
                    producto.getCategoria().getImagen()
                ) : null
            );
            FavoritoSalidaDto favoritoDto = new FavoritoSalidaDto(
                favorito.getId(),
                favorito.getUsuario().getId(),
                favorito.getProducto().getId(),
                productoDto
            );
            
            return favoritoDto;
        })
        .collect(Collectors.toList());
}

    @Transactional
    public void eliminarFavorito(Long usuarioId, Long productoId) {
        favoritoRepository.deleteByUsuarioIdAndProductoId(usuarioId, productoId);
    }
}
