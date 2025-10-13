const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    // 1. Impede o comportamento padrão do formulário, que é recarregar a página
    e.preventDefault();

    // 2. Pega os valores digitados nos campos de e-mail e senha
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 3. Verifica se o e-mail e a senha digitados são iguais aos corretos
    if (email === emailCorreto && password === senhaCorreta) {
        alert('Login realizado com sucesso! Bem-vindo(a).');
    } else {
        alert('E-mail ou senha inválidos. Por favor, tente novamente.');
    }
});
