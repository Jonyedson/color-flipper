const colors = ['#f1f5f8', 'green', 'red', 'blue', 'black']

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    //gerar numeros aleatorios
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber]
}) 

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}