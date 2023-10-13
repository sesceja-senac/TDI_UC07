// Função para verificar se uma seção está visível na janela de visualização
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para destacar o item de menu correspondente à seção visível
function highlightMenuOnScroll() {
  var sections = document.querySelectorAll('.section');
  var menuItems = document.querySelectorAll('.menu-topo-ul a');

  sections.forEach(function (section, index) {
      if (isElementInViewport(section)) {
          // Remove a classe 'active' de todos os itens de menu
          menuItems.forEach(function (menuItem) {
              menuItem.classList.remove('ativo');
          });

          // Adiciona a classe 'active' ao item de menu correspondente
          menuItems[index].classList.add('ativo');
      }
  });
}

// Chama a função de destaque quando a página é rolada
window.addEventListener('scroll', highlightMenuOnScroll);