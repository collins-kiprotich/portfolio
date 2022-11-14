let body = document.querySelector("body");
let menuDiv=document.createElement("div");
menuDiv.className="menu-content";
menuDiv.style.display= 'flex';
let divContent = '<img src="./icon-images/Icon- cross icon.png" alt=""> <a href="#portfolio"> Portfolio</a> <a href="#aboutMe"> About</a> <a href="#form"> Contact</a>';
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);