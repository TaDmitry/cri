"use strict";const e=document.querySelector(".parallax"),t=document.querySelector(".images-parallax__background"),n=document.querySelectorAll(".structure__nav-ul-li");let o=0,d=0,i=0,a=0;function c(){var e=document.getElementById("parallax__h3");e?window.innerWidth<=510?e.innerHTML="ЦРИ":e.innerHTML="Центр <br> Развития <br> Информатизации":console.error("Элемент <h3 id='parallax__h3'> не найден")}!function e(){o+=.05*(i-o),d+=.05*(a-d),t.style.cssText=`transform: translate(${o/40}%,${d/40}%);`,requestAnimationFrame(e)}(),e.addEventListener("mousemove",(function(t){const n=e.offsetWidth,o=e.offsetHeight,d=t.pageX-n/2,c=t.pageY-o/2;i=d/n*100,a=c/o*100})),n.forEach((e=>{e.addEventListener("click",(()=>{n.forEach((e=>e.classList.remove("structure__nav-ul-li-activated"))),e.classList.add("structure__nav-ul-li-activated")}))})),c(),window.addEventListener("resize",c);const l=document.getElementById("main-menu__burgers"),r=document.getElementById("main-menu__list");l.addEventListener("click",(()=>{l.classList.toggle("close"),r.classList.toggle("overlay")})),document.querySelector("nav").addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest("a");if(t){const e=t.getAttribute("href")?.substring(1),n=document.getElementById(e),o=n?.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:o-this.offsetHeight,behavior:"smooth"})}}));const s=localStorage.getItem("selectedLanguage");s&&(document.getElementById("selectedLanguage").innerText=s);const u=document.getElementById("mainMenu"),g=document.getElementById("languages");function m(){window.innerWidth<=768&&(g.style.display="none")}u.addEventListener("mouseover",(function(){window.innerWidth>768&&(g.style.display="block")})),u.addEventListener("mouseout",(function(){window.innerWidth>768&&(g.style.display="none")})),u.addEventListener("click",(function(){window.innerWidth<=768&&(g.style.display="block"===g.style.display?"none":"block")})),window.addEventListener("click",(function(e){e.target===u||u.contains(e.target)||e.target===g||g.contains(e.target)||m(),"ruLanguage"!==e.target.id&&"enLanguage"!==e.target.id&&"kkLanguage"!==e.target.id||m()}));const y=document.getElementById("ruLanguage"),E=document.getElementById("enLanguage"),f=document.getElementById("kkLanguage");function v(e){localStorage.setItem("selectedLanguage",e),document.getElementById("selectedLanguage").innerText=e}y.addEventListener("click",(function(){v("RU")})),E.addEventListener("click",(function(){v("EN")})),f.addEventListener("click",(function(){v("KK")})),document.getElementById("structure__nav-ul-guide").addEventListener("click",(function(){document.getElementById("structure__content-guide").style.display="flex",document.getElementById("structure__content-departments").style.display="none"})),document.getElementById("structure__nav-ul-departments").addEventListener("click",(function(){document.getElementById("structure__content-departments").style.display="block",document.getElementById("structure__content-guide").style.display="none"})),window.onload=function(){function e(){for(var e=document.getElementsByClassName("telephone"),t=window.innerWidth,n=0;n<e.length;n++)t<=768?e[n].href="tel:+77777777777":e[n].removeAttribute("href")}e(),window.addEventListener("resize",e)};
//# sourceMappingURL=Main-dist.js.map