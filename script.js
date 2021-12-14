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
popupBtn.forEach((item) => { item.addEventListener('click', openPopup)});

const popupTitle = [];
document.querySelectorAll('div.flex-container > h4').forEach((item) => { popupTitle.push(item.textContent);
});

const popupTechno = ["Ruby on rails", "CSS", "JavaScript", "HTML"];

const popupDescrip = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

const popupObj = {};
for ( let i=0; i < popupTitle.length;i++){
  popupObj[`Project${i}`] = {};
  popupObj[`Project${i}`].title = popupTitle[i];
  popupObj[`Project${i}`].technologies = popupTechno;
  popupObj[`Project${i}`].description = popupDescrip;
}

const popupSection = document.createElement('section');
document.body.appendChild(popupSection);
popupSection.className = ('popup-section');

const newCloseImg = document.createElement('img');
newCloseImg.className = ('new-close-img');
newCloseImg.src = ('Images/popup-close.svg');
newCloseImg.alt = ('Close icon');
popupSection.appendChild(newCloseImg);

const newProjectImg = document.createElement('img');
newProjectImg.className = ('new-project-img');
newProjectImg.src = ('Images/popup-project.svg');
newProjectImg.alt = ('project image');
popupSection.appendChild(newProjectImg);

const newTitle = document.createElement('h3');
newTitle.className = ('new-title');
popupSection.appendChild(newTitle);

const newBtns = document.createElement('ul');
newBtns.className = ('new-btns');
popupSection.appendChild(newBtns);
const firstBtn = document.createElement('li');
firstBtn.className = ('new-btns-item');
firstBtn.innerHTML = ('<button class="button"><a href="https://sahar-abdelsamad.github.io/Portfolio-setup-and-mobile-version-skeleton/">See Live</a></button>')
newBtns.appendChild(firstBtn);
const secondBtn = document.createElement('li');
secondBtn.className = ('new-btns-item');
secondBtn.innerHTML = ('<button class="button"><a href="https://github.com/Sahar-AbdelSamad/Portfolio-setup-and-mobile-version-skeleton">See Source</a></button>')
newBtns.appendChild(secondBtn);

const newTechno = document.createElement('ul');
newTechno.className = ('new-techno');
popupSection.appendChild(newTechno);
const newTechnoItem1 = document.createElement ('li');
newTechnoItem1.className = ('new-techno-item');
newTechnoItem1.textContent = popupTechno[0];
newTechno.appendChild(newTechnoItem1);
const newTechnoItem2 = document.createElement ('li');
newTechnoItem2.className = ('new-techno-item');
newTechnoItem2.textContent = popupTechno[1];
newTechno.appendChild(newTechnoItem2);
const newTechnoItem3 = document.createElement ('li');
newTechnoItem3.className = ('new-techno-item');
newTechnoItem3.textContent = popupTechno[2];
newTechno.appendChild(newTechnoItem3);
const newTechnoItem4 = document.createElement ('li');
newTechnoItem4.className = ('new-techno-item');
newTechnoItem4.textContent = popupTechno[3];
newTechno.appendChild(newTechnoItem4)

const newDescription = document.createElement('p');
newDescription.className = ('new-description');
newDescription.textContent = popupObj.Project0.description;
popupSection.appendChild(newDescription);

function openPopup (item) {
    popupSection.classList.toggle('popup');
    popupSection.classList.toggle('popup-section');
for (let i=0; i< popupTitle.length ; i++){
  if (item.target===popupBtn[i]){
    newTitle.textContent = popupObj[`Project${i}`].title;
    }
}
}

const closeBtn = document.querySelectorAll('.new-close-img').forEach((item) => { item.addEventListener('click', openPopup)});