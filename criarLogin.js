document.addEventListener('DOMContentLoaded', function() {
    //Feito por: CESAR AUGUSTO NEVES
    // Garantir de que o ID do formulário no HTML é 'loginForm'
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

        // 3. Define a URL do Endpoint no Spring Boot
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

            // 2. TRATA OUTROS ERROS QUE NÃO SEJAM O 409 E O SUCESSO 201
            if (!response.ok) {
                throw new Error('Falha no cadastro. Servidor retornou: ' + response.status);
            }
            
            // 3. Retorna a resposta JSON para o próximo .then() (SUCESSO)
            return response.json(); 
        })
        .then(data => {
            // SUCESSO! O usuário salvo no db.
            console.log('Usuário cadastrado com sucesso! ID:', data.id);
            alert('Cadastro realizado com sucesso! Pode fazer o login.');
            form.reset();
        })
        .catch(error => {
            // ERRO! utilizando o mesmo email para cadastrar!
            console.error('Erro ao enviar dados:', error);
            alert('E-mail já cadastrado tente outro');
        });
    });
});