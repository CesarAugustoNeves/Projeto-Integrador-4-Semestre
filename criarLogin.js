//DIA 10/10|NOME:Cesar Augusto neves|HORA INICIO: 11:06 HORA FINAL DO DIA:11:30
document.addEventListener('DOMContentLoaded', function() {
    // 1. Pega o formulário pelo seu ID
    const form = document.getElementById('loginForm');

    // 2. Adiciona um evento para quando o formulário for enviado
    form.addEventListener('submit', function(event) {
        // 3. Impede o comportamento padrão de envio do formulário, que recarregaria a página
        event.preventDefault();

        // 4. Pega os valores dos campos de input pelo ID
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const email = emailInput.value;
        const password = passwordInput.value;

        // 6. Testar no Front-end
        console.log('--- Dados de Cadastro ---');
        console.log('Email:', email);
        console.log('Senha:', password);
        
        // Mensagem de sucesso
        alert('Dados cadastrados!');
        
        // Limpa o formulário
        form.reset();
    });
});