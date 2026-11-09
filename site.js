(function(){
var D=document,R=D.documentElement;
var J=function(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
var S=function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
var CH=[{g:"Préambule",items:[
{f:"muqaddima.html",t:"Introduction de l’éditeur"},
{f:"taqriz-fawzan.html",t:"Taqrīẓ de son Éminence le Cheikh Ṣāliḥ ibn Fawzān al-Fawzān, membre du Conseil des grands savants et membre du Comité permanent de l’Iftāʾ"},
{f:"taqriz-madkhali.html",t:"Taqrīẓ de son Éminence le Cheikh, le professeur docteur Rabīʿ ibn Hādī ʿUmayr al-Madkhalī, membre du corps enseignant de l’Université islamique de Médine et ancien président du département de la Sunna en celle-ci"},
{f:"biographie-najmi.html",t:"Biographie du Cheikh Aḥmad ibn Yaḥyā ibn Muḥammad ibn Shubayr an-Najmī"},
{f:"muqaddima-auteur.html",t:"L’Introduction (al-Muqaddima)"},
{f:"avant-propos-auteur.html",t:"Avant-propos de l’auteur [intitulé ajouté : le texte arabe n’en porte pas]"}]},
{g:"Les treize chapitres et la conclusion",items:[
{f:"chapitre-01.html",t:"Chapitre 1 — Exposé de la sagesse dans la création des djinns et des hommes et dans la création de tout l’univers"},
{f:"chapitre-02.html",t:"Chapitre 2 — Exposé de l’adoration pour laquelle Allah a fait exister les djinns et les hommes"},
{f:"chapitre-03.html",t:"Chapitre 3 — Les messagers sont les guides vers Allah, Puissant et Majestueux"},
{f:"chapitre-04.html",t:"Chapitre 4 — Sur la garantie du salut"},
{f:"chapitre-05.html",t:"Chapitre 5 — Exposé de la méthode des messagers dans leur appel à Allah, Puissant et Majestueux"},
{f:"chapitre-06.html",t:"Chapitre 6 — Exposé que la déviation de la méthode des messagers — que les prières d’Allah et Son salut soient sur eux — est un abandon du droit chemin qu’Allah a ordonné de suivre"},
{f:"chapitre-07.html",t:"Chapitre 7 — Exposé que la partisanerie (al-ḥizbiyya) ne relève pas de la voie des prophètes, mais qu’elle est une innovation"},
{f:"chapitre-08.html",t:"Chapitre 8 — Exposé des méfaits de la partisanerie"},
{f:"chapitre-09.html",t:"Chapitre 9 — Exposé de ce qui est critiqué chez les Frères musulmans"},
{f:"chapitre-10.html",t:"Chapitre 10 — Exposé de ce qui est critiqué chez la Jamāʿat at-Tablīgh"},
{f:"chapitre-11.html",t:"Chapitre 11 — Exposé de l’obligation de suivre la voie du Prophète ﷺ dans l’appel à Allah et ailleurs"},
{f:"chapitre-12.html",t:"Chapitre 12 — Sur le blâme des innovations et des innovateurs"},
{f:"chapitre-13.html",t:"Chapitre 13 — Exposé de la récompense de celui qui s’attache à la Sunna"},
{f:"conclusion.html",t:"La conclusion"}]}];
var ALL=[];CH.forEach(function(g){g.items.forEach(function(c){if(c.f)ALL.push(c)})});
var cur=location.pathname.split("/").pop()||"index.html";
var prog=J("mawrid-progress",{}),bms=J("mawrid-bm",[]),fs=J("mawrid-fs",17),th=J("mawrid-theme",null);
R.style.fontSize=fs+"px";if(th)R.setAttribute("data-theme",th);
var pc=function(f){return prog[f]?prog[f].pct:0};
var gl=function(){var s=0;ALL.forEach(function(c){s+=pc(c.f)});return ALL.length?Math.round(s/ALL.length):0};
var ic='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z"/></svg>';
var top=D.createElement("div");top.className="top";
top.innerHTML='<button id="menu" aria-label="Menu">☰</button><a class="brand" href="index.html">La source douce et limpide</a><span class="sp"></span><button id="fm" aria-label="Réduire la police">A<small>−</small></button><button id="fp" aria-label="Agrandir la police">A<small>+</small></button><button id="bmb" aria-label="Marque-pages">'+ic+'</button><button id="theme" aria-label="Clair / sombre">◐</button><i id="pbar"></i>';
D.body.insertBefore(top,D.body.firstChild);
var $=function(i){return D.getElementById(i)};
var side=$("side"),h='<a class="'+(cur=="index.html"?'cur':'')+'" href="index.html">Accueil et sommaire</a>';
CH.forEach(function(g,gi){var open=g.items.some(function(c){return c.f==cur})||gi==1;
h+='<details class="nvg"'+(open?' open':'')+'><summary>'+g.g+'</summary>';
g.items.forEach(function(c){h+=c.f?'<a class="'+(c.f==cur?'cur':'')+'" href="'+c.f+'">'+c.t+'<span class="mini"><i style="width:'+pc(c.f)+'%"></i></span></a>':'<span class="it off">'+c.t+'<small>à venir</small></span>'});
h+='</details>'});
h+='<button class="rs" id="rsg" type="button">Réinitialiser toute la progression</button>';
side.innerHTML=h;
var bp=D.createElement("aside");bp.id="bmp";D.body.appendChild(bp);
function rb(){var x='<h3>Mes marque-pages</h3>';if(!bms.length)x+='<p>Aucun marque-page. Survolez (ou touchez) le ruban à côté d’un paragraphe pour en poser un.</p>';
bms.forEach(function(b,k){var c=ALL.filter(function(a){return a.f==b.f})[0];x+='<div class="bi"><a href="'+b.f+'#u'+b.i+'"><small>'+(c?c.t.slice(0,60):b.f)+'</small>'+b.ex+'…</a><button data-k="'+k+'" aria-label="Supprimer">×</button></div>'});
if(bms.length)x+='<button class="rs" id="bma" type="button" style="width:100%;padding:9px;border:1px solid var(--line);border-radius:8px;background:none">Tout effacer</button>';
bp.innerHTML=x;[].forEach.call(bp.querySelectorAll("[data-k]"),function(b){b.onclick=function(){bms.splice(+b.dataset.k,1);S("mawrid-bm",bms);rb();mk()}});
var a=$("bma");if(a)a.onclick=function(){if(confirm("Effacer tous les marque-pages ?")){bms=[];S("mawrid-bm",bms);rb();mk()}};
[].forEach.call(bp.querySelectorAll(".bi a"),function(a){a.onclick=function(){bp.classList.remove("open");if(a.getAttribute("href").split("#")[0]==cur){setTimeout(go,50)}}})}
$("bmb").onclick=function(){bp.classList.toggle("open")};
$("menu").onclick=function(){side.classList.toggle("open")};
$("theme").onclick=function(){var d=R.getAttribute("data-theme"),dk=d?d=="dark":matchMedia("(prefers-color-scheme:dark)").matches,n=dk?"light":"dark";R.setAttribute("data-theme",n);S("mawrid-theme",n)};
function sf(v){fs=Math.max(13,Math.min(26,v));R.style.fontSize=fs+"px";S("mawrid-fs",fs)}
$("fm").onclick=function(){sf(fs-1)};$("fp").onclick=function(){sf(fs+1)};
$("rsg").onclick=function(){if(confirm("Effacer toute la progression de lecture ?")){S("mawrid-progress",{});location.reload()}};
var m=D.querySelector("main[data-ch]"),us=[];
function mk(){us.forEach(function(u,i){u.classList.toggle("marked",bms.some(function(b){return b.f==cur&&b.i==i}))})}
function go(){var x=location.hash.match(/^#u(\d+)$/);if(x&&us[x[1]]){us[x[1]].scrollIntoView({block:"center"});us[x[1]].classList.add("flash")}}
if(m&&m.dataset.ch!="0"){
us=[].slice.call(m.querySelectorAll(":scope > p, :scope > .q, :scope > blockquote, :scope > h2, :scope > ol, :scope > ul")).filter(function(u){return !u.classList.contains("note")&&!u.classList.contains("bis")&&!u.classList.contains("cen")&&!u.classList.contains("sig")});
var st=prog[cur]||{i:-1,pct:0};
us.forEach(function(u,i){u.id="u"+i;u.classList.add("u");if(i<=st.i)u.classList.add("read");
var b=D.createElement("button");b.className="bm";b.type="button";b.setAttribute("aria-label","Marque-page");b.innerHTML=ic;
b.onclick=function(){var k=-1;bms.forEach(function(x,j){if(x.f==cur&&x.i==i)k=j});if(k>-1)bms.splice(k,1);else{var e=u.querySelector(".fr")||u;bms.push({f:cur,i:i,ex:e.textContent.replace(/\s+/g," ").trim().slice(0,90)})}S("mawrid-bm",bms);mk();rb()};u.appendChild(b)});
var rs=$("resume");if(rs&&st.i>0&&st.i<us.length-1){rs.style.display="inline-block";rs.className="btn ghost";rs.onclick=function(){us[st.i].scrollIntoView({block:"center"})}}
var ix=ALL.map(function(c){return c.f}).indexOf(cur),p='<div class="pager">';
var shT=function(t){t=t.split(' — ')[0].replace(/\s*\[.*$/,'');return t.length>34?t.slice(0,32)+'…':t};
p+=ix>0?'<a class="btn ghost" href="'+ALL[ix-1].f+'">← Précédent<small>'+shT(ALL[ix-1].t)+'</small></a>':'<span></span>';
p+=ix<ALL.length-1?'<a class="btn" href="'+ALL[ix+1].f+'">Suivant →<small>'+shT(ALL[ix+1].t)+'</small></a>':'<a class="btn ghost" href="index.html">Fin du livre — retour au sommaire</a>';
p+='<button class="rsc" id="rsc" type="button">Réinitialiser la progression de ce chapitre</button></div>';
m.insertAdjacentHTML("beforeend",p);
$("rsc").onclick=function(){if(confirm("Effacer la progression de ce chapitre ?")){delete prog[cur];S("mawrid-progress",prog);location.reload()}};
S("mawrid-last",cur);
var tm;addEventListener("scroll",function(){var t=R.scrollHeight-innerHeight;$("pbar").style.width=(t>0?scrollY/t*100:0)+"%";clearTimeout(tm);tm=setTimeout(function(){var j=-1;us.forEach(function(u,i){if(u.getBoundingClientRect().top<innerHeight*.6)j=i});if(j>st.i){st.i=j;st.pct=Math.round((j+1)/us.length*100);prog[cur]=st;S("mawrid-progress",prog);us.forEach(function(u,i){if(i<=j)u.classList.add("read")})}},250)},{passive:true});
mk();setTimeout(go,300)}
var so=$("sommaire");
if(so){var x='';CH.forEach(function(g){x+='<div class="grp">'+g.g+'</div><div class="cards">';g.items.forEach(function(c){x+=c.f?'<a class="card" href="'+c.f+'">'+c.t+'<div class="bar"><i style="width:'+pc(c.f)+'%"></i></div><small>'+(pc(c.f)?'lu à '+pc(c.f)+' %':'non commencé')+'</small></a>':'<div class="card off">'+c.t+'<small>Traduction à venir</small></div>'});x+='</div>'});so.innerHTML=x;
var g=$("gbar");if(g){g.style.width=gl()+"%";$("gtxt").textContent="Progression de lecture : "+gl()+" % du contenu disponible"}
var l=J("mawrid-last",null),go2=$("go");if(go2){go2.href=l||ALL[0].f;go2.textContent=l?"Reprendre la lecture":"Commencer la lecture"}}
if(m&&m.dataset.ch!="0"){
var hd=m.querySelector("header");
if(hd){var w=(m.textContent||"").trim().split(/\s+/).length,mn=Math.max(1,Math.round(w/180));var rt=D.createElement("p");rt.className="rt";rt.textContent="≈ "+(mn>=60?Math.floor(mn/60)+" h "+(mn%60?(mn%60<10?"0":"")+mn%60+" min":""):mn+" min")+" de lecture";hd.appendChild(rt);
var hs=[].slice.call(m.querySelectorAll(":scope > h2"));
if(hs.length>=3){var t='<details class="toc"><summary>Dans ce chapitre — '+hs.length+' sections</summary><ol>';hs.forEach(function(h){var c=h.cloneNode(true);[].forEach.call(c.querySelectorAll("button"),function(x){x.remove()});t+='<li><a href="#'+h.id+'">'+c.innerHTML+'</a></li>'});t+='</ol></details>';hd.insertAdjacentHTML("afterend",t);
[].forEach.call(m.querySelectorAll(".toc a"),function(a){a.onclick=function(){a.closest("details").open=false}})}}}
var bt=D.createElement("button");bt.id="totop";bt.type="button";bt.setAttribute("aria-label","Haut de page");bt.textContent="↑";D.body.appendChild(bt);
bt.onclick=function(){scrollTo({top:0,behavior:"smooth"})};
addEventListener("scroll",function(){bt.classList.toggle("on",scrollY>900)},{passive:true});
rb();
})();