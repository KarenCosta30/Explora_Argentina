package com.backend.webExplora.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.webExplora.dto.entrada.UsuarioEntradaDto;
import com.backend.webExplora.dto.salida.UsuarioSalidaDto;
import com.backend.webExplora.entity.Usuario;
import com.backend.webExplora.exceptions.CredencialesIncorrectasException;
import com.backend.webExplora.exceptions.UsuarioNoEncontradoException;
import com.backend.webExplora.repository.UsuarioRepository;
import com.backend.webExplora.service.IUsuarioService;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public UsuarioSalidaDto registrarUsuario(UsuarioEntradaDto usuarioDto) {
        Usuario usuario = modelMapper.map(usuarioDto, Usuario.class);
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        Usuario usuarioRegistrado = usuarioRepository.save(usuario);
        return modelMapper.map(usuarioRegistrado, UsuarioSalidaDto.class);
    }

    @Override
    public UsuarioSalidaDto iniciarSesion(String email, String password) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            if (passwordEncoder.matches(password, usuario.getPassword())) {
                return modelMapper.map(usuario, UsuarioSalidaDto.class);
            }
        }
        throw new CredencialesIncorrectasException("Credenciales incorrectas");
    }

    @Override
    public List<UsuarioSalidaDto> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios.stream()
                .map(usuario -> modelMapper.map(usuario, UsuarioSalidaDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public UsuarioSalidaDto modificarUsuario(Long id, UsuarioEntradaDto usuarioDto) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNoEncontradoException("Usuario no encontrado"));
        modelMapper.map(usuarioDto, usuario);
        if (usuarioDto.getPassword() != null) {
            usuario.setPassword(passwordEncoder.encode(usuarioDto.getPassword()));
        }
        Usuario usuarioModificado = usuarioRepository.save(usuario);
        return modelMapper.map(usuarioModificado, UsuarioSalidaDto.class);
    }

    @Override
    public void eliminarUsuario(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new UsuarioNoEncontradoException("Usuario no encontrado");
        }
        usuarioRepository.deleteById(id);
    }

    @Override
    public UsuarioSalidaDto cambiarRolUsuario(Long id, boolean esAdministrador) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNoEncontradoException("Usuario no encontrado"));
        usuario.setEsAdministrador(esAdministrador);
        Usuario usuarioActualizado = usuarioRepository.save(usuario);
        return modelMapper.map(usuarioActualizado, UsuarioSalidaDto.class);
    }
}
