/*Plan/Add HTML Structure
- Fill HTML text content
- Style Flexbox for main structure
- Create main container
- Create grid using JS
- Add color changing interation on JS
- Add  Interactivity using JS
- Add Interface with JS*/
const grid=document.querySelector(".grid")
function createGrid(){
    for(let i = 0; i<256; i++)
    let newGridDiv=document.createElement('div')
    grid.appendChild(newGridDiv)
}
function question(){
    console.log("sdfs")
}