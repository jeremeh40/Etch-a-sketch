window.onload = function() {
    createGrid()
}
const border = document.querySelector('#border');
let size = 16;

const button = document.querySelector('#button')
button.addEventListener('click', () => {
    resetGrid()
})


// const grid = document.createElement('div')
// grid.classList.add('grid')

function createGrid(){
    const container = document.createElement('div')
    container.setAttribute('id', 'container')
    border.appendChild(container)
    const colours = ['blue', 'green', 'red']

for (i=0; i<size; i++){
    console.log('hello')
    const grid = document.createElement('div')
    grid.classList.add('row')
    
    for (j=0; j<size; j++){
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', ()=> {
            const item =colours[Math.floor(Math.random()*colours.length)]
            square.setAttribute("style", 'Background-color: '+item)
        })
        // square.addEventListener('mouseout', ()=>{
        //     square.setAttribute("style", 'Background-color: white;')
        // })
        grid.appendChild(square)
        container.appendChild(grid)
    }
    

}
}

function resetGrid(){
    const container = document.querySelector('#container');
    size = prompt('what size grid would you like? ')
    if (size>100){
        alert('Maximum size is 100! please try again')
        size = prompt('what size grid would you like? ')
    }
    container.remove()
    createGrid()

    
}