const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';
const divContent = '<img src="./icon-images/Icon- cross icon.png" alt=""> <a href="#portfolio"> Portfolio</a> <a href="#aboutMe"> About</a> <a href="#form"> Contact</a>';
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);
const main = document.querySelector('main');

const hamburgerMenu = document.querySelector('.right-side img');
hamburgerMenu.addEventListener('click', () => {
  main.style.filter = 'blur(0.3125rem)';
  menuDiv.style.display = 'flex';
});

const crossIcon = document.querySelectorAll('.menu-content img');
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

const projects = [
  {
    id: 'project-1',
    h1: 'Tonic',
    subtitles: ['canopy', '.', 'BackEndDev', '.', '2015'],
    image: 'snapshotimages/Snapshoot-Portfolio.png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-2',
    h1: 'Multi-Post Stories',
    subtitles: ['canopy', '.', 'BackEndDev', '.', '2015'],
    image: 'snapshotimages/Snapshoot Portfolio (1).png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-3',
    h1: 'Tonic',
    subtitles: ['canopy', '.', 'BackEndDev', '.', '2015'],
    image: 'snapshotimages/Snapshoot Portfolio (2).png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-4',
    h1: 'Multi-Post Stories',
    subtitles: ['canopy', '.', 'BackEndDev', '.', '2015'],
    image: 'snapshotimages/Snapshoot Portfolio (3).png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-5',
    h1: 'Tonic',
    subtitles: ['canopy', '.', 'BackEndDev', '.', '2015'],
    image: 'dektopimages/Snapshoot Portfolio.png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootsrap'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-6',
    h1: 'Multi-Post Stories',
    subtitles: ['Facebook', '.', 'Full Stack Dev', '.', '2015'],
    image: 'dektopimages/Snapshoot Portfolio2.png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootsrap'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-7',
    h1: 'Facebook 360',
    subtitles: ['Facebook', '.', 'Full Stack Dev', '.', '2015'],
    image: 'dektopimages/Snapshoot Portfolio3.png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootsrap'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
  {
    id: 'project-8',
    h1: 'Uber Navigation',
    subtitles: ['canopy', '.', 'Lead Developer', '.', '2015'],
    image: 'dektopimages/Snapshoot Portfolio4.png',
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    languages: ['html','css','javascript','github','ruby','Bootsrap'],
    btn1: 'https://collins-kiprotich.github.io/',
    btn2: 'https://github.com/collins-kiprotich/portfolio.git',
  },
];

const myProjectArray = [];

projects.forEach((item) => {
  let subtitlesList = '';
 item.subtitles.forEach((item1) => {
    subtitlesList += `<li>${item1}</li>`;
  });
  let languageList = '';
  item.languages.forEach((item1) => {
    languageList += `<li>${item1}</li>`;
  })
    
  const projectPopupContent = `<div class="pop-window">
    <div class="headline-cross">
      <h2>${item.h1}</h2>
      <div class="cross">X</div>
    </div>
    <div class="subtitles">
      <div class="subtitle-item">${subtitlesList}</div>
    </div>
    <div class="mobile-image">
      <img src="${item.image}" alt="">
      </div>
      <div class="para-lang-btn">
      <p class="mobile-paragraph">
        ${item.p}
      </p>
      <div class="lang-btn">
      <div class="languages">
      <ul>${languageList}</ul>
    </div>
    <div cla ss="buttons">
    <a href="${item.btn1}" target="_blank"><button id="see-live-btn"> See live <img src="popimages/Icon.png" alt="po"></button></a>
    <a href="${item.btn2}" target="_blank"><button id="see-source-btn"> See Source <img src="popimages/Vector.png" alt="po"></button></a>
      </div>
      </div>
    </div>
  </div>`;
  myProjectArray.push(projectPopupContent);
});

for (let i = 0; i < projects.length; i += 1) {
    projects[i].id =document.createElement('div');
    projects[i].id.className='popup-container';
    projects[i].id.innerHTML= myProjectArray[i];
    body.appendChild(projects[i].id);
  };

  let projectButtons = document.querySelectorAll('.see-project-button');
  let projectList = document.querySelectorAll('.popup-container');

  for (let i = 0; i<projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => {
    projectList[i].style.display = 'flex';
    document.getElementsByClassName('.popwindow');
        main.style.filter = 'blur(8px)';
  });
}

const crossList = document.querySelectorAll('.cross');
for (let i = 0; i < crossList.length; i += 1) {
  crossList[i].addEventListener('click', () => {
    projectList[i].style.display = 'none';
    main.style.filter='blur(0)';
  });
}
