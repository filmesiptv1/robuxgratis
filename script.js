/* Navegação mobile + melhorias de acessibilidade */
// Dica: salve este conteúdo em um arquivo separado chamado script.js
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Fechar ao clicar em um link
  nav.querySelectorAll('a').forEach(a => 
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
})();
