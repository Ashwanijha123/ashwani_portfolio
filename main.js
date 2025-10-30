// Theme toggle (persists to localStorage)
(function(){
  const btns = document.querySelectorAll('#theme-toggle');
  function setTheme(theme){
    if(theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }
  // Initialize
  const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved);

  btns.forEach(b=>b.addEventListener('click', ()=>{
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }));
})();