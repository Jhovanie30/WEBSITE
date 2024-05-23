let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
  
function updateClock() {
  const startDate = new Date("2024-03-30");
  const currentDate = new Date();

  const difference = currentDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  const years = Math.floor(daysDifference / 365);
  const months = Math.floor((daysDifference % 365) / 30);
  const days = (daysDifference % 365) % 30;
  const decades = Math.floor(years / 10);

  document.getElementById("time").innerText = `YEAR: ${years}  |   MONTHS: ${months}  |   DAYS: ${days}`;
  document.getElementById("time-details").innerText = `HOURS: ${currentDate.getHours()}  |   MINUTES: ${currentDate.getMinutes()}  |   SECONDS: ${currentDate.getSeconds()}`;
  document.getElementById("years").innerText = years;
  document.getElementById("yearCount").innerText = years;
  document.getElementById("monthCount").innerText = months;
  document.getElementById("dayCount").innerText = days;
  document.getElementById("decadeCount").innerText = decades;
  
  const relationshipStatus = document.getElementById("relationshipStatus");
  if (years === 0) {
      relationshipStatus.innerHTML = "MAHAL <br /> Call Sign";
  } else {
      relationshipStatus.innerHTML = "Call <br /> Sign";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  updateClock();
  
  setInterval(updateClock, 1000);
});

const albumsContainer = document.getElementById('albums-container');

const albumsData = [
  { title: 'Me and My Classmates', images: [
      { src: 'Physics.jpg', alt: 'Image 1', description: 'Experiment' },
      { src: 'PE.jpg', alt: 'Image 2', description: 'PE Finals Reporting' },
      { src: 'PE2.jpg', alt: 'Image 3', description: 'PE SecSem Reporting' }
    ]
  },
];

albumsData.forEach(albumData => {
  const albumSection = document.createElement('div');
  albumSection.classList.add('album-section');

  const title = document.createElement('div');
  title.classList.add('album-title');
  title.textContent = albumData.title;
  albumSection.appendChild(title);

  const albumGrid = document.createElement('div');
  albumGrid.classList.add('album');

  albumData.images.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('album-item');
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.textContent = image.description;
    
    item.appendChild(img);
    item.appendChild(overlay);
    
    albumGrid.appendChild(item);
  });

  albumSection.appendChild(albumGrid);
  albumsContainer.appendChild(albumSection);
});