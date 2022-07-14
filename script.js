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

const workSection = document.querySelector('.grid-container');

const projects = [
  {
    name: "Rent Me",
    description: "Rent me is a full-stack project, the front-end is a responsive app that lists houses. A user can see the details of a specific house, and reserve it by clicking on the RESERVE button. The user can also access the RESERVATIONS page from the navigation panel, and add or delete a house. The back-end contains documentation for the API made with Postman. ",
    image: "./Images/RentMe.png",
    technologies: ["Ruby on Rails", "PostgreSQL", "React", "Redux"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/house-booking-front-end",
    livelink: "https://rent-me-capstone-project.netlify.app/",
  },
  {
    name: "Budget App",
    description: "The Budget app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. ",
    image: "./Images/BudgetApp.png",
    technologies: ["Ruby on Rails", "Ruby", "PostgreSQL", "Rspec"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/budget-app",
    livelink: "https://my-budget-sahar.herokuapp.com/",
  },
  {
    name: "Recipe App",
    description: "The Recipe allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app allows you to make them public so anyone can access them.  ",
    image: "./Images/RecipeApp.png",
    technologies: ["Ruby on Rails", "Ruby", "PostgreSQL", "Rspec"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/Rails-recipe-app",
    livelink: "https://github.com/Sahar-AbdelSamad/Rails-recipe-app",
  },
  {
    name: "Catalog of Stuff",
    description: "This is a Ruby Group Capstone Project meant to wrap the concepts of Ruby language and SQL Databases, creating an OOP project based on a UML diagram. It is a console app that will help us keep a record of different types of things we won: books, music albums, and games.",
    image: "./Images/catalog-of-stuff.png",
    technologies: ["Ruby", "PostgreSQL", 'Rspec', 'OOP'],
    sourcelink: "https://github.com/Sahar-AbdelSamad/catalog-of-stuff",
    livelink: "https://github.com/Sahar-AbdelSamad/catalog-of-stuff",
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
    name: "Delicious Recipes",
    description: "Delicious Recipes is a Webpack project, it retrieves information from two different APIs: Meals DB and Involvement API. The homepage lists some recipes that we can LIKE. The comment button opens a popup window, shows us more information about the recipe, and allows us to leave a comment.",
    image: "./Images/delicious-recipes.png",
    technologies: ["JavaScript", "CSS", "WebPack", "jest"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/delicious-recipes",
    livelink: "https://sahar-abdelsamad.github.io/delicious-recipes/",
  },
];

for (let i = 0; i < projects.length; i += 1) {
  workSection.innerHTML+=
  `<div class="item">
  <div class="flex-container">
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
newCloseImg.src = ('Images/popup-close.svg');
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
firstBtn.textContent = ('See Live');
newBtns.appendChild(firstBtn);
const secondBtn = document.createElement('a');
secondBtn.className = ('button');
secondBtn.textContent = ('See Source');
newBtns.appendChild(secondBtn);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
popupSection.appendChild(newTechno);

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
      for (let j = 0; j < projects[i].technologies.length; j += 1) {
        const newTechnoItem = document.createElement('h6');
        newTechnoItem.textContent = projects[i].technologies[j];
        newTechno.appendChild(newTechnoItem);
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
