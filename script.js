// Navegação mobile + melhorias de acessibilidade
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(!btn || !nav) return;

  // Abre e fecha o menu ao clicar no botão
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em qualquer link
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();
