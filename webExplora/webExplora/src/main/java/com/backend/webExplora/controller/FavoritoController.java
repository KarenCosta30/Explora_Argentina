package com.backend.webExplora.controller;

import java.util.List;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.webExplora.dto.entrada.FavoritoEntradaDto;
import com.backend.webExplora.dto.salida.FavoritoSalidaDto;
import com.backend.webExplora.entity.Favorito;
import com.backend.webExplora.service.impl.FavoritoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/favoritos")
@Validated
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;

 
    @PostMapping("/agregarFavorito")
    public ResponseEntity<FavoritoSalidaDto> agregarAFavoritos(@Valid @RequestBody FavoritoEntradaDto favoritoEntradaDto) {
        Favorito favorito = favoritoService.agregarAFavoritos(
                favoritoEntradaDto.getUsuarioId(),
                favoritoEntradaDto.getProductoId()
        );

        FavoritoSalidaDto responseDto = new FavoritoSalidaDto(
                favorito.getId(),
                favorito.getUsuario().getId(),
                favorito.getProducto().getId(),
                favorito.getProducto().getNombre()
        );

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }


      @GetMapping("/listarFavoritos/{usuarioId}")
    public ResponseEntity<List<FavoritoSalidaDto>> listarFavoritosPorUsuario(@PathVariable Long usuarioId) {
        List<Favorito> favoritos = favoritoService.listarFavoritosPorUsuario(usuarioId);
        List<FavoritoSalidaDto> responseDtos = favoritos.stream()
                .map(f -> new FavoritoSalidaDto(
                        f.getId(),
                        f.getUsuario().getId(),
                        f.getProducto().getId(),
                        f.getProducto().getNombre()))
                .collect(Collectors.toList());
        return new ResponseEntity<>(responseDtos, HttpStatus.OK);
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

