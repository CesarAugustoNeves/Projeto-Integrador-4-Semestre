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

        // 6. Para fins de teste no Front-end (sem back-end):
        console.log('--- Dados de Cadastro ---');
        console.log('Email:', email);
        console.log('Senha:', password);
        
        // Simulação de sucesso após a coleta dos dados
        alert('Dados coletados! O processo de cadastro foi simulado.');
        
        // Limpa o formulário (opcional)
        form.reset();
    });
});