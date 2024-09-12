package com.backend.webExplora.service.impl;

import java.time.LocalDate;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.webExplora.dto.entrada.ProductoEntradaDto;
import com.backend.webExplora.dto.salida.CategoriaSalidaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.entity.Categoria;
import com.backend.webExplora.entity.Producto;
import com.backend.webExplora.entity.Reserva;
import com.backend.webExplora.repository.CategoriaRepository;
import com.backend.webExplora.repository.ProductoRepository;
import com.backend.webExplora.repository.ReservaRepository; // Añadir ReservaRepository
import com.backend.webExplora.service.IProductoService;



@Service
public class ProductoService implements IProductoService {
    @Autowired
    private CategoriaRepository categoriaRepository;


    @Autowired
    private ReservaRepository reservaRepository; 

    private static final Logger logger = LoggerFactory.getLogger(ProductoService.class);
    @Autowired
    private final ProductoRepository productoRepository;
    @Autowired
    private final ModelMapper modelMapper;

    public ProductoService(ProductoRepository productoRepository, ModelMapper modelMapper) {
        this.productoRepository = productoRepository;
        this.modelMapper = modelMapper;
    }

    // Implementación del método para LocalDate y String
    @Override
    public List<ProductoSalidaDto> obtenerProductosDisponibles(LocalDate fechaReserva, String ubicacion) {
        logger.info("Obteniendo productos disponibles para la fecha: {} y ubicación: {}", fechaReserva, ubicacion);

        // Usar ReservaRepository para obtener las reservas
        List<Reserva> reservas = reservaRepository.findByFechaReserva(fechaReserva);

        // Obtener los IDs de los productos reservados
        List<Long> idsReservados = reservas.stream()
                .map(reserva -> reserva.getProducto().getId())
                .collect(Collectors.toList());

        List<Producto> productos = productoRepository.findByUbicacionAndIdNotIn(ubicacion, idsReservados);

        return convertirAProductoSalidaDto(productos);
    }

    // Implementación del método para String y List<Long>
    @Override
    public List<ProductoSalidaDto> obtenerProductosDisponibles(String criterio, List<Long> categoriasIds) {
        logger.info("Obteniendo productos disponibles con criterio: {} y categorías: {}", criterio, categoriasIds);

        // Lógica para obtener productos según el criterio y las categorías
        List<Producto> productos = productoRepository.findByCriterioAndCategoria_IdIn(criterio, categoriasIds);

        return convertirAProductoSalidaDto(productos);
    }

    private List<ProductoSalidaDto> convertirAProductoSalidaDto(List<Producto> productos) {
        return productos.stream()
                .map(producto -> modelMapper.map(producto, ProductoSalidaDto.class))
                .collect(Collectors.toList());
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

        return productosList.stream()
                .map(producto -> {
                    ProductoSalidaDto dto = modelMapper.map(producto, ProductoSalidaDto.class);
                    dto.setCategoria(modelMapper.map(producto.getCategoria(), CategoriaSalidaDto.class)); // Mapear la
                                                                                                          // categoría
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
public void eliminarProducto(Long id) {
    logger.info("Eliminando producto con id: {}", id);
    Producto producto = productoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Producto con id " + id + " no encontrado"));
    productoRepository.delete(producto);
}

    @Override
    public List<CategoriaSalidaDto> obtenerCategoriasAleatorias() {
        List<Categoria> categorias = categoriaRepository.findAll();
        Collections.shuffle(categorias); // Mezcla las categorías para obtener una selección aleatoria.
        return categorias.stream()
                .limit(5)
                .map(categoria -> modelMapper.map(categoria, CategoriaSalidaDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductoSalidaDto> obtenerProductosPorCategoria(Long categoriaId) {
        logger.info("Obteniendo productos para la categoría con id: {}", categoriaId);
        List<Producto> productos = productoRepository.findByCategoriaId(categoriaId);
        return productos.stream()
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
    public ProductoSalidaDto registrarProducto(ProductoEntradaDto productoDto) {
        Producto producto = modelMapper.map(productoDto, Producto.class);

        // Asignar la categoría al producto
        if (productoDto.getCategoria() != null) {
            Categoria categoria = categoriaRepository.findById(productoDto.getCategoria())
                                    .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
            producto.setCategoria(categoria);
        }

        producto = productoRepository.save(producto);

        return modelMapper.map(producto, ProductoSalidaDto.class);
}

@Override
public ProductoSalidaDto asignarCategoria(Long productoId, Long categoriaId) {
    Producto producto = productoRepository.findById(productoId)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    Categoria categoria = categoriaRepository.findById(categoriaId)
            .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
    producto.setCategoria(categoria);
    producto = productoRepository.save(producto);
    return convertirAProductoSalidaDto(producto);
}

private ProductoSalidaDto convertirAProductoSalidaDto(Producto producto) {
    ProductoSalidaDto dto = new ProductoSalidaDto();
    dto.setId(producto.getId());
    dto.setNombre(producto.getNombre());
    dto.setDescripcion(producto.getDescripcion());
    dto.setDescripcionLarga(producto.getDescripcionLarga());
    dto.setImagenUrl(producto.getImagenUrl());
    dto.setImagenUrl2(producto.getImagenUrl2());
    dto.setImagenUrl3(producto.getImagenUrl3());
    dto.setPrecio(producto.getPrecio());
    dto.setDisponible(producto.getDisponible());
    dto.setUbicacion(producto.getUbicacion());
    dto.setItinerario(producto.getItinerario());
    dto.setDetalleItinerario(producto.getDetalleItinerario());
    dto.setCategoria(convertirACategoriaSalidaDto(producto.getCategoria()));
    return dto;
}

private CategoriaSalidaDto convertirACategoriaSalidaDto(Categoria categoria) {
    CategoriaSalidaDto dto = new CategoriaSalidaDto();
    dto.setId(categoria.getId());
    dto.setNombre(categoria.getNombre());
    return dto;
}

} 