package com.backend.webExplora.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.service.IProductoService;

@CrossOrigin (origins = "http://localhost:5173")  
@RestController
@RequestMapping("/api/productos")
@Validated
public class ProductoController {

    @Autowired
    private IProductoService productoService;


    @PostMapping("/registrar")
    public ResponseEntity<ProductoSalidaDto> registrarProducto(@RequestBody @Valid ProductoEntradaDto producto)
    {
        return new ResponseEntity<>(productoService.registrarProducto(producto), HttpStatus.CREATED);
    }
    @GetMapping("/aleatorios")
    public ResponseEntity<List<ProductoSalidaDto>> obtenerProductosAleatorios() {
        List<ProductoSalidaDto> productos = productoService.obtenerProductosAleatorios();
        return ResponseEntity.ok(productos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoSalidaDto> obtenerDetalleProducto(@PathVariable Long id) {
        ProductoSalidaDto producto = productoService.obtenerDetalleProducto(id);
        return ResponseEntity.ok(producto);
    }
    @GetMapping("/categoria/{categoriaId}") 
    public ResponseEntity<List<ProductoSalidaDto>> obtenerProductosPorCategoria(@PathVariable Long categoriaId) {
        List<ProductoSalidaDto> productos = productoService.obtenerProductosPorCategoria(categoriaId);
        return ResponseEntity.ok(productos);
    }
        @GetMapping("/categorias/aleatorias")
    public ResponseEntity<List<CategoriaSalidaDto>> obtenerCategoriasAleatorias() {
        List<CategoriaSalidaDto> categorias = productoService.obtenerCategoriasAleatorias();
        return ResponseEntity.ok(categorias);
    }
    
    }
