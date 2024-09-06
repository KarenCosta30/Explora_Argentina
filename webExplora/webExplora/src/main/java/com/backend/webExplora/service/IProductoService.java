package com.backend.webExplora.service;

import java.time.LocalDate;
import java.util.List;

import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;

public interface IProductoService {
    List<ProductoSalidaDto> obtenerProductosAleatorios();
    ProductoSalidaDto obtenerDetalleProducto(Long id);
    ProductoSalidaDto registrarProducto(ProductoEntradaDto producto);
    List<ProductoSalidaDto> obtenerProductosPorCategoria(Long categoriaId);
     List<CategoriaSalidaDto> obtenerCategoriasAleatorias();
      /**
     * Obtiene los productos disponibles en una ubicación específica y excluye los productos con los IDs proporcionados.
     *
     * @param ubicacion La ubicación donde se buscan los productos.
     * @param idsExcluidos Lista de IDs de productos que deben ser excluidos de la búsqueda.
     * @return Lista de productos disponibles.
     */
    List<ProductoSalidaDto> obtenerProductosDisponibles(String ubicacion, List<Long> idsExcluidos);
    List<ProductoSalidaDto> obtenerProductosDisponibles(LocalDate fechaReserva, String ubicacion);
    ProductoSalidaDto asignarCategoria(Long productoId, Long categoriaId);
    void eliminarProducto(Long id);
     
}
