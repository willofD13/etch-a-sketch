const container = document.querySelector('.container')
const body = document.querySelector('body');

const button = document.createElement('button');
button.textContent= 'Click here.'
body.appendChild(button);

container.style.gridTemplateColumns= 'repeat(16, auto)'
container.style.gridTemplateRows= 'repeat(16, auto)'
      for (i=0; i<256; i++) {
       const div = document.createElement('div')
       div.classList.add('square')
       div.style.border = '1px solid black'
       container.appendChild(div)
       trail()
      }

let input;
let userChoice;
let grid;

function enterChoice() {
    input = prompt('Enter your choice!', '')
    userChoice = Number(input);
    if (userChoice>100) {
        alert ('Sorry, there is a limit to 100 squares per side:(')
        return;
    }
    grid = userChoice*userChoice;
    while (container.firstElementChild) {
      container.firstElementChild.remove()
    }
    gridMaker();
}

button.addEventListener('click' , enterChoice)



function gridMaker() {
    container.style.gridTemplateColumns= `repeat(${userChoice}, auto)`
    container.style.gridTemplateRows= `repeat(${userChoice}, auto)`
      for (i=0; i<grid; i++) {
       const div = document.createElement('div')
       div.classList.add('square')
       div.style.border = '1px solid black'
       container.appendChild(div)
      }
      trail()
}

function trail() {
  const divS = document.querySelectorAll('.square')
    divS.forEach(element => {
      element.addEventListener('mouseover', () => {
        let a = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let c = Math.floor(Math.random()*256);
         element.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
      });
    });
};
