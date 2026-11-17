const scenes=[...document.querySelectorAll('.scene')];
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
 document.documentElement.classList.add('js-motion');
 scenes.slice(1).forEach(s=>s.querySelector('.copy').classList.add('pending'));
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.querySelector('.copy').classList.remove('pending');observer.unobserve(e.target)}}),{threshold:.12});
 scenes.slice(1).forEach(s=>observer.observe(s));
}
const progress=document.querySelector('.reading-progress');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
