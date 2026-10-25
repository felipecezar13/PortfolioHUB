// Sempre abrir o site no início da página
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
window.scrollTo(0, 0);
// Habilidades (somente as comprovadas no currículo). Ícones: Devicon (CDN); sem ícone, usa emoji.
const D = n => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}.svg`;
const SKILLS = {
  'Linguagens e desenvolvimento': [['Python',D('python/python-original')],['SQL',null,'🗄️'],['C',D('c/c-original')],['HTML',D('html5/html5-original')],['CSS',D('css3/css3-original')],['JavaScript',D('javascript/javascript-original')],['Bash',D('bash/bash-original'),null,true]],
  'Dados e produtividade': [['Bancos de dados SQL',null,'🛢️'],['Análise de dados',null,'📊'],['Microsoft Office',null,'🧑🏻‍💼​'],['Google Workspace',D('google/google-original')]],
  'Design e inteligência artificial': [['Desenvolvedor Web',null,'🎨'],['Figma',D('figma/figma-original')],['Engenharia de prompts com IA',null,'🤖']]
};
const wrap = document.getElementById('skills');
for (const [cat, items] of Object.entries(SKILLS)) {
  const sec = document.createElement('div'); sec.className = 'cat';
  sec.innerHTML = `<h3>${cat}</h3><div class="skill-grid"></div>`;
  const g = sec.querySelector('.skill-grid');
  items.forEach(([nome, src, emoji, inv]) => {
    const c = document.createElement('div'); c.className = 'card skill';
    c.innerHTML = (src ? `<img src="${src}" alt="" loading="lazy"${inv ? ' style="filter:invert(var(--inv,0))"' : ''}>` : `<div class="emoji" aria-hidden="true">${emoji}</div>`) + nome;
    const img = c.querySelector('img');
    if (img) img.onerror = () => { img.outerHTML = '<div class="emoji" aria-hidden="true">🔹</div>'; };
    g.appendChild(c);
  });
  wrap.appendChild(sec);
}
const root = document.documentElement;
// Tema claro/escuro (preferência salva no navegador)
document.getElementById('tema').onclick = () => {
  const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = t;
  try { localStorage.setItem('tema', t); } catch (e) {}
};
// Menu hambúrguer
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.onclick = () => burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });
// Aviso para links de projetos ainda não preenchidos
document.querySelectorAll('.pendente').forEach(a => a.addEventListener('click', e => {
  e.preventDefault(); document.getElementById('aviso').textContent = a.dataset.pendente + ' (edite o href em index.html).';
}));
// Seção ativa no menu e animação de entrada
const links = [...menu.querySelectorAll('a')];
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(l => l.classList.toggle('ativo', l.hash === '#' + en.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section').forEach(s => io.observe(s));
const rv = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); } }), { threshold: .1 });
document.querySelectorAll('.sec .title, .proj, .grid').forEach(el => { el.classList.add('reveal'); rv.observe(el); });
document.getElementById('ano').textContent = new Date().getFullYear();
