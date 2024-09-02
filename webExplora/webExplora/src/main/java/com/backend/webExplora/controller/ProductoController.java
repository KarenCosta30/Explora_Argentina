package com.backend.webExplora.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.service.IProductoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/productos")
@Validated
public class ProductoController {

    @Autowired
    private IProductoService productoService;

    @PostMapping("/registrar")
    public ResponseEntity<ProductoSalidaDto> registrarProducto(@RequestBody ProductoEntradaDto productoDto) {
        ProductoSalidaDto productoSalidaDto = productoService.registrarProducto(productoDto);
        return ResponseEntity.ok(productoSalidaDto);
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

    @GetMapping("/disponibles")
    public ResponseEntity<List<ProductoSalidaDto>> obtenerProductosDisponibles(
            @RequestParam String ubicacion,
            @RequestParam List<Long> idsExcluidos) {
        List<ProductoSalidaDto> productos = productoService.obtenerProductosDisponibles(ubicacion, idsExcluidos);
        return ResponseEntity.ok(productos);
}
}