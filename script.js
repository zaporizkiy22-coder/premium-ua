
document.querySelectorAll('.menu-toggle').forEach(btn=>btn.addEventListener('click',()=>{
 const nav=document.querySelector('.navlinks'); nav.classList.toggle('open');
}));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.remove('open')));
