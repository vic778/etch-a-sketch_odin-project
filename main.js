const container = document.querySelector('container');
const colorButtons = document.querySelectorAll('color-choice');
const userColorPicker = document.querySelector('#input-color');
const clearButton = document.querySelector('.clear');
var slider = document.querySelector('#sizeRange');
var color = 'black'; 

function creatGrid (gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i ++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplaceColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplaceRows = `repeat(${gridNumber} 1fr)`;
        container.insertAdjacentElement('beforeend' , gridItem);
    }
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    switch (color) {
        case 'rainbow' :
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%)`;  
            this.classList.remove('gray');
            break;
        case 'gray' :
            if (this.style.backgroundColor.Math(/rgba)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0,0,0, ${currentOpacity + 0.1})`;
                    this.classList.add('gray');
                }
            } else if (this.classList == 'gray' && this.style.backgroundColor =='rgba(0,0,0,)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0,0,0,0.1)' ; 
            }
            break;
        case 'eraser' :
            this.style.backgroundColor = '#ffffff';
            this.classList.remove('gray');
            break;
        case 'black' :
            this.style.backgroundColor = '#000000' ;
            this.classList.remove('gray');
            break;
        default :
            this.style.backgroundColor = color;
            this.classList.remove('gray');
            break;
    }
}

//clean button
function eraseAllcolor() {
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.style.backgroundColor = '#ffffff');
}

//update color variable when a color button is clicked
function changeColor(event) {
    switch ( event.target.dataset.color) {
        case 'rainbow':
            color = 'rainbow' ; 
            break;
        case 'eraser' :
            color = 'gray' ;
        case 'eraser' : 
            color = 'eraser' ;
            break;
        default :
            color = 'black' ;
            break;
       
    }
}

function pixelSize () {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.remove());
    creatGrid(slider.value);
}

function userColorSelection(event) {
    color = event.target.value;
}

function buttonHover() {
    this.style.border = '1px solid #ffffff';
}

function buttonStandar() {
    this.style.border = '1px solid #FF0000';
}

//on page load - default size
creatGrid(10);

//event listeners
clearButton.addEventListener('click' , eraseAllcolor);
clearButton.addEventListener('mouseover', buttonHover);
clearButton.addEventListener('mouseout', buttonStandar);
colorButtons.forEach(colorButtons => colorButtons.addEventListener('click', changeColor));
colorButtons.forEach(colorButtons => colorButtons.addEventListener('mouseover', buttonHover));
colorButtons.forEach(colorButtons => colorButtons.addEventListener('mouseout', buttonStandard));
slider.addEventListener('mouseup' , pixelSize);
userColorPicker.addEventListener('change', userColorSelection, false);
userColorPicker.addEventListener('input', userColorSelection, false);