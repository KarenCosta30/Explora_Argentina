package com.backend.webExplora.service;

import java.util.List;

import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
public interface IProductoService {
    List<ProductoSalidaDto> obtenerProductosAleatorios();
    ProductoSalidaDto obtenerDetalleProducto(Long id);
    ProductoSalidaDto registrarProducto(ProductoEntradaDto producto);
}
