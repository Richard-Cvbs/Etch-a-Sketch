/*Plan/Add HTML Structure
- Fill HTML text content
- Style Flexbox for main structure
- Create main container
- Create grid using JS
- Add color changing interation on JS
- Add  Interactivity using JS
- Add Interface with JS*/
const gridContainer = document.querySelector('.grid');
function createBasicGrid(){
    for (let i = 0; i<256; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item')
        gridContainer.appendChild(newDiv);
    }
}
createBasicGrid();
function gridListen(){
    let gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(Element =>{
        Element.addEventListener('mouseenter', e=>{
        Element.style.backgroundColor= 'black';
        })
    });
}
gridListen();
const resetButton = document.querySelector('.reset')
function resetGrid(){
    let gridItems = document.querySelectorAll('.grid-item')
    resetButton.addEventListener('click', e=>{
            gridItems.forEach(Element=>{
        Element.style.backgroundColor= 'White';
        })
    });
}
resetGrid();
const gridChangeButtons = document.querySelectorAll('.grid-size-button')
function gridChange(){
    gridChangeButtons.forEach(Element =>{
        Element.addEventListener('click', e=>{
            removeGridItems();
            createModifiedGrid(e.target.value);
        })
    }
        )
}
gridChange()
function removeGridItems(){
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}
function createModifiedGrid(value){
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${value}, 1fr);`); 
    let augmentedValue = Math.pow(value, 2);
    for (let i = 0; i<augmentedValue; i++){
        let newDiv = document.createElement('div');
        newDiv.className='grid-item';
        gridContainer.appendChild(newDiv);
    }