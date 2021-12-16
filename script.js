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

const popupBtn = document.querySelectorAll('.popupBtn');

const popupTitle = [];
document.querySelectorAll('div.flex-container > h4').forEach((item) => {
  popupTitle.push(item.textContent);
});

const popupTechno = ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'];

const popupDescrip = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';

const popupLive = 'https://sahar-abdelsamad.github.io/Portfolio-setup-and-mobile-version-skeleton/';

const popupSource = 'https://github.com/Sahar-AbdelSamad/Portfolio-setup-and-mobile-version-skeleton';

const popupObj = {};
for (let i = 0; i < popupTitle.length; i += 1) {
  popupObj[`Project${i}`] = {};
  popupObj[`Project${i}`].title = popupTitle[i];
  popupObj[`Project${i}`].technologies = popupTechno;
  popupObj[`Project${i}`].description = popupDescrip;
  popupObj[`Project${i}`].liveLink = popupLive;
  popupObj[`Project${i}`].sourceLink = popupSource;
}

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
newProjectImg.src = ('Images/project-screenshoot.png');
newProjectImg.alt = ('project image');
popupSection.appendChild(newProjectImg);

const newTitle = document.createElement('h3');
newTitle.className = ('new-title');
popupSection.appendChild(newTitle);

const newBtns = document.createElement('div');
newBtns.className = ('new-btns');
popupSection.appendChild(newBtns);
const firstBtn = document.createElement('a');
firstBtn.href = popupObj.Project0.liveLink;
firstBtn.className = ('button');
firstBtn.textContent = ('See Live');
newBtns.appendChild(firstBtn);
const secondBtn = document.createElement('a');
secondBtn.href = popupObj.Project0.sourceLink;
secondBtn.className = ('button');
secondBtn.textContent = ('See Source');
newBtns.appendChild(secondBtn);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
popupSection.appendChild(newTechno);
for (let i = 0; i < popupTechno.length; i += 1) {
  const newTechnoItem = document.createElement('h6');
  newTechnoItem.textContent = popupObj.Project0.technologies[i];
  newTechno.appendChild(newTechnoItem);
}

const newDescription = document.createElement('p');
newDescription.className = ('new-description');
newDescription.textContent = popupObj.Project0.description;
popupSection.appendChild(newDescription);

const openPopup = (item) => {
  popupSection.classList.toggle('popup');
  popupSection.classList.toggle('popup-section');
  for (let i = 0; i < popupTitle.length; i += 1) {
    if (item.target === popupBtn[i]) {
      newTitle.textContent = popupObj[`Project${i}`].title;
    }
  }
};

popupBtn.forEach((item) => { item.addEventListener('click', openPopup); });

const closeBtn = document.querySelectorAll('.new-close-img');
closeBtn.forEach((item) => { item.addEventListener('click', openPopup); });

// Validate contact form

const formEmail = document.querySelector('#email');
const formBtn = document.querySelector('.button-form');
formBtn.addEventListener('click', ((event) => {
  
  const pattern = /[A-Z]/;
    if (pattern.test(formEmail.value)) {
      failed(event);
    } else {
        success();
      }
}));

function failed(event) {
  event.preventDefault();
  error.classList.add('wrong-email');
  error.classList.remove('error');
}

function success() {
  error.classList.remove('wrong-email');
  error.classList.add('error');
}
