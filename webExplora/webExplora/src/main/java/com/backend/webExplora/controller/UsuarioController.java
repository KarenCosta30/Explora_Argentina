package com.backend.webExplora.controller;
import java.util.List;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.webExplora.dto.entrada.UsuarioEntradaDto;
import com.backend.webExplora.dto.salida.UsuarioSalidaDto;
import com.backend.webExplora.exceptions.CredencialesIncorrectasException;
import com.backend.webExplora.exceptions.UsuarioNoEncontradoException;
import com.backend.webExplora.service.IUsuarioService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/usuarios")
@Validated
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @PostMapping("/registrar")
    public ResponseEntity<UsuarioSalidaDto> registrarUsuario(@Valid @RequestBody UsuarioEntradaDto usuario) {
        UsuarioSalidaDto usuarioRegistrado = usuarioService.registrarUsuario(usuario);
        return new ResponseEntity<>(usuarioRegistrado, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UsuarioSalidaDto> iniciarSesion(@RequestBody UsuarioEntradaDto usuarioDto) {
        try {
            UsuarioSalidaDto usuario = usuarioService.iniciarSesion(usuarioDto.getEmail(), usuarioDto.getPassword());
            return new ResponseEntity<>(usuario, HttpStatus.OK);
        } catch (CredencialesIncorrectasException e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/listar")
    public ResponseEntity<List<UsuarioSalidaDto>> listarUsuarios() {
        List<UsuarioSalidaDto> usuarios = usuarioService.listarUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<UsuarioSalidaDto> modificarUsuario(
            @PathVariable Long id, @RequestBody UsuarioEntradaDto usuarioDto) {
        try {
            UsuarioSalidaDto usuarioModificado = usuarioService.modificarUsuario(id, usuarioDto);
            return new ResponseEntity<>(usuarioModificado, HttpStatus.OK);
        } catch (UsuarioNoEncontradoException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        try {
            usuarioService.eliminarUsuario(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (UsuarioNoEncontradoException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/cambiar-rol/{id}")
    public ResponseEntity<UsuarioSalidaDto> cambiarRolUsuario(
            @PathVariable Long id, @RequestParam boolean esAdministrador) {
        try {
            UsuarioSalidaDto usuarioActualizado = usuarioService.cambiarRolUsuario(id, esAdministrador);
            return new ResponseEntity<>(usuarioActualizado, HttpStatus.OK);
        } catch (UsuarioNoEncontradoException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
}
