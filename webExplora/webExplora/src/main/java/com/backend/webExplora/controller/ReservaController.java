package com.backend.webExplora.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

import com.backend.webExplora.dto.entrada.ReservaEntradaDto;
import com.backend.webExplora.dto.salida.ProductoFechaDto;
import com.backend.webExplora.dto.salida.ProductoSalidaDto;
import com.backend.webExplora.dto.salida.ReservaSalidaDto;
import com.backend.webExplora.entity.Reserva;
import com.backend.webExplora.service.IReservaService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/reservar/")
@Validated
public class ReservaController {

    @Autowired
    private IReservaService reservaService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/registrar")
    public ResponseEntity<ReservaSalidaDto> reservarProducto(@RequestBody @Valid ReservaEntradaDto reservaDto) {
        try {
            ReservaSalidaDto reserva = reservaService.reservarProducto(reservaDto.getUsuarioId(),
                    reservaDto.getProductoId(), reservaDto.getFechaReserva());
            return new ResponseEntity<>(reserva, HttpStatus.CREATED);

        } catch (IllegalStateException e) {

            return new ResponseEntity<>(HttpStatus.CONFLICT);

        } catch (IllegalArgumentException e) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<ReservaSalidaDto> obtenerReservaPorId(@PathVariable Long id) {
        ReservaSalidaDto reserva = reservaService.obtenerReservaPorId(id);
        return ResponseEntity.ok(reserva);
    }


    @GetMapping("/producto/{productoId}")
public ResponseEntity<List<ReservaSalidaDto>> obtenerFechasReservadas(@PathVariable Long productoId) {
    List<Reserva> reservas = reservaService.obtenerReservasPorProducto(productoId);
    List<ReservaSalidaDto> reservasDto = reservas.stream()
        .map(reserva -> new ReservaSalidaDto(reserva.getFechaReserva()))
        .collect(Collectors.toList());
    return ResponseEntity.ok(reservasDto);
}


    @GetMapping("/productosPorFecha/{fecha}")
    public ResponseEntity<List<ProductoFechaDto>> obtenerProductoIdsYFechasPorFecha(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fecha) {
        List<ProductoFechaDto> productosFechas = reservaService.obtenerProductoIdsYFechasPorFecha(fecha);
        return ResponseEntity.ok(productosFechas);
    }

    @GetMapping("/usuario/historial/{usuarioId}")
    public ResponseEntity<List<ReservaSalidaDto>> obtenerHistorialReservasPorUsuario(@PathVariable Long usuarioId) {
        List<Reserva> reservas = reservaService.obtenerReservasPorUsuario(usuarioId);

        List<ReservaSalidaDto> reservasDto = reservas.stream()
            .map(reserva -> {
                ProductoSalidaDto productoDto = modelMapper.map(reserva.getProducto(), ProductoSalidaDto.class);
                return new ReservaSalidaDto(
                    reserva.getId(),
                    reserva.getUsuario().getId(),
                    productoDto,
                    reserva.getFechaReserva());
            })
            .collect(Collectors.toList());

        return ResponseEntity.ok(reservasDto);
    }
    




    // /**
    // * Lista los productos disponibles para una fecha y ubicación específicas.
    // *
    // * @param fechaReserva Fecha de la reserva en formato 'yyyy-MM-dd'.
    // * @param ubicacion Ubicación del producto.
    // * @return Lista de productos disponibles en la ubicación y fecha
    // especificadas.
    // */
    // @GetMapping("/disponibles")
    // public ResponseEntity<List<ProductoSalidaDto>> listarProductosDisponibles(
    // @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    // LocalDate fechaReserva,
    // @RequestParam @NotNull String ubicacion) {

    // List<ProductoSalidaDto> productosDisponibles =
    // reservaService.obtenerProductosDisponibles(fechaReserva, ubicacion);
    // return ResponseEntity.ok(productosDisponibles);

    //  }
}