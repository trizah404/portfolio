function toggleMenu(){
  const links = document.getElementById('nav-links');
  const ham = document.getElementById('hamburger');
  links.classList.toggle('open');
  ham.classList.toggle('active');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  });
});
const cursor=document.getElementById('cursor');
const ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
function animRing(){rx+=(mx-rx)*0.1;ry+=(my-ry)*0.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)}
animRing();
document.querySelectorAll('a,button,.project-card,.pill,.stat-box').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='16px';cursor.style.height='16px';ring.style.width='42px';ring.style.height='42px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='8px';cursor.style.height='8px';ring.style.width='26px';ring.style.height='26px'});
});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.07});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

// Floating Math Equations
const overlay = document.getElementById('math-overlay');
const equations = [
  'L = -Σ y log(ŷ)',
  '∂L/∂w = Xᵀ(ŷ - y)',
  'w := w - α∇L',
  'σ(z) = 1/(1+e⁻ᶻ)',
  'ŷ = softmax(Wx + b)',
  'H(p,q) = -Σ p log q',
  'ReLU(x) = max(0,x)',
  'Attention(Q,K,V) = softmax(QKᵀ/√d)V',
  'loss ↓ epoch ↑',
  'z = Wx + b',
  'J(θ) = (1/2m)Σ(hθ(x)-y)²',
  'P(y|x) = exp(s_y)/Σ exp(s_j)',
];
function spawnEq(){
  const el = document.createElement('div');
  el.textContent = equations[Math.floor(Math.random() * equations.length)];
  el.style.cssText = `position:absolute;left:${Math.random()*85+5}%;top:${Math.random()*85+5}%;opacity:0;transition:opacity 2s ease;font-size:${0.7 + Math.random()*0.3}rem;white-space:nowrap;color:rgba(245,196,0,${0.06 + Math.random()*0.06})`;
  overlay.appendChild(el);
  setTimeout(()=> el.style.opacity = '1', 50);
  setTimeout(()=>{
    el.style.opacity = '0';
    setTimeout(()=> el.remove(), 2000);
  }, 3000 + Math.random()*3000);
}
setInterval(spawnEq, 1200);
spawnEq(); spawnEq(); spawnEq();