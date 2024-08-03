const showProjectsButton = document.querySelector('.btn-show-project');
const projectHidden = document.querySelectorAll('.projects:not(.active)');

showProjectsButton.addEventListener('click', () => {
    /* ----- Adicionar a classe "ativo" nos projetos escondidos -----*/
    projectHidden.forEach(projectHidden => {
        projectHidden.classList.add('active');
    });

    /* ----- Esconder o botão de "Mostrar Mais" ------*/
    showProjectsButton.classList.add("hidden");
});