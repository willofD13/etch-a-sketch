const container = document.querySelector('.container')

for (i=0; i<256; i++) {
    const div = document.createElement('div')
    div.classList.add('square')
    div.style.width= '48px'
    div.style.height = '48px'
    div.style.border = '1px solid black'
    container.appendChild(div)
}
const divS = document.querySelectorAll('.square')
divS.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('trail');
    });
});