// Боковое меню
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const menuBtn = document.querySelector('.menu');
const sidePanel = document.getElementById('sidePanel');
const blurOverlay = document.getElementById('blurOverlay');
const closeBtn = document.getElementById('closePanel');

menuBtn.addEventListener('click', () => {
    sidePanel.style.display = 'block';
    setTimeout(() => {
        sidePanel.classList.add('active');
        blurOverlay.classList.add('active');
    }, 10);
});

function closePanel() {
    sidePanel.classList.remove('active');
    blurOverlay.classList.remove('active');
    setTimeout(() => {
        sidePanel.style.display = 'none';
    }, 300);
}

closeBtn.addEventListener('click', closePanel);
blurOverlay.addEventListener('click', closePanel);

// Текст в боковом меню (yearContent)
const menuItems = document.querySelectorAll('.menu-years');
const yearTexts = document.querySelectorAll('.year-text');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const year = item.getAttribute('data-year');

        yearTexts.forEach(text => {
            text.classList.toggle('active', text.getAttribute('data-year') === year);
        });
    });
});

// Горизонтальный скролл по десятилетиям
const container = document.getElementById('container');
const menuYears = document.querySelectorAll('.menu-year');

menuYears.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        const targetDecade = menuItem.getAttribute('data-year');

        let targetIndex;
        switch(targetDecade) {
            case '1990': targetIndex = 0; break;
            case '2000': targetIndex = 1; break;
            case '2010': targetIndex = 2; break;
            case '2020': targetIndex = 3; break;
            default: targetIndex = 0;
        }

        container.scrollTo({
            left: targetIndex * window.innerWidth,
            behavior: 'smooth'
        });
    });
});

// Кнопки прокрутки (если понадобятся)
function scrollLeft() {
    container.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
}

function scrollRight() {
    container.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
    });
}


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.text1, .frame12, .photo').forEach(el => {
      el.classList.add('animate-on-scroll');
    });
  });
