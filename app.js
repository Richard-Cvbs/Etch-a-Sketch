/*Plan/Add HTML Structure
- Fill HTML text content
- Style Flexbox for main structure
- Create main container
- Create grid using JS
- Add color changing interation on JS
- Add  Interactivity using JS
- Add Interface with JS*/
const gridContainer = document.querySelector('.grid');
document.addEventListener('onload', (createBasicGrid()))
function createBasicGrid(){
    for (let i = 0; i<256; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        gridContainer.appendChild(newDiv);
    };
    gridListen();
    resetButtonsListen();
    newGridListen();
}
function gridListen(){
    let gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(Element =>{
        Element.addEventListener('mouseenter', e=>{
        Element.style.backgroundColor= 'black';
        })
    });
}
function resetButtonsListen(){
    const resetButton = document.querySelector('.reset')
    resetButton.addEventListener('click', e=>{
    let gridItems = document.querySelectorAll('.grid-item')
            gridItems.forEach(Element=>{
        Element.style.backgroundColor= 'White';
        })
    });
}
function newGridListen(){
    const gridChangeButtons = document.querySelectorAll('.grid-size-button')
    gridChangeButtons.forEach(Element =>{
        Element.addEventListener('click', e=>{
            removeGridItems();
            modifyGridFormat(e.target.value);
            createModifiedGrid(e.target.value);
            gridListen();
        })
    }
        )
}
function removeGridItems(){
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}
function modifyGridFormat(value){
    gridContainer.className=`grid grid-${value}x${value}`
}
function createModifiedGrid(value){
    let augmentedValue = Math.pow(value, 2);
    for (let i = 0; i<augmentedValue; i++){
        let newDiv = document.createElement('div');
        newDiv.className='grid-item';
        gridContainer.appendChild(newDiv);
    }
    gridListen();
}