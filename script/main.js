const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';
const divContent = '<img src="./icon-images/Icon- cross icon.png" alt=""> <a href="#portfolio"> Portfolio</a> <a href="#aboutMe"> About</a> <a href="#form"> Contact</a>';
menuDiv.innerHTML = divContent;
console.log(menuDiv);
body.appendChild(menuDiv);
const main = document.querySelector('main');

const hamburgerMenu = document.querySelector('.right-side img');
hamburgerMenu.addEventListener('click', () => {
  main.style.filter = 'blur(0.3125rem)';
  menuDiv.style.display= 'flex';
});

const crossIcon = document.querySelectorAll(".menu-content img");
crossIcon[0].addEventListener('click', () => {
  main.style.filter = 'blur(0)';
  menuDiv.style.display = 'none';
});
const itemList = document.querySelectorAll('.menu-content a');

itemList.forEach((item) => {
  item.addEventListener('click', () => {
    main.style.filter = 'blur(0)';
    menuDiv.style.display = 'none';
  });
});