package com.backend.webExplora.controller;

import com.backend.webExplora.dto.entrada.AsignarCategoriaProducto;
import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/productos")
@Validated
public class ProductoController {

    @Autowired
    private IProductoService productoService;

    @PutMapping("/asignarCategoria")
    public ResponseEntity<ProductoSalidaDto> asignarCategoria(
            @RequestBody AsignarCategoriaProducto asignarCategoriaProducto) {
        
        ProductoSalidaDto productoDto = productoService.asignarCategoria(
            asignarCategoriaProducto.getProductoId(), 
            asignarCategoriaProducto.getCategoriaId()
        );
        return ResponseEntity.ok(productoDto);
    }


    @PostMapping("/agregarProducto")
    public ResponseEntity<ProductoSalidaDto> agregarProducto(@RequestBody ProductoEntradaDto productoDto) {
        ProductoSalidaDto nuevoProducto = productoService.registrarProducto(productoDto);
        return ResponseEntity.ok(nuevoProducto);
    }
}
