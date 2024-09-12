package com.backend.webExplora.controller;

import java.util.List;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.webExplora.dto.entrada.FavoritoEntradaDto;
import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.FavoritoSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.entity.Favorito;
import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.service.impl.FavoritoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/favoritos")
@Validated
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;
  
    
 
    @PostMapping("/agregarFavorito")
    public ResponseEntity<FavoritoSalidaDto>
    agregarAFavoritos(@Valid @RequestBody FavoritoEntradaDto favoritoEntradaDto) {
    Favorito favorito = favoritoService.agregarAFavoritos(
            favoritoEntradaDto.getUsuarioId(),
            favoritoEntradaDto.getProductoId()
    );
    Producto producto = favorito.getProducto();
    ProductoSalidaDto productoDto = new ProductoSalidaDto(
        producto.getId(),producto.getItinerario(),producto.getNombre(),producto.getDescripcion(),producto.getDescripcionLarga(),
        producto.getImagenUrl(),producto.getImagenUrl2(),producto.getImagenUrl3(),producto.getPrecio(),producto.getDisponible(),
        producto.getUbicacion(),producto.getDetalleItinerario(),producto.getCategoria() != null ? new CategoriaSalidaDto(
        producto.getCategoria().getId(),producto.getCategoria().getNombre(),producto.getCategoria().getUbicacion(),
        producto.getCategoria().getImagen()) : null );
    FavoritoSalidaDto responseDto = new FavoritoSalidaDto(
            favorito.getId(),
            favorito.getUsuario().getId(),
            favorito.getProducto().getId(),
            productoDto
    );

    return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
}



    @GetMapping("/listarFavoritos/{usuarioId}")
    public ResponseEntity<List<FavoritoSalidaDto>> listarFavoritosPorUsuario(@PathVariable Long usuarioId) {
        List<FavoritoSalidaDto> favoritosDto = favoritoService.listarFavoritosPorUsuario(usuarioId);
        return new ResponseEntity<>(favoritosDto, HttpStatus.OK);
    }
    

    @DeleteMapping("/eliminarFavorito")
    public ResponseEntity<String> eliminarFavorito(@RequestBody FavoritoEntradaDto dto) {
        try {
            favoritoService.eliminarFavorito(dto.getUsuarioId(), dto.getProductoId());
            return new ResponseEntity<>("El producto ha sido eliminado de los favoritos.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al eliminar el producto de los favoritos.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

