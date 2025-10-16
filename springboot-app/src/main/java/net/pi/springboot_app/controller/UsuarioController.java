package net.pi.springboot_app.controller; 

import net.pi.springboot_app.model.Usuario;
import net.pi.springboot_app.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity; // Importação NECESSÁRIA
import org.springframework.web.bind.annotation.*;

import java.util.Optional; // Importação NECESSÁRIA

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://127.0.0.1:5500") 
public class UsuarioController {

    // O Spring injeta o Repositório aqui para que possamos usá-lo
    @Autowired
    private UsuarioRepository usuarioRepository;

    // 1. ENDPOINT DE CADASTRO (Já Existente)
    @PostMapping 
    @ResponseStatus(HttpStatus.CREATED) // Retorna código HTTP 201 (Created)
    public Usuario cadastrarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    
    // 2. NOVO ENDPOINT DE LOGIN
    @PostMapping("/login") // Mapeia para POST /api/usuarios/login
    // O ResponseEntity permite retornar um status HTTP diferente (200 OK ou 401 UNAUTHORIZED)
    public ResponseEntity<Usuario> loginUsuario(@RequestBody Usuario credenciais) {
        
        // 1. Busca o usuário no MySQL usando o método findByEmailAndSenha
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findByEmailAndSenha(
            credenciais.getEmail(), 
            credenciais.getSenha()
        );

        // 2. Verifica se o usuário foi encontrado
        if (usuarioEncontrado.isPresent()) {
            // Se encontrou: Retorna o usuário com status 200 OK
            return new ResponseEntity<>(usuarioEncontrado.get(), HttpStatus.OK); 
        } else {
            // Se não encontrou: Retorna status 401 (Não Autorizado/Credenciais Inválidas)
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}