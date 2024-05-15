const navigation = document.querySelector('.top-navigation');
const mobileMenu = document.querySelector('.nav-ul-mobile');
const menuButton = document.querySelectorAll('.btn-tertiary');
const menuItem = document.querySelectorAll('.menu-item');

const openMenu = () => {
  navigation.classList.toggle('top-navigation');
  mobileMenu.classList.toggle('menu-item-new');
};

menuItem.forEach((item) => {
  item.addEventListener('click', openMenu);
});
menuButton.forEach((item) => {
  item.addEventListener('click', openMenu);
});

// modal windows

const workSection = document.querySelector('.selected-projects');

const projects = [
  {
    name: "Little Lemon",
    description: "This Capstone project was built as part of the Meta Front-End Developer Specialization. To demonstrate multiple skills gained, by solving an authentic real-world problem. It's a restaurant's website. We can make a reservation through the website. We can select the reservation date, time, number of diners... We can also Edit or Cancel our booking.",
    image: "./Images/little-lemon.png",
    technologies: ["JavaScript", "Bootstrap", "React", "Redux"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/little-lemon",
    livelink: "https://sahar-abdelsamad.github.io/little-lemon/",
  },
  {
    name: "Space Travelers ",
    description: "This web application retrieves real live data from the SpaceX API. It provides commercial and scientific space travel services, by allowing users to book rockets and join selected space missions.  ",
    image: "./Images/SpaceTravelers.png",
    technologies: ["JavaScript", "Bootstrap", "React", "Redux"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/space-travelers",
    livelink: "https://space-travelers-hub-pair-programming.netlify.app/",
  },
  {
    name: "Delicious Recipes",
    description: "Delicious Recipes is a Webpack project, it retrieves information from two different APIs: Meals DB and Involvement API. The homepage lists some recipes that we can LIKE. The comment button opens a popup window, shows us more information about the recipe, and allows us to leave a comment.",
    image: "./Images/delicious-recipes.png",
    technologies: ["JavaScript", "CSS3", "WebPack", "jest"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/delicious-recipes",
    livelink: "https://sahar-abdelsamad.github.io/delicious-recipes/",
  },
  {
    name: "Leaderboard",
    description: "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. It preserves all data thanks to the external Leaderboard API service. ",
    image: "./Images/Leaderboard.png",
    technologies: ["Javascript", "CSS3", "webpack", "api-rest"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/Leaderboard",
    livelink: "https://sahar-abdelsamad.github.io/Leaderboard/",
  },
  {
    name: "Company Profile",
    description: "This web application retrieves real live data from the Financial modeling prep API. It provides financial information about companies listed on Nasdaq 100 and Dow Jones Market indexes. All these companies are listed on the Home page. Users can filter these companies by searching for a specific company or by choosing one from the dropdown. ",
    image: "./Images/CompanyProfile.png",
    technologies: ["React", "Redux", "Webpack", "CSS3"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/company-profile",
    livelink: "https://sahar-abdelsamad.github.io/company-profile/",
  },
  {
    name: "Catalog of Stuff",
    description: "This is a Ruby Group Capstone Project meant to wrap the concepts of Ruby language and SQL Databases, creating an OOP project based on a UML diagram. It is a console app that will help us keep a record of different types of things we won: books, music albums, and games.",
    image: "./Images/catalog-of-stuff.png",
    technologies: ["Ruby", "PostgreSQL", 'Rspec', 'OOP'],
    sourcelink: "https://github.com/Sahar-AbdelSamad/catalog-of-stuff",
    livelink: "https://github.com/Sahar-AbdelSamad/catalog-of-stuff",
  }
];

for (let i = 0; i < projects.length; i += 1) {
  workSection.innerHTML+=
  `<div class="item">
  <div class="flex-container">
    <img class="project-img" src=${projects[i].image}>
    <h4>${projects[i].name}</h4>
    <div class="tags">
        <h6>${projects[i].technologies[0]}</h6>
        <h6>${projects[i].technologies[1]}</h6>
        <h6>${projects[i].technologies[2]}</h6>
        <h6>${projects[i].technologies[3]}</h6>
    </div>
    <a class="button popupBtn">See Project</a>
  </div>
  </div>`;
};

const popupSection = document.createElement('section');
popupSection.className = ('popup-section');
document.body.appendChild(popupSection);

const newCloseImg = document.createElement('img');
newCloseImg.className = ('new-close-img');
newCloseImg.src = ('Images/close.svg');
newCloseImg.alt = ('Close icon');
popupSection.appendChild(newCloseImg);

const newProjectImg = document.createElement('img');
newProjectImg.className = ('new-project-img');
newProjectImg.alt = ('project image');
popupSection.appendChild(newProjectImg);

const newTitle = document.createElement('h3');
newTitle.className = ('new-title');
popupSection.appendChild(newTitle);

const newBtns = document.createElement('div');
newBtns.className = ('new-btns');
popupSection.appendChild(newBtns);
const firstBtn = document.createElement('a');
firstBtn.className = ('button');
firstBtn.setAttribute('target', '_blank');
firstBtn.textContent = ('See Live');
newBtns.appendChild(firstBtn);
const secondBtn = document.createElement('a');
secondBtn.className = ('button');
secondBtn.setAttribute('target', '_blank');
secondBtn.textContent = ('See Source');
newBtns.appendChild(secondBtn);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
popupSection.appendChild(newTechno);

for (let j = 0; j < 4; j += 1) {
  const newTechnoItem = document.createElement('h6');
  newTechnoItem.classList.add('newtechItem');
  newTechno.appendChild(newTechnoItem);
}

const newDescription = document.createElement('p');
newDescription.className = ('new-description');
popupSection.appendChild(newDescription);

const openPopup = (item) => {
  popupSection.classList.toggle('popup');
  popupSection.classList.toggle('popup-section');
  for (let i = 0; i < projects.length; i += 1) {
    if (item.target === popupBtn[i]) {
      newTitle.textContent = `${projects[i].name}`;
      newProjectImg.src = `${projects[i].image}`;
      newDescription.textContent = projects[i].description;
      const techItem = document.querySelectorAll('.newtechItem');
      for (let j = 0; j < 4; j += 1) {
        techItem[j].textContent = projects[i].technologies[j];
      }
      firstBtn.href = projects[i].livelink;
      secondBtn.href = projects[i].sourcelink;
    }
  }
};

const popupBtn = document.querySelectorAll('.popupBtn');

const closeBtn = document.querySelectorAll('.new-close-img');
closeBtn.forEach((item) => { item.addEventListener('click', openPopup); });

popupBtn.forEach((item) => {
  item.addEventListener('click', openPopup);
});
