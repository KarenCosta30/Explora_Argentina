package com.backend.webExplora.service.impl;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.backend.webExplora.dto.entrada.UsuarioEntradaDto;
import com.backend.webExplora.dto.salida.UsuarioSalidaDto;
import com.backend.webExplora.exceptions.CredencialesIncorrectasException;
import com.backend.webExplora.exceptions.UsuarioNoEncontradoException;
import com.backend.webExplora.entity.Usuario;
import com.backend.webExplora.repository.UsuarioRepository;
import com.backend.webExplora.service.IUsuarioService;

import java.util.List;

@Service
public class ImplUsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UsuarioSalidaDto registrarUsuario(UsuarioEntradaDto usuarioDto) {
        // Busca el usuario por email
        Optional<Usuario> existingUser = usuarioRepository.findByEmail(usuarioDto.getEmail());

        // Verifica si el usuario ya existe
        if (existingUser.isPresent()) {
            throw new RuntimeException("El usuario ya está registrado");
        }

        // Codifica la contraseña
        String encodedPassword = passwordEncoder.encode(usuarioDto.getPassword());

        // Crea un nuevo usuario
        Usuario usuario = new Usuario();
        usuario.setEmail(usuarioDto.getEmail());
        usuario.setPassword(encodedPassword);
        usuario.setNombre(usuarioDto.getNombre());
        usuario.setApellido(usuarioDto.getApellido());

        // Guarda el nuevo usuario en la base de datos
        Usuario savedUsuario = usuarioRepository.save(usuario);

        // Devuelve el DTO del usuario registrado (debes definir cómo construir
        // UsuarioSalidaDto)
        return new UsuarioSalidaDto(savedUsuario);
    }

    @Override
    public UsuarioSalidaDto iniciarSesion(String email, String password) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsuarioNoEncontradoException("Usuario no encontrado"));

        // Verifica la contraseña
        if (!passwordEncoder.matches(password, usuario.getPassword())) {
            throw new CredencialesIncorrectasException("Credenciales incorrectas");
        }

        // Si las credenciales son correctas, devuelve el DTO del usuario
        return new UsuarioSalidaDto(usuario);
    }

    @Override
    public List<UsuarioSalidaDto> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios.stream()
                .map(usuario -> new UsuarioSalidaDto(
                        usuario.getId(),
                        usuario.getNombre(),
                        usuario.getApellido(),
                        usuario.getEmail(),
                        usuario.isEsAdministrador()))
                .toList();
    }

    public UsuarioSalidaDto modificarUsuario(Long id, UsuarioEntradaDto usuarioDto) {
        // Buscar el usuario por ID
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new UsuarioNoEncontradoException("Usuario no encontrado"));

        // Actualizar los datos del usuario
        usuario.setEmail(usuarioDto.getEmail());
        usuario.setNombre(usuarioDto.getNombre());
        usuario.setApellido(usuarioDto.getApellido());

        // Guardar el usuario actualizado en la base de datos
        Usuario updatedUsuario = usuarioRepository.save(usuario);

        // Convertir el usuario actualizado a UsuarioSalidaDto y devolverlo
        return new UsuarioSalidaDto(
                updatedUsuario.getId(),
                updatedUsuario.getNombre(),
                updatedUsuario.getApellido(),
                updatedUsuario.getEmail(),
                updatedUsuario.isEsAdministrador()); // Suponiendo que hay un método isEsAdministrador()
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

        Usuario updatedUsuario = usuarioRepository.save(usuario);

        return new UsuarioSalidaDto(
                updatedUsuario.getId(),
                updatedUsuario.getNombre(),
                updatedUsuario.getApellido(),
                updatedUsuario.getEmail(),
                updatedUsuario.isEsAdministrador()); // Suponiendo que hay un método isEsAdministrador()

    }
}
