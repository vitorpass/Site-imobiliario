// Verifica se há preferência de tema no armazenamento local
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    const body = document.body;
    
    // Verifica o tema atual e inverte
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
}

// Adiciona um ouvinte de evento ao botão de alternância de tema
const modoEscuroButton = document.getElementById("modo-escuro");
modoEscuroButton.addEventListener("click", toggleTheme);

// Define o tema com base nas preferências do usuário ou armazenamento local
if (userPrefersDark || localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    modoEscuroButton.textContent = "Modo Claro";
}