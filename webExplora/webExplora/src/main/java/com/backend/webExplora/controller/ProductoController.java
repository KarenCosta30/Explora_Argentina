package com.backend.webExplora.controller;

import com.backend.webExplora.dto.entrada.AsignarCategoriaProducto;
import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.service.IProductoService;

import java.util.List;

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
    @DeleteMapping("/eliminar/{id}")
public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
    productoService.eliminarProducto(id);
    return ResponseEntity.noContent().build();
}

}
