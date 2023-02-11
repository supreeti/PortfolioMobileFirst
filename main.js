const menuselect = document.querySelector('.menuselect');
const openMenu = document.querySelector('.mobile-option');
const closeMenu = document.querySelector('.exit');
const worksSection = document.querySelector('.works_section');
const form = document.querySelector('form');
const button = document.querySelector('#btn_1');
const message = document.querySelector('.erMsg');
const fName = document.querySelector('#name');
const email = document.querySelector('#email');
const textArea = document.querySelector('#text_message');

function open() {
  openMenu.style.display = 'block';
  openMenu.classList.toggle('open');
  menuselect.style.visibility = 'hidden';
  closeMenu.style.visibility = 'visible';
}

function close() {
  openMenu.style.display = 'none';
  openMenu.classList.remove('open');
  menuselect.style.visibility = 'visible';
  closeMenu.style.visibility = 'hidden';
}

menuselect.addEventListener('click', open);
closeMenu.addEventListener('click', close);
openMenu.addEventListener('click', close);

const cardsData = [
  {
    id: 0,
    name: ['Tonic', 'Tonic'],
    description: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and...', 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.'],
    image: ['images/Snapshoot Portfolio.png', 'images/Snapshoot PortfolioDesk1.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/supreeti/PortfolioMobileFirst',
    liveLink: 'https://supreeti.github.io/PortfolioMobileFirst/',
  },

  {
    id: 1,
    name: ['Multi-Post Stories', 'Multi-Post Stories'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.', 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.'],
    image: ['images/Snapshoot Portfolio (1).png', 'images/Snapshoot PortfolioDesk2.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/supreeti/PortfolioMobileFirst',
    liveLink: 'https://supreeti.github.io/PortfolioMobileFirst/',
  },

  {
    id: 2,
    name: ['Tonic', 'Facebook 360'],
    description:
      ['A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.', "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR... Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..."],
    image: ['images/Snapshoot Portfolio (2).png', 'images/Snapshoot Portfoliodesk3.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/supreeti/PortfolioMobileFirst',
    liveLink: 'https://supreeti.github.io/PortfolioMobileFirst/',
  },

  {
    id: 3,
    name: ['Multi-Post Stories', 'Uber Navigation'],
    description:
      ['A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
    image: ['images/Snapshoot Portfolio (3).png', 'images/Snapshoot PortfolioDesk4.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/supreeti/PortfolioMobileFirst',
    liveLink: 'https://supreeti.github.io/PortfolioMobileFirst/',
  },
];

const formChangeEvents = [fName, email, textArea];
formChangeEvents.forEach((eachField) => {
  eachField.addEventListener('change', () => {
    message.innerHTML = '';
    const formDataObject = {
      nameKey: fName.value,
      emailKey: email.value,
      textAreaKey: textArea.value,
    };
    localStorage.setItem('formValues', JSON.stringify(formDataObject));
  });
});

window.addEventListener('load', () => {
  const formInfo = JSON.parse(localStorage.getItem('formValues'));
  if (formInfo) {
    fName.value = formInfo.nameKey;
    email.value = formInfo.emailKey;
    textArea.value = formInfo.textAreaKey;
  } else {
    fName.value = '';
    email.value = '';
    textArea.value = '';
  }
});

const validate = () => {
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  form.addEventListener('submit', (e) => {
    const formInfo = JSON.parse(localStorage.getItem('formValues'));
    const emailAddress = formInfo.emailKey;
    if (!(regx.test(emailAddress))) {
      message.innerHTML = 'Enter valid email address! in lowercase; abc@gmail.com';
      e.preventDefault();
    }
  });
};

button.addEventListener('click', validate());


let displayCard = '';
for (let i = 0; i < cardsData.length; i += 1) {
  displayCard += `
  
  <article class="works_article bg_color7">

            <figure class="figure1">

                <a href="#"><img src="${cardsData[i].image[0]}" alt="Tonic_img"></a>

            </figure>

            <figure class="figure2">

                <a href="#"><img src="${cardsData[i].image[1]}" alt="Nature_img"></a>

            </figure>

            <div class="works_articlediv show1">

                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3> 

                <ul>

                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="images/Counter.png" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li class="textdecoration"><a href="#"><img src="images/Counter.png" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>


                </ul> 


                <p>${cardsData[i].description[0].substring(0, 85)}</p>

                <ul class="gridbox1">

                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[3]}</a></li>

                </ul>

                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>

            </div>

            <div class="works_articlediv show2">

                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3>

                <ul class="ul1">

                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="images/Counter.png" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li><a class="textdecoration" href="#"><img src="images/Counter.png" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>


                </ul>

                <p>${cardsData[i].description[1]}</p>

                <ul class="gridbox1">

                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[2]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[3]}</a></li>

                </ul>

                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>

            </div>

        </article>

  `;
}

worksSection.innerHTML = '';
worksSection.innerHTML = displayCard;

const showPopupBtn = document.querySelectorAll('.seepopup');
const popUpContainer = document.createElement('section');
popUpContainer.className = 'popup_section';
popUpContainer.classList.add('bg_color6');
showPopupBtn.forEach((e) => {
  e.addEventListener('click', () => {
    const btnIndex = e.getAttribute('index');

    const popupEle = `
  <article class="popup_article bg_color7">

<div class="popup_articlediv show1">

    <header class="popup_flex1">

        <h3><a class="textdecoration font1" href="#">${cardsData[btnIndex].name[0]}</a></h3>

        <button type="button" class="close_popup "><img src="images/close.png" alt=""></button>

    </header>

    <ul class="list1">

        <li><a class="textdecoration font2" href="#">CANOPY</a></li>
        <li><a class="textdecoration" href="#"><img src="images/Counter.png" alt="mit_dot"></a></li>
        <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
        <li class="textdecoration"><a href="#"><img src="images/Counter.png" alt="mit_dot"></a></li>
        <li><a class="textdecoration font3" href="#">2015</a></li>


    </ul>

    <figure class="figure1">

        <a href="#"><img src="${cardsData[btnIndex].image[0]}" alt="Tonic_img"></a>

    </figure>

    <article class="desc1">
        <p>${cardsData[btnIndex].description[0]}</p>

        <ul class="gridbox1 gridbox1b">

            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[0]}</a></li>
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[1]}</a></li>
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[2]}</a></li>

        </ul>
    </article>

    <footer>
        <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
            <a href="${cardsData[btnIndex].liveLink}"><span>See Live</span></a>
            <img src="images/live.png" alt="">
        </button>

        <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
        <a href="${cardsData[btnIndex].Source}"><span>See Source</span></a>
            <img src="images/github.jpg" alt="">
        </button>
        
    </footer>

</div>

<div class="popup_articlediv show2">

    <header class="popup_flex1">

        <h3><a class="textdecoration font1" href="#">${cardsData[btnIndex].name[0]}</a></h3>

        <button type="button" class="close_popup"><img src="images/close.png" alt=""></button>

    </header> 

    <ul class="list1 ul1">

        <li><a class="textdecoration font2" href="#">CANOPY</a></li>
        <li><a class="textdecoration" href="#"><img src="images/Counter.png" alt=""></a></li>
        <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
        <li><a class="textdecoration" href="#"><img src="images/Counter.png" alt=""></a></li>
        <li><a class="textdecoration font3" href="#">2015</a></li>

    </ul>

    <figure class="figure2 ">

        <a href="#"><img src="${cardsData[btnIndex].image[1]}" alt="Nature_img"></a>

    </figure>

    <article class="popup_flex2">
        <p class="width80">${cardsData[btnIndex].description[1]}</p>

        <div>

            <ul class="gridbox2">

                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[0]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[1]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[2]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[3]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[4]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[5]}</a></li>

            </ul>

            <footer>
                <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
                <a href="${cardsData[btnIndex].liveLink}"><span>See Live</span></a>
                    <img src="images/live.png" alt="">
                </button>

                <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
                <a href="${cardsData[btnIndex].Source}"><span>See Source</span></a>
                    <img src="images/github.jpg" alt="">
                </button>
            </footer>
            
        </div>
       
    </article>

</div>

</article>
`;

    const body = document.querySelector('body');
    body.appendChild(popUpContainer);
    const popUpBox = document.querySelector('.popup_section');
    popUpBox.innerHTML = popupEle;
    const closePopup = document.querySelectorAll('.close_popup');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
  });
});