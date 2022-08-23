// ======================================== NAVBAR  ========================================
var hamburgerCheckbox = document.querySelector('.hambuger__checkbox'),
    sideMenu  = document.querySelector('.side__menu-bar'),
    closeSideMenu = document.querySelector('.close__menu-bar-btn'),
    navMenuLink = document.querySelectorAll('.navmenu__link');

hamburgerCheckbox.addEventListener('click', function(e){
  sideMenu.classList = 'side__menu-bar show';
})

closeSideMenu.addEventListener('click', closeSideMenuFunction);

navMenuLink.forEach(function(element){
  element.addEventListener('click', closeSideMenuFunction);
})

function closeSideMenuFunction(e){
  sideMenu.classList = 'side__menu-bar hide';
}



// ======================================== ABOUT SECTION ========================================
var swiper = new Swiper(".about__swiper", {
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
});



// ======================================== SERVICES SECTION ========================================
var openModalBtn = document.querySelectorAll('.viewMore-btn'),
  modalCloseBtn = document.querySelectorAll('.close__btn'),
  modalBox = document.querySelectorAll('.modal__box-services');


openModalBtn.forEach(function (element, index) {
  element.addEventListener('click', function () {
    modalBox[index].style.visibility = 'visible';
    modalBox[index].style.opacity = 1;
  })
})

modalCloseBtn.forEach(function (element) {
  element.addEventListener('click', function () {
    modalBox.forEach(function (e) {
      e.style.visibility = 'hidden';
      e.style.opacity = 0;
    })
  })
})


// ======================================== CHANGE THEME BTN SECTION ========================================

var changeThemeBtn = document.querySelector('.change__theme-btn'),
    changeThemeIcon = document.querySelector('.change_theme-icon');


var selectedTheme = localStorage.getItem('selected-theme');

if(selectedTheme){
  document.body.setAttribute('data-theme', selectedTheme);
}

changeThemeBtn.addEventListener('click', function(){
  var bodyTheme = document.body.getAttribute('data-theme');

  if(bodyTheme.includes('light')){
    document.body.setAttribute('data-theme', 'dark');
  }else{
    document.body.setAttribute('data-theme', 'light');
  }
  localStorage.setItem('selected-theme', document.body.getAttribute('data-theme'));
})



// ======================================== TESTIMONIAL SECTION ========================================
 






// ======================================== NAVBAR ACTIVATED LINK ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    var sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__links a[href*=' + sectionId + ']').classList.add('active-link');
    }else{
      document.querySelector('.nav__links a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}





