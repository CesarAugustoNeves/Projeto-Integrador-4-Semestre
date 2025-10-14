document.addEventListener('DOMContentLoaded', function() {
    // Certifique-se de que o ID do seu formulário no HTML é 'loginForm'
    const form = document.getElementById('loginForm'); 

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Captura os valores dos campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // 2. Cria o objeto JavaScript (os nomes das chaves devem ser IGUAIS aos da Entidade Java)
        const dadosUsuario = {
            email: email,
            senha: password // IMPORTANTE: Deve ser 'senha' para corresponder a Usuario.java
        };

        // 3. Define a URL do seu Endpoint no Spring Boot
        const url = 'http://localhost:8081/api/usuarios';

        // 4. Faz a requisição POST para o servidor
        fetch(url, {
            method: 'POST', // O método correto para enviar novos dados
            headers: {
                // Diz ao servidor que o corpo da requisição é JSON
                'Content-Type': 'application/json' 
            },
            // Converte o objeto JavaScript em uma string JSON para envio
            body: JSON.stringify(dadosUsuario) 
        })
        .then(response => {
            // Verifica se o servidor retornou um código de sucesso (200, 201)
            if (!response.ok) {
                // Se for um erro (4xx ou 5xx), trata a falha
                throw new Error('Falha no cadastro. Servidor retornou: ' + response.status);
            }
            // Converte a resposta (o objeto salvo) de volta para JS
            return response.json(); 
        })
        .then(data => {
            // SUCESSO! O usuário foi salvo no MySQL.
            console.log('Usuário cadastrado com sucesso! ID:', data.id);
            alert('Cadastro realizado com sucesso! Pode fazer o login.');
            form.reset();
        })
        .catch(error => {
            // ERRO! Falha na rede ou erro do servidor.
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao cadastrar. Verifique se o servidor Java está rodando na porta 8081 e se o MySQL está ativo.');
        });
    });
});