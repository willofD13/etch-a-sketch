const container = document.querySelector('.container')

let input = prompt('Enter your choice!', '')
let userChoice = Number(input);


for (i=0; i<256; i++) {
    const div = document.createElement('div')
    div.classList.add('square')
    div.style.width= 'auto'
    div.style.height = 'auto'
    div.style.border = '1px solid black'
    container.appendChild(div)
}
const divS = document.querySelectorAll('.square')
divS.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('trail');
    });
});

divS.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.classList.remove('trail');
    })
})