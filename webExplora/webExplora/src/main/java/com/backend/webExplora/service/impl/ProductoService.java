package com.backend.webExplora.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.repository.ProductoRepository;
import com.backend.webExplora.service.IProductoService;
import com.backend.webExplora.utils.JsonPrinter;

@Service
public class ProductoService implements IProductoService {

    private static final Logger logger = LoggerFactory.getLogger(ProductoService.class);
    private final ProductoRepository productoRepository;
    private final ModelMapper modelMapper;

    public ProductoService(ProductoRepository productoRepository, ModelMapper modelMapper) {
        this.productoRepository = productoRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ProductoSalidaDto> obtenerProductosAleatorios() {
        logger.info("Obteniendo lista de productos aleatorios");
        
        List<Producto> productos = productoRepository.findAll();  
        Set<Producto> productosUnicos = new TreeSet<>(Comparator.comparing(Producto::getId)); 
        productosUnicos.addAll(productos); 
        List<Producto> productosList = new ArrayList<>(productosUnicos); 
        
        productosList.sort(Comparator.comparing(Producto::getId));  
        Collections.shuffle(productosList); 
        
        return productosList.stream().limit(10)  
                .map(producto -> modelMapper.map(producto, ProductoSalidaDto.class))  
                .collect(Collectors.toList()); 
    }
    


    @Override
    public ProductoSalidaDto obtenerDetalleProducto(Long id) {
        logger.info("Obteniendo detalles del producto con id: {}", id);
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Producto con id " + id + " no encontrado"));
        return modelMapper.map(producto, ProductoSalidaDto.class);
    }
    

    @Override
    public ProductoSalidaDto registrarProducto(ProductoEntradaDto producto) {
        logger.info("ProductoEntradaDto: {}", JsonPrinter.toString(producto));
        Producto productoEntidad = modelMapper.map(producto, Producto.class);
        Producto productoEntidadConId = productoRepository.save(productoEntidad);
        ProductoSalidaDto productoSalidaDto = modelMapper.map(productoEntidadConId, ProductoSalidaDto.class);
        logger.info("ProductoSalidaDto: {}", JsonPrinter.toString(productoSalidaDto));
        return productoSalidaDto;
    }
}
